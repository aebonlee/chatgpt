import {createContext, useContext, useState, useEffect, useCallback} from 'react';
import { supabase, setSharedSession, getSharedSession, clearSharedSession } from '../utils/supabase';
import { ADMIN_EMAILS } from '../config/admin';
import { useIdleTimeout } from '../hooks/useIdleTimeout';
import ProfileCompleteModal from '../components/ProfileCompleteModal';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [_userProfile, _setUserProfile] = useState<any>(null);
  const [adminFlag, setAdminFlag] = useState(false);

  const checkAdmin = (currentUser) => {
    if (!currentUser) {
      setAdminFlag(false);
      return;
    }
    setAdminFlag(ADMIN_EMAILS.includes(currentUser.email?.toLowerCase()));
  };

  const trackDomain = async (authUser: any) => {
    if (!authUser) return;
    try {
      const currentDomain = window.location.hostname;
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('signup_domain, visited_sites')
        .eq('id', authUser.id)
        .single();
      if (!profile) return;
      const updates: any = { last_sign_in_at: new Date().toISOString() };
      if (!profile.signup_domain) updates.signup_domain = currentDomain;
      const sites = Array.isArray(profile.visited_sites) ? profile.visited_sites : [];
      if (!sites.includes(currentDomain)) {
        updates.visited_sites = [...sites, currentDomain];
      }
      await supabase.from('user_profiles').update(updates).eq('id', authUser.id);
    } catch { /* ignore */ }
  };

  
  // ─── 프로필 완성 체크용 user_profiles 로드 ───
  const _loadUserProfile = useCallback(async (uid: string) => {
    try {
      const { data } = await supabase!.from('user_profiles').select('name,phone').eq('id', uid).maybeSingle();
      _setUserProfile(data);
    } catch { _setUserProfile(null); }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdmin(currentUser);
      if (currentUser) trackDomain(currentUser);
      if (!currentUser) {
        const rt = getSharedSession();
        if (rt) {
          try {
            const { data } = await supabase.auth.refreshSession({ refresh_token: rt });
            if (!data.session) clearSharedSession();
          } catch { clearSharedSession(); }
        }
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdmin(currentUser);
      if (session?.refresh_token) setSharedSession(session.refresh_token);
      if (event === 'SIGNED_OUT') clearSharedSession();
      if (currentUser && event === 'SIGNED_IN') trackDomain(currentUser);
    });

    return () => subscription.unsubscribe();
  }, []);


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: !!user,
  onTimeout: () => {
  clearSharedSession();
  },
  });
  const refreshProfile = useCallback(async () => { if (user) await _loadUserProfile(user.id); }, [user, _loadUserProfile]);
  const needsProfileCompletion = !!user && !!_userProfile && (!_userProfile.name || !_userProfile.phone);


  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, isAdmin: adminFlag }}>
      {children}
      {needsProfileCompletion && user && (
        <ProfileCompleteModal user={user} onComplete={refreshProfile} />
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
