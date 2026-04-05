import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { signInWithEmail, signInWithGoogle, signInWithKakao } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function Login() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error: err } = await signInWithEmail(email, password);
    if (err) {
      setError(isKo ? '이메일 또는 비밀번호가 올바르지 않습니다.' : 'Invalid email or password.');
    } else {
      navigate('/');
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <SEOHead title={isKo ? '로그인' : 'Login'} path="/login" />
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">{isKo ? '로그인' : 'Login'}</h1>
          <p className="auth-subtitle">{isKo ? 'ChatGPT Master에 로그인하세요' : 'Sign in to ChatGPT Master'}</p>
        </div>

        <div className="auth-social">
          <button className="social-btn social-btn-google" onClick={signInWithGoogle}>
            <i className="fa-brands fa-google" /> Google
          </button>
          <button className="social-btn social-btn-kakao" onClick={signInWithKakao}>
            <i className="fa-solid fa-comment" /> {isKo ? '카카오 로그인' : 'Kakao Login'}
          </button>
        </div>

        <div className="auth-divider">{isKo ? '또는' : 'or'}</div>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>{isKo ? '이메일' : 'Email'}</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
          <div className="auth-field">
            <label>{isKo ? '비밀번호' : 'Password'}</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? (isKo ? '로그인 중...' : 'Signing in...') : (isKo ? '로그인' : 'Sign In')}
          </button>
        </form>

        <div className="auth-footer">
          {isKo ? '계정이 없으신가요? ' : "Don't have an account? "}
          <Link to="/register">{isKo ? '회원가입' : 'Sign Up'}</Link>
        </div>
      </div>
    </div>
  );
}
