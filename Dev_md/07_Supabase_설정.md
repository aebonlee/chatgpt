# ChatGPT Master - Supabase 설정 가이드

> 모든 테이블은 `chatgpt_` 접두어를 사용합니다 (다른 사이트와 Supabase를 공유하기 때문).

## 1. 환경 변수

GitHub Secrets에 이미 설정되어 있으며, GitHub Actions 빌드 시 자동 주입됩니다.

| Secret | 설명 |
|--------|------|
| `VITE_SUPABASE_URL` | Supabase 프로젝트 URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase Anonymous Key |

로컬 개발 시 `.env` 파일 생성:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 2. Supabase SQL 스크립트

Supabase Dashboard > SQL Editor에서 아래 스크립트를 순서대로 실행하세요.

### 2-1. chatgpt_posts 테이블

```sql
CREATE TABLE IF NOT EXISTS chatgpt_posts (
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

CREATE INDEX IF NOT EXISTS idx_chatgpt_posts_category ON chatgpt_posts(category);
CREATE INDEX IF NOT EXISTS idx_chatgpt_posts_created_at ON chatgpt_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chatgpt_posts_author_id ON chatgpt_posts(author_id);
```

### 2-2. chatgpt_comments 테이블

```sql
CREATE TABLE IF NOT EXISTS chatgpt_comments (
  id BIGSERIAL PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES chatgpt_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chatgpt_comments_post_id ON chatgpt_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_chatgpt_comments_author_id ON chatgpt_comments(author_id);
```

### 2-3. 조회수 증가 RPC 함수

```sql
CREATE OR REPLACE FUNCTION chatgpt_increment_view_count(post_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE chatgpt_posts SET view_count = view_count + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 2-4. RLS (Row Level Security) 정책

```sql
ALTER TABLE chatgpt_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE chatgpt_comments ENABLE ROW LEVEL SECURITY;

-- chatgpt_posts 정책
CREATE POLICY "chatgpt_posts_select" ON chatgpt_posts FOR SELECT USING (true);
CREATE POLICY "chatgpt_posts_insert" ON chatgpt_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "chatgpt_posts_delete" ON chatgpt_posts FOR DELETE USING (auth.uid() = author_id);
CREATE POLICY "chatgpt_posts_update" ON chatgpt_posts FOR UPDATE USING (auth.uid() = author_id);

-- chatgpt_comments 정책
CREATE POLICY "chatgpt_comments_select" ON chatgpt_comments FOR SELECT USING (true);
CREATE POLICY "chatgpt_comments_insert" ON chatgpt_comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "chatgpt_comments_delete" ON chatgpt_comments FOR DELETE USING (auth.uid() = author_id);
```

### 2-5. updated_at 자동 갱신 트리거

```sql
CREATE OR REPLACE FUNCTION chatgpt_update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER chatgpt_posts_updated_at
  BEFORE UPDATE ON chatgpt_posts
  FOR EACH ROW EXECUTE FUNCTION chatgpt_update_updated_at();
```

## 3. 테이블 구조 요약

### chatgpt_posts
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

### chatgpt_comments
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGSERIAL | PK |
| post_id | BIGINT | chatgpt_posts FK (CASCADE 삭제) |
| author_id | UUID | 작성자 (auth.users FK) |
| author_name | TEXT | 작성자 표시 이름 |
| body | TEXT | 댓글 내용 |
| created_at | TIMESTAMPTZ | 생성일시 |

## 4. 코드 매핑

| 코드 (posts.js) | Supabase 테이블 |
|-----------------|----------------|
| `.from('chatgpt_posts')` | chatgpt_posts |
| `.from('chatgpt_comments')` | chatgpt_comments |
| `.rpc('chatgpt_increment_view_count')` | chatgpt_increment_view_count() |
