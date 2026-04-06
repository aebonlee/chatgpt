/**
 * LicenseGuard 설정 — chatgpt
 */
export const SITE_SLUG = 'chatgpt';

/** 무료 접근 가능한 라우트 (재방문자도 접근 가능) */
export const FREE_ROUTES: string[] = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/community/*',
  // 사이트별 무료 콘텐츠 (1~2개)
  '/chatgpt-basics',
];
