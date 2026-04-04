# ChatGPT Master - Supabase 설정 가이드

## 1. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 2. Supabase SQL 스크립트

Supabase Dashboard > SQL Editor에서 아래 스크립트를 순서대로 실행하세요.

### 2-1. posts 테이블 생성

```sql
-- posts 테이블
CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  category TEXT NOT NULL DEFAULT 'free' CHECK (category IN ('notice', 'resource', 'question', 'free')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  view_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id);
```

### 2-2. comments 테이블 생성

```sql
-- comments 테이블
CREATE TABLE IF NOT EXISTS comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments(author_id);
```

### 2-3. 조회수 증가 함수 (RPC)

```sql
-- 조회수 증가 RPC 함수
CREATE OR REPLACE FUNCTION increment_view_count(post_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE posts SET view_count = view_count + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 2-4. RLS (Row Level Security) 정책

```sql
-- RLS 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- posts 정책
CREATE POLICY "posts_select" ON posts FOR SELECT USING (true);
CREATE POLICY "posts_insert" ON posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "posts_delete" ON posts FOR DELETE USING (auth.uid() = author_id);
CREATE POLICY "posts_update" ON posts FOR UPDATE USING (auth.uid() = author_id);

-- comments 정책
CREATE POLICY "comments_select" ON comments FOR SELECT USING (true);
CREATE POLICY "comments_insert" ON comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "comments_delete" ON comments FOR DELETE USING (auth.uid() = author_id);
```

### 2-5. updated_at 자동 갱신 트리거

```sql
-- updated_at 자동 갱신
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

## 3. Supabase Authentication 설정

### Supabase Dashboard > Authentication > Providers

1. **Email** — 기본 활성화 (이메일/비밀번호 로그인)
2. **Google** — OAuth 설정
   - Google Cloud Console에서 OAuth 2.0 클라이언트 ID 생성
   - Redirect URL: `https://your-project.supabase.co/auth/v1/callback`
3. **Kakao** — OAuth 설정
   - Kakao Developers에서 앱 생성
   - Redirect URL: `https://your-project.supabase.co/auth/v1/callback`

### Supabase Dashboard > Authentication > URL Configuration

- **Site URL**: `https://chatgpt.dreamitbiz.com`
- **Redirect URLs**: `https://chatgpt.dreamitbiz.com/`, `http://localhost:5177/`

## 4. 관리자 설정

`src/config/admin.js`에서 관리자 이메일을 설정합니다:

```javascript
export const ADMIN_EMAILS = [
  'aebonlee@gmail.com',
  'aebon@kakao.com',
  'admin@dreamitbiz.com',
];
```

## 5. 테이블 구조 요약

### posts
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGSERIAL | PK |
| author_id | UUID | 작성자 (auth.users FK) |
| author_name | TEXT | 작성자 표시 이름 |
| category | TEXT | notice/resource/question/free |
| title | TEXT | 제목 |
| content | TEXT | 내용 |
| view_count | INTEGER | 조회수 |
| created_at | TIMESTAMPTZ | 생성일시 |
| updated_at | TIMESTAMPTZ | 수정일시 |

### comments
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGSERIAL | PK |
| post_id | BIGINT | 게시글 FK (CASCADE 삭제) |
| author_id | UUID | 작성자 (auth.users FK) |
| author_name | TEXT | 작성자 표시 이름 |
| body | TEXT | 댓글 내용 |
| created_at | TIMESTAMPTZ | 생성일시 |
