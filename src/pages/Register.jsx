import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { signUpWithEmail, signInWithGoogle, signInWithKakao } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function Register() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError(isKo ? '비밀번호는 6자 이상이어야 합니다.' : 'Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: err } = await signUpWithEmail(email, password, { full_name: name, display_name: name });
    if (err) {
      setError(err.message);
    } else {
      setSuccess(isKo ? '이메일 인증 링크를 발송했습니다. 메일을 확인해주세요.' : 'Verification email sent. Please check your inbox.');
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <SEOHead title={isKo ? '회원가입' : 'Sign Up'} path="/register" />
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">{isKo ? '회원가입' : 'Sign Up'}</h1>
          <p className="auth-subtitle">{isKo ? 'ChatGPT Master에 가입하세요' : 'Join ChatGPT Master'}</p>
        </div>

        <div className="auth-social">
          <button className="social-btn social-btn-google" onClick={signInWithGoogle}>
            <i className="fa-brands fa-google" /> Google
          </button>
          <button className="social-btn social-btn-kakao" onClick={signInWithKakao}>
            <i className="fa-solid fa-comment" /> {isKo ? '카카오 가입' : 'Kakao Sign Up'}
          </button>
        </div>

        <div className="auth-divider">{isKo ? '또는' : 'or'}</div>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-message success">{success}</div>}

        {!success && (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label>{isKo ? '이름' : 'Name'}</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={isKo ? '홍길동' : 'John Doe'} required />
            </div>
            <div className="auth-field">
              <label>{isKo ? '이메일' : 'Email'}</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>
            <div className="auth-field">
              <label>{isKo ? '비밀번호' : 'Password'}</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="6자 이상" required />
            </div>
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? (isKo ? '가입 중...' : 'Signing up...') : (isKo ? '회원가입' : 'Sign Up')}
            </button>
          </form>
        )}

        <div className="auth-footer">
          {isKo ? '이미 계정이 있으신가요? ' : 'Already have an account? '}
          <Link to="/login">{isKo ? '로그인' : 'Sign In'}</Link>
        </div>
      </div>
    </div>
  );
}
