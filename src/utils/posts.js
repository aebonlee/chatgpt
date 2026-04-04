import { supabase } from './supabase';

export async function getPosts({ category, search, limit } = {}) {
  let query = supabase
    .from('chatgpt_posts')
    .select('*, comment_count:chatgpt_comments(count)')
    .order('created_at', { ascending: false });

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  if (search && search.trim()) {
    const q = search.trim();
    query = query.or(`title.ilike.%${q}%,author_name.ilike.%${q}%`);
  }

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;
  if (error) throw error;

  return data.map(post => ({
    ...post,
    comment_count: post.comment_count?.[0]?.count ?? 0,
  }));
}

export async function getPostById(id) {
  await supabase.rpc('chatgpt_increment_view_count', { post_id: Number(id) }).catch(() => {});

  const { data: post, error } = await supabase
    .from('chatgpt_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  const { data: comments } = await supabase
    .from('chatgpt_comments')
    .select('*')
    .eq('post_id', id)
    .order('created_at', { ascending: true });

  return { ...post, comments: comments || [] };
}

export async function createPost({ category, title, content, authorId, authorName }) {
  const { data, error } = await supabase
    .from('chatgpt_posts')
    .insert({
      author_id: authorId,
      author_name: authorName,
      category,
      title,
      content,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deletePost(id) {
  const { error } = await supabase.from('chatgpt_posts').delete().eq('id', id);
  if (error) throw error;
}

export async function createComment({ postId, body, authorId, authorName }) {
  const { data, error } = await supabase
    .from('chatgpt_comments')
    .insert({
      post_id: postId,
      author_id: authorId,
      author_name: authorName,
      body,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteComment(id) {
  const { error } = await supabase.from('chatgpt_comments').delete().eq('id', id);
  if (error) throw error;
}
