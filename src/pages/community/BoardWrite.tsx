import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import SEOHead from '../../components/SEOHead';
import { createPost } from '../../utils/posts';

const categoryOptions = [
  { key: 'resource', label: '자료', labelEn: 'Resource' },
  { key: 'question', label: '질문', labelEn: 'Question' },
  { key: 'free', label: '자유', labelEn: 'Free' },
];

export default function BoardWrite() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const navigate = useNavigate();
  const { user } = useAuth();
  const toast = useToast();
  const [category, setCategory] = useState('free');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setLoading(true);
    try {
      const authorName = user?.user_metadata?.display_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Anonymous';
      await createPost({ category, title: title.trim(), content: content.trim(), authorId: user.id, authorName });
      toast.success(isKo ? '게시글이 등록되었습니다.' : 'Post has been created.');
      navigate('/community/board');
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="community-page">
      <SEOHead title={isKo ? '글쓰기' : 'Write Post'} path="/community/board/write" />
      <div className="container">
        <div className="write-page">
          <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '32px' }}>{isKo ? '글쓰기' : 'Write Post'}</h1>
          <form className="write-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{isKo ? '카테고리' : 'Category'}</label>
              <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
                {categoryOptions.map(opt => <option key={opt.key} value={opt.key}>{isKo ? opt.label : opt.labelEn}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">{isKo ? '제목' : 'Title'}</label>
              <input type="text" className="form-input" placeholder={isKo ? '제목을 입력하세요' : 'Enter title'} value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">{isKo ? '내용' : 'Content'}</label>
              <textarea className="form-textarea" style={{ minHeight: '300px' }} placeholder={isKo ? '내용을 입력하세요...' : 'Enter content...'} value={content} onChange={e => setContent(e.target.value)} />
            </div>
            <div className="write-actions">
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => navigate('/community/board')}>{isKo ? '취소' : 'Cancel'}</button>
              <button type="submit" className="btn btn-primary btn-sm" disabled={!title.trim() || !content.trim() || loading}>
                {loading ? (isKo ? '등록 중...' : 'Submitting...') : <><i className="fa-solid fa-paper-plane" /> {isKo ? '등록' : 'Submit'}</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
