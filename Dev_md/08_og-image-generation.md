# OG 이미지 생성 (카카오/SNS 미리보기)

## 개요
카카오톡, 슬랙, 디스코드 등에서 URL 공유 시 미리보기 이미지가 표시되도록 Open Graph 이미지를 생성.

## 구현

### 생성 스크립트
- **파일**: `scripts/generate-og-image.mjs`
- **도구**: sharp (Node.js 이미지 처리 라이브러리)
- **방식**: SVG → PNG 변환

### 생성된 이미지
- **경로**: `public/og/default.png`
- **크기**: 1200 x 630px (OG 표준)
- **용량**: ~77KB

### 디자인 요소
- 다크 배경 그라데이션 (#0D0D0F → #1A1A2E → #16213E → #0F3D3E)
- ChatGPT Green (#10A37F) + OpenAI Purple (#6E42D3) 액센트 그라데이션
- "C" 로고 아이콘 (Green-Purple 그라데이션)
- 6개 학습 경로 태그 (각각 고유 색상):
  - ChatGPT 기초 (#10A37F), Prompts (#6E42D3), GPTs & Store (#2563EB)
  - API 활용 (#E11D48), 고급 기능 (#D97706), 모델 비교 (#0891B2)
- 하단 URL 바 (chatgpt.dreamitbiz.com / Powered by OpenAI)

### OG 메타 태그
`index.html`에 정적 OG 메타 태그 추가:
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://chatgpt.dreamitbiz.com/" />
<meta property="og:title" content="ChatGPT Master - AI 학습 플랫폼" />
<meta property="og:description" content="ChatGPT의 모든 기능을 학습하는 종합 플랫폼" />
<meta property="og:image" content="https://chatgpt.dreamitbiz.com/og/default.png" />
<meta property="og:site_name" content="ChatGPT Master" />
<meta property="og:locale" content="ko_KR" />
<meta name="twitter:card" content="summary_large_image" />
```

### 실행 방법
```bash
npm install sharp --save-dev
node scripts/generate-og-image.mjs
```

### 검증
- 카카오 디버거: https://developers.kakao.com/tool/debugger/sharing
- Facebook 디버거: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
