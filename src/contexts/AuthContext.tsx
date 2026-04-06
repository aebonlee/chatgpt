import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { isAdmin as isAdminEmail } from '../config/admin';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adminFlag, setAdminFlag] = useState(false);

  const checkAdmin = (currentUser) => {
    if (!currentUser) {
      setAdminFlag(false);
      return;
    }
    setAdminFlag(isAdminEmail(currentUser.email));
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdmin(currentUser);
      if (currentUser) trackDomain(currentUser);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdmin(currentUser);
      if (currentUser && event === 'SIGNED_IN') trackDomain(currentUser);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, isAdmin: adminFlag }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
