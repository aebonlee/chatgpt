import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'dalle', icon: 'fa-image', ko: 'DALL-E (이미지 생성)', en: 'DALL-E (Image Gen)' },
  { id: 'code', icon: 'fa-terminal', ko: 'Code Interpreter', en: 'Code Interpreter' },
  { id: 'browsing', icon: 'fa-globe', ko: '웹 브라우징', en: 'Web Browsing' },
  { id: 'files', icon: 'fa-file-alt', ko: '파일 분석', en: 'File Analysis' },
  { id: 'canvas', icon: 'fa-pen-ruler', ko: 'Canvas', en: 'Canvas' },
  { id: 'voice', icon: 'fa-microphone', ko: '음성 대화', en: 'Voice Chat' },
  { id: 'memory', icon: 'fa-brain', ko: 'Memory 기능', en: 'Memory Feature' },
];

export default function AdvancedFeatures() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState('dalle');

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const goToSection = (id) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goPrev = () => {
    if (currentIndex > 0) goToSection(SECTIONS[currentIndex - 1].id);
  };

  const goNext = () => {
    if (currentIndex < SECTIONS.length - 1) goToSection(SECTIONS[currentIndex + 1].id);
  };

  return (
    <>
      <SEOHead
        title={isKo ? 'ChatGPT 고급 기능 가이드' : 'ChatGPT Advanced Features Guide'}
        description={
          isKo
            ? 'DALL-E, Code Interpreter, 웹 브라우징, Canvas, 음성 대화, Memory 등 ChatGPT의 고급 기능을 상세히 학습합니다.'
            : 'Learn ChatGPT advanced features including DALL-E, Code Interpreter, Web Browsing, Canvas, Voice Chat, and Memory in detail.'
        }
        path="/advanced-features"
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* Sidebar */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {isKo ? '고급 기능' : 'Advanced Features'}
            </div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => goToSection(section.id)}
                  >
                    <span className="nav-icon"><i className={`fa-solid ${section.icon}`} /></span>
                    {isKo ? section.ko : section.en}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <div className="guide-content">
            <div className="guide-content-header">
              <h1>
                {isKo ? 'ChatGPT 고급 기능 완전 가이드' : 'Complete Guide to ChatGPT Advanced Features'}
              </h1>
              <p>
                {isKo
                  ? 'DALL-E 이미지 생성, Code Interpreter, 웹 브라우징, Canvas, 음성 대화, Memory 등 ChatGPT의 강력한 고급 기능들을 마스터하세요.'
                  : 'Master powerful ChatGPT features including DALL-E image generation, Code Interpreter, web browsing, Canvas, voice chat, and Memory.'}
              </p>
            </div>

          {/* DALL-E Section */}
          {activeSection === 'dalle' && (
            <section className="guide-section">
              <h2>
                <i className="fa-solid fa-image" />
                {isKo ? 'DALL-E 3 - AI 이미지 생성' : 'DALL-E 3 - AI Image Generation'}
              </h2>

              <div>
                <h3>{isKo ? 'DALL-E 3 소개' : 'Introduction to DALL-E 3'}</h3>
                <p>
                  {isKo
                    ? 'DALL-E 3는 OpenAI가 개발한 최신 이미지 생성 AI 모델로, ChatGPT Plus 및 Team 구독자에게 제공됩니다. 텍스트 프롬프트를 기반으로 고품질 이미지를 생성할 수 있으며, 이전 버전보다 프롬프트를 훨씬 정확하게 이해합니다.'
                    : 'DALL-E 3 is OpenAI\'s latest image generation AI model, available to ChatGPT Plus and Team subscribers. It can generate high-quality images based on text prompts and understands prompts much more accurately than previous versions.'}
                </p>
                <p>
                  {isKo
                    ? 'ChatGPT에 통합되어 있어 별도의 도구 없이 대화 중에 바로 이미지를 생성할 수 있습니다. ChatGPT가 사용자의 요청을 이해하고 최적의 프롬프트를 자동으로 작성해주기 때문에, 프롬프트 엔지니어링 경험이 없어도 쉽게 사용할 수 있습니다.'
                    : 'Integrated into ChatGPT, you can generate images directly during conversation without separate tools. ChatGPT understands your request and automatically creates optimal prompts, making it easy to use even without prompt engineering experience.'}
                </p>
              </div>

              <div>
                <h3>{isKo ? '이미지 생성 프롬프트 작성법' : 'Writing Image Generation Prompts'}</h3>
                <p>
                  {isKo
                    ? '효과적인 이미지 생성을 위해 다음 요소들을 프롬프트에 포함하세요:'
                    : 'Include the following elements in your prompt for effective image generation:'}
                </p>
                <ul>
                  <li>
                    <strong>{isKo ? '주제 (Subject)' : 'Subject'}</strong>:{' '}
                    {isKo ? '무엇을 그릴 것인지 명확하게 설명' : 'Clearly describe what to draw'}
                  </li>
                  <li>
                    <strong>{isKo ? '스타일 (Style)' : 'Style'}</strong>:{' '}
                    {isKo ? '사실적, 일러스트, 수채화, 픽셀아트 등' : 'Realistic, illustration, watercolor, pixel art, etc.'}
                  </li>
                  <li>
                    <strong>{isKo ? '분위기 (Mood)' : 'Mood'}</strong>:{' '}
                    {isKo ? '밝은, 어두운, 따뜻한, 차가운, 드라마틱 등' : 'Bright, dark, warm, cold, dramatic, etc.'}
                  </li>
                  <li>
                    <strong>{isKo ? '구도 (Composition)' : 'Composition'}</strong>:{' '}
                    {isKo ? '클로즈업, 와이드샷, 조감도, 대칭 등' : 'Close-up, wide shot, bird\'s eye view, symmetry, etc.'}
                  </li>
                  <li>
                    <strong>{isKo ? '조명 (Lighting)' : 'Lighting'}</strong>:{' '}
                    {isKo ? '자연광, 골든아워, 네온, 스튜디오 조명 등' : 'Natural light, golden hour, neon, studio lighting, etc.'}
                  </li>
                </ul>

                <CodeBlock
                  language="text"
                  code={isKo
                    ? `# 좋은 프롬프트 예시

"도쿄의 네온 불빛이 비추는 비 오는 밤거리를 걷는
우산을 쓴 사람의 뒷모습. 사이버펑크 스타일,
시네마틱 구도, 반사되는 물웅덩이,
보라색과 파란색 네온 조명."

# 스타일별 키워드
- 사실적 사진: "photorealistic, 8K, detailed"
- 일러스트: "digital illustration, concept art"
- 유화: "oil painting, impasto, textured canvas"
- 미니멀: "minimalist, clean lines, flat design"
- 애니메이션: "anime style, Studio Ghibli inspired"`
                    : `# Good Prompt Example

"A person with an umbrella walking away on a rainy
night street in Tokyo lit by neon lights. Cyberpunk
style, cinematic composition, reflecting puddles,
purple and blue neon lighting."

# Style Keywords
- Realistic photo: "photorealistic, 8K, detailed"
- Illustration: "digital illustration, concept art"
- Oil painting: "oil painting, impasto, textured canvas"
- Minimal: "minimalist, clean lines, flat design"
- Anime: "anime style, Studio Ghibli inspired"`}
                />
              </div>

              <div>
                <h3>{isKo ? '스타일 지정과 이미지 편집' : 'Style Specification and Image Editing'}</h3>
                <p>
                  {isKo
                    ? 'DALL-E 3에서는 다양한 아트 스타일을 지정할 수 있습니다. 특정 아티스트의 이름을 사용하는 것은 제한되지만, 스타일 자체를 설명하면 원하는 결과를 얻을 수 있습니다.'
                    : 'DALL-E 3 allows you to specify various art styles. While using specific artist names is restricted, describing the style itself can help achieve desired results.'}
                </p>
                <p>
                  {isKo
                    ? '생성된 이미지가 마음에 들지 않으면, 후속 대화를 통해 수정을 요청할 수 있습니다. 예를 들어 "배경을 파란색으로 바꿔줘", "사람을 제거해줘", "더 밝게 만들어줘" 등의 요청이 가능합니다.'
                    : 'If you\'re not satisfied with the generated image, you can request modifications through follow-up conversation. For example, "change the background to blue", "remove the person", "make it brighter", etc.'}
                </p>

                <TipBox type="tip" title={isKo ? '스타일 지정 팁' : 'Style Specification Tips'}>
                  {isKo
                    ? '특정 시대나 매체를 참조하면 좋습니다. 예: "1980년대 일본 애니메이션 스타일", "빈티지 영화 포스터 스타일", "인상주의 풍경화 스타일" 등으로 구체적으로 설명하세요.'
                    : 'Reference specific eras or mediums. For example: "1980s Japanese animation style", "vintage movie poster style", "impressionist landscape painting style" - be specific in your descriptions.'}
                </TipBox>
              </div>

              <div>
                <h3>{isKo ? '해상도, 비율 옵션 및 제한사항' : 'Resolution, Aspect Ratio Options & Limitations'}</h3>
                <p>{isKo ? 'DALL-E 3에서 지원하는 이미지 크기:' : 'Image sizes supported by DALL-E 3:'}</p>
                <ul>
                  <li><strong>1024 x 1024</strong> - {isKo ? '정사각형 (기본값)' : 'Square (default)'}</li>
                  <li><strong>1792 x 1024</strong> - {isKo ? '와이드 (가로형)' : 'Wide (landscape)'}</li>
                  <li><strong>1024 x 1792</strong> - {isKo ? '세로형 (포트레이트)' : 'Tall (portrait)'}</li>
                </ul>

                <TipBox type="warning" title={isKo ? '주요 제한사항' : 'Key Limitations'}>
                  <ul>
                    <li>{isKo ? '실존 인물의 얼굴을 정확하게 생성하지 않습니다' : 'Cannot accurately generate faces of real people'}</li>
                    <li>{isKo ? '텍스트 렌더링이 완벽하지 않을 수 있습니다' : 'Text rendering may not be perfect'}</li>
                    <li>{isKo ? '정확한 손가락 개수 등 해부학적 디테일에 한계가 있습니다' : 'Anatomical details like exact finger count may have limitations'}</li>
                    <li>{isKo ? '저작권이 있는 캐릭터를 직접 생성할 수 없습니다' : 'Cannot directly generate copyrighted characters'}</li>
                    <li>{isKo ? 'Plus 사용자는 시간당 생성 횟수에 제한이 있습니다' : 'Plus users have hourly generation limits'}</li>
                  </ul>
                </TipBox>
              </div>
            </section>
          )}

          {/* Code Interpreter Section */}
          {activeSection === 'code' && (
            <section className="guide-section">
              <h2>
                <i className="fa-solid fa-terminal" />
                {isKo ? 'Code Interpreter (코드 인터프리터)' : 'Code Interpreter'}
              </h2>

              <div>
                <h3>{isKo ? 'Code Interpreter 소개' : 'Introduction to Code Interpreter'}</h3>
                <p>
                  {isKo
                    ? 'Code Interpreter는 ChatGPT 내에서 Python 코드를 직접 실행할 수 있는 강력한 기능입니다. 샌드박스 환경에서 안전하게 코드를 실행하며, 데이터 분석, 차트 생성, 파일 변환, 수학 계산 등 다양한 작업을 수행할 수 있습니다.'
                    : 'Code Interpreter is a powerful feature that allows running Python code directly within ChatGPT. It safely executes code in a sandboxed environment and can perform various tasks including data analysis, chart generation, file conversion, and mathematical calculations.'}
                </p>
                <p>
                  {isKo
                    ? '사용자가 프로그래밍 지식이 없더라도 자연어로 요청하면 ChatGPT가 적절한 코드를 작성하고 실행해줍니다. 결과는 시각적으로 표시되며, 생성된 파일은 다운로드할 수 있습니다.'
                    : 'Even without programming knowledge, users can make requests in natural language and ChatGPT will write and execute the appropriate code. Results are displayed visually, and generated files can be downloaded.'}
                </p>
              </div>

              <div>
                <h3>{isKo ? '데이터 분석 활용' : 'Data Analysis Use Cases'}</h3>
                <p>
                  {isKo
                    ? 'Excel, CSV 파일을 업로드하여 다양한 데이터 분석을 수행할 수 있습니다:'
                    : 'Upload Excel or CSV files to perform various data analyses:'}
                </p>
                <CodeBlock
                  language="python"
                  code={isKo
                    ? `# ChatGPT에 요청하는 방식의 예시
# "이 매출 데이터를 분석해줘"라고 요청하면 아래와 같은 코드가 실행됩니다

import pandas as pd
import matplotlib.pyplot as plt

# 데이터 로드 및 기본 통계
df = pd.read_csv('sales_data.csv')
print(df.describe())

# 월별 매출 추이 시각화
monthly = df.groupby('month')['revenue'].sum()
plt.figure(figsize=(10, 6))
plt.plot(monthly.index, monthly.values, marker='o')
plt.title('월별 매출 추이')
plt.xlabel('월')
plt.ylabel('매출 (만원)')
plt.grid(True)
plt.show()`
                    : `# Example of requesting analysis from ChatGPT
# When you ask "Analyze this sales data", code like this runs

import pandas as pd
import matplotlib.pyplot as plt

# Load data and basic statistics
df = pd.read_csv('sales_data.csv')
print(df.describe())

# Monthly revenue trend visualization
monthly = df.groupby('month')['revenue'].sum()
plt.figure(figsize=(10, 6))
plt.plot(monthly.index, monthly.values, marker='o')
plt.title('Monthly Revenue Trend')
plt.xlabel('Month')
plt.ylabel('Revenue ($)')
plt.grid(True)
plt.show()`}
                />
                <TipBox type="tip" title={isKo ? '데이터 분석 팁' : 'Data Analysis Tips'}>
                  {isKo
                    ? '파일을 업로드한 후 "이 데이터의 전체적인 요약을 보여줘"라고 먼저 요청하면, 데이터의 구조와 내용을 파악한 후 더 구체적인 분석을 요청할 수 있습니다.'
                    : 'After uploading a file, first ask "Show me an overall summary of this data" to understand the structure and content before requesting more specific analyses.'}
                </TipBox>
              </div>

              <div>
                <h3>{isKo ? '차트 생성 및 시각화' : 'Chart Generation & Visualization'}</h3>
                <p>
                  {isKo
                    ? 'matplotlib, seaborn 등의 라이브러리를 활용하여 다양한 차트를 생성할 수 있습니다:'
                    : 'Create various charts using libraries like matplotlib and seaborn:'}
                </p>
                <ul>
                  <li>{isKo ? '막대 그래프, 선 그래프, 파이 차트' : 'Bar charts, line graphs, pie charts'}</li>
                  <li>{isKo ? '히트맵, 산점도, 박스플롯' : 'Heatmaps, scatter plots, box plots'}</li>
                  <li>{isKo ? '히스토그램, 면적 그래프' : 'Histograms, area charts'}</li>
                  <li>{isKo ? '워드클라우드, 트리맵' : 'Word clouds, treemaps'}</li>
                </ul>
                <p>
                  {isKo
                    ? '"이 데이터를 파이 차트로 보여줘", "연도별 비교 막대 그래프를 만들어줘"와 같이 자연어로 요청하면 됩니다.'
                    : 'Simply request in natural language like "Show this data as a pie chart" or "Create a yearly comparison bar graph".'}
                </p>
              </div>

              <div>
                <h3>{isKo ? '파일 변환 및 기타 기능' : 'File Conversion & Other Features'}</h3>
                <p>{isKo ? 'Code Interpreter로 할 수 있는 추가 작업들:' : 'Additional tasks possible with Code Interpreter:'}</p>
                <ul>
                  <li>{isKo ? 'CSV를 Excel로, JSON을 CSV로 등 파일 형식 변환' : 'File format conversion: CSV to Excel, JSON to CSV, etc.'}</li>
                  <li>{isKo ? '이미지 리사이즈, 크롭, 형식 변환 (PNG, JPG, WebP 등)' : 'Image resize, crop, format conversion (PNG, JPG, WebP, etc.)'}</li>
                  <li>{isKo ? '수학적 계산 및 방정식 풀이' : 'Mathematical calculations and equation solving'}</li>
                  <li>{isKo ? 'QR 코드 생성' : 'QR code generation'}</li>
                  <li>{isKo ? '간단한 게임이나 애니메이션 GIF 생성' : 'Simple game or animated GIF creation'}</li>
                </ul>

                <TipBox type="warning" title={isKo ? 'Code Interpreter 제한사항' : 'Code Interpreter Limitations'}>
                  <ul>
                    <li>{isKo ? '인터넷에 접속할 수 없습니다 (외부 API 호출 불가)' : 'Cannot access the internet (no external API calls)'}</li>
                    <li>{isKo ? '실행 시간 제한이 있습니다 (약 120초)' : 'Execution time limit exists (approximately 120 seconds)'}</li>
                    <li>{isKo ? '업로드 파일 크기 제한이 있습니다' : 'Upload file size limits exist'}</li>
                    <li>{isKo ? '세션이 끝나면 생성된 파일이 삭제됩니다' : 'Generated files are deleted when the session ends'}</li>
                    <li>{isKo ? '일부 Python 라이브러리만 사용 가능합니다' : 'Only certain Python libraries are available'}</li>
                  </ul>
                </TipBox>
              </div>
            </section>
          )}

          {/* Web Browsing Section */}
          {activeSection === 'browsing' && (
            <section className="guide-section">
              <h2>
                <i className="fa-solid fa-globe" />
                {isKo ? '웹 브라우징 (Web Browsing)' : 'Web Browsing'}
              </h2>

              <div>
                <h3>{isKo ? '웹 검색 기능 소개' : 'Web Search Feature Introduction'}</h3>
                <p>
                  {isKo
                    ? 'ChatGPT의 웹 브라우징 기능을 통해 실시간 인터넷 정보를 검색하고 활용할 수 있습니다. 학습 데이터의 컷오프 날짜 이후의 최신 정보도 확인할 수 있어, 항상 최신 상태의 답변을 받을 수 있습니다.'
                    : 'ChatGPT\'s web browsing feature allows you to search and utilize real-time internet information. You can check the latest information beyond the training data cutoff date, ensuring you always get up-to-date answers.'}
                </p>
                <p>
                  {isKo
                    ? 'ChatGPT는 필요에 따라 자동으로 웹 검색을 수행하거나, 사용자가 직접 검색을 요청할 수 있습니다. 검색 결과에는 출처 링크가 포함되어 정보의 신뢰성을 확인할 수 있습니다.'
                    : 'ChatGPT automatically performs web searches as needed, or users can directly request searches. Search results include source links to verify information reliability.'}
                </p>
              </div>

              <div>
                <h3>{isKo ? '실시간 정보 검색' : 'Real-time Information Search'}</h3>
                <p>{isKo ? '다음과 같은 최신 정보를 검색할 수 있습니다:' : 'You can search for the latest information such as:'}</p>
                <ul>
                  <li>{isKo ? '오늘의 뉴스 및 시사 이슈' : 'Today\'s news and current affairs'}</li>
                  <li>{isKo ? '최신 기술 동향 및 제품 정보' : 'Latest technology trends and product information'}</li>
                  <li>{isKo ? '주가, 환율 등 실시간 금융 데이터' : 'Real-time financial data like stock prices and exchange rates'}</li>
                  <li>{isKo ? '날씨, 스포츠 경기 결과' : 'Weather, sports game results'}</li>
                  <li>{isKo ? '학술 논문 및 연구 자료' : 'Academic papers and research materials'}</li>
                </ul>

                <CodeBlock
                  language="text"
                  code={isKo
                    ? `# 효과적인 웹 검색 요청 예시

"2024년 AI 기술 트렌드에 대해 검색해서 알려줘"

"테슬라의 최근 실적 발표 내용을 요약해줘"

"한국의 최신 AI 규제 정책에 대해 알려줘"

"React 19의 새로운 기능에 대해 검색해서 정리해줘"`
                    : `# Effective Web Search Request Examples

"Search and tell me about 2024 AI technology trends"

"Summarize Tesla's recent earnings report"

"Tell me about South Korea's latest AI regulation policies"

"Search and organize the new features in React 19"`}
                />
              </div>

              <div>
                <h3>{isKo ? '링크 분석 및 최신 뉴스 활용' : 'Link Analysis & News Utilization'}</h3>
                <p>
                  {isKo
                    ? '특정 URL을 공유하면 해당 웹페이지의 내용을 읽고 분석할 수 있습니다. 뉴스 기사, 블로그 포스트, 기술 문서 등을 요약하거나 분석하는 데 유용합니다.'
                    : 'Share a specific URL and ChatGPT can read and analyze the webpage content. Useful for summarizing or analyzing news articles, blog posts, technical documents, etc.'}
                </p>
                <ul>
                  <li>{isKo ? '긴 기사를 핵심 포인트로 요약' : 'Summarize long articles into key points'}</li>
                  <li>{isKo ? '여러 뉴스 소스를 비교 분석' : 'Compare and analyze multiple news sources'}</li>
                  <li>{isKo ? '기술 문서의 핵심 내용 추출' : 'Extract key content from technical documents'}</li>
                  <li>{isKo ? '외국어 기사를 한국어로 번역하며 요약' : 'Translate and summarize foreign language articles'}</li>
                </ul>

                <TipBox type="tip" title={isKo ? '검색 활용 팁' : 'Search Usage Tips'}>
                  <ul>
                    <li>{isKo ? '구체적인 키워드와 시간 범위를 포함하면 더 정확한 결과를 얻을 수 있습니다' : 'Include specific keywords and time ranges for more accurate results'}</li>
                    <li>{isKo ? '"최신", "2024년", "이번 주" 등의 시간 표현을 활용하세요' : 'Use time expressions like "latest", "2024", "this week"'}</li>
                    <li>{isKo ? '여러 출처를 비교하고 싶다면 명시적으로 요청하세요' : 'Explicitly request if you want to compare multiple sources'}</li>
                    <li>{isKo ? '검색 결과의 출처 링크를 항상 확인하세요' : 'Always check the source links in search results'}</li>
                  </ul>
                </TipBox>

                <TipBox type="warning" title={isKo ? '웹 브라우징 주의사항' : 'Web Browsing Cautions'}>
                  {isKo
                    ? '로그인이 필요한 페이지, 페이월(paywall)이 있는 콘텐츠, JavaScript로만 렌더링되는 동적 페이지는 접근이 제한될 수 있습니다. 또한 검색 결과의 정확성은 소스 웹사이트에 의존하므로, 중요한 정보는 원본 출처에서 직접 확인하는 것이 좋습니다.'
                    : 'Access may be limited for login-required pages, paywalled content, and dynamic pages rendered only with JavaScript. Also, search result accuracy depends on source websites, so it\'s best to verify important information directly at the original source.'}
                </TipBox>
              </div>
            </section>
          )}

          {/* File Analysis Section */}
          {activeSection === 'files' && (
            <section className="guide-section">
              <h2>
                <i className="fa-solid fa-file-alt" />
                {isKo ? '파일 분석 (File Analysis)' : 'File Analysis'}
              </h2>

              <div>
                <h3>{isKo ? '지원 파일 형식' : 'Supported File Formats'}</h3>
                <p>
                  {isKo
                    ? 'ChatGPT는 다양한 파일 형식을 업로드하여 분석할 수 있습니다. 파일을 첨부하고 원하는 작업을 설명하면 됩니다.'
                    : 'ChatGPT can upload and analyze various file formats. Simply attach the file and describe the desired task.'}
                </p>
                <ul>
                  <li><strong>PDF</strong>: {isKo ? '논문, 보고서, 계약서, 매뉴얼 등' : 'Papers, reports, contracts, manuals, etc.'}</li>
                  <li><strong>Excel/CSV</strong>: {isKo ? '데이터 분석, 통계, 시각화' : 'Data analysis, statistics, visualization'}</li>
                  <li><strong>{isKo ? '이미지' : 'Images'}</strong>: {isKo ? 'PNG, JPG, GIF, WebP 등의 이미지 분석' : 'Analysis of PNG, JPG, GIF, WebP images'}</li>
                  <li><strong>{isKo ? '코드 파일' : 'Code Files'}</strong>: {isKo ? 'Python, JavaScript, Java 등 소스코드' : 'Source code in Python, JavaScript, Java, etc.'}</li>
                  <li><strong>Word/PowerPoint</strong>: {isKo ? '문서 분석 및 내용 추출' : 'Document analysis and content extraction'}</li>
                  <li><strong>{isKo ? '텍스트' : 'Text'}</strong>: {isKo ? 'TXT, JSON, XML, Markdown 등' : 'TXT, JSON, XML, Markdown, etc.'}</li>
                </ul>
              </div>

              <div>
                <h3>{isKo ? '문서 요약 및 분석' : 'Document Summarization & Analysis'}</h3>
                <p>
                  {isKo
                    ? '긴 문서를 업로드하여 다양한 방식으로 분석할 수 있습니다:'
                    : 'Upload long documents to analyze them in various ways:'}
                </p>
                <CodeBlock
                  language="text"
                  code={isKo
                    ? `# PDF 문서 분석 요청 예시

"이 논문의 핵심 내용을 3줄로 요약해줘"

"이 계약서에서 주의해야 할 조항들을 알려줘"

"이 보고서의 주요 데이터를 표로 정리해줘"

"이 매뉴얼에서 설치 방법 부분만 추출해줘"

"이 문서를 한국어로 번역하면서 요약해줘"`
                    : `# PDF Document Analysis Request Examples

"Summarize the key content of this paper in 3 lines"

"Tell me which clauses to watch out for in this contract"

"Organize the main data from this report into a table"

"Extract only the installation method part from this manual"

"Translate and summarize this document into Korean"`}
                />
              </div>

              <div>
                <h3>{isKo ? '데이터 추출 및 파일 변환' : 'Data Extraction & File Conversion'}</h3>
                <p>
                  {isKo
                    ? '파일에서 특정 데이터를 추출하거나, 한 형식에서 다른 형식으로 변환할 수 있습니다:'
                    : 'Extract specific data from files or convert from one format to another:'}
                </p>
                <ul>
                  <li>{isKo ? 'PDF 테이블을 Excel/CSV로 변환' : 'Convert PDF tables to Excel/CSV'}</li>
                  <li>{isKo ? '여러 파일의 데이터를 하나로 통합' : 'Merge data from multiple files into one'}</li>
                  <li>{isKo ? '이미지에서 텍스트 추출 (OCR)' : 'Extract text from images (OCR)'}</li>
                  <li>{isKo ? 'JSON 데이터를 읽기 쉬운 표로 변환' : 'Convert JSON data into readable tables'}</li>
                  <li>{isKo ? '코드 파일 분석 및 리팩토링 제안' : 'Code file analysis and refactoring suggestions'}</li>
                </ul>

                <TipBox type="tip" title={isKo ? '파일 분석 팁' : 'File Analysis Tips'}>
                  <ul>
                    <li>{isKo ? '큰 파일은 관심 있는 부분을 명시하면 더 정확한 분석이 가능합니다' : 'For large files, specifying the section of interest enables more accurate analysis'}</li>
                    <li>{isKo ? '여러 파일을 동시에 업로드하여 비교 분석을 요청할 수 있습니다' : 'Upload multiple files simultaneously for comparative analysis'}</li>
                    <li>{isKo ? '분석 결과를 특정 형식(표, 목록, 요약 등)으로 요청하면 더 유용합니다' : 'Requesting results in specific formats (table, list, summary) is more useful'}</li>
                  </ul>
                </TipBox>

                <TipBox type="important" title={isKo ? '파일 크기 및 보안' : 'File Size & Security'}>
                  {isKo
                    ? '업로드 파일은 대화 세션 동안만 유지되며, 세션 종료 후 삭제됩니다. 민감한 정보가 포함된 파일을 업로드할 때는 주의하세요. 개인정보나 기밀 데이터는 가능한 제거하고 업로드하는 것을 권장합니다.'
                    : 'Uploaded files are retained only during the conversation session and deleted after the session ends. Be cautious when uploading files containing sensitive information. It\'s recommended to remove personal or confidential data before uploading.'}
                </TipBox>
              </div>
            </section>
          )}

          {/* Canvas Section */}
          {activeSection === 'canvas' && (
            <section className="guide-section">
              <h2>
                <i className="fa-solid fa-pen-ruler" />
                Canvas
              </h2>

              <div>
                <h3>{isKo ? 'Canvas 소개' : 'Introduction to Canvas'}</h3>
                <p>
                  {isKo
                    ? 'Canvas는 ChatGPT의 새로운 인터페이스로, 글쓰기와 코딩 프로젝트를 위한 별도의 작업 공간을 제공합니다. 기존의 채팅 인터페이스와 달리, Canvas에서는 콘텐츠를 직접 편집하고 ChatGPT와 함께 반복적으로 수정할 수 있습니다.'
                    : 'Canvas is a new ChatGPT interface that provides a separate workspace for writing and coding projects. Unlike the traditional chat interface, Canvas allows you to directly edit content and iteratively refine it with ChatGPT.'}
                </p>
                <p>
                  {isKo
                    ? 'Canvas는 전체 대화 내에서 작업물의 특정 부분을 하이라이트하여 수정을 요청할 수 있어, 더 세밀한 협업이 가능합니다.'
                    : 'Canvas enables more detailed collaboration by allowing you to highlight specific parts of your work within the conversation to request modifications.'}
                </p>
              </div>

              <div>
                <h3>{isKo ? '글쓰기 모드' : 'Writing Mode'}</h3>
                <p>{isKo ? 'Canvas 글쓰기 모드에서 활용할 수 있는 기능:' : 'Features available in Canvas writing mode:'}</p>
                <ul>
                  <li>
                    <strong>{isKo ? '길이 조절' : 'Length Adjustment'}</strong>:{' '}
                    {isKo ? '글을 더 짧게 또는 길게 수정' : 'Make the text shorter or longer'}
                  </li>
                  <li>
                    <strong>{isKo ? '난이도 조절' : 'Reading Level'}</strong>:{' '}
                    {isKo ? '초등학생부터 전문가 수준까지 난이도 변경' : 'Change difficulty from elementary to expert level'}
                  </li>
                  <li>
                    <strong>{isKo ? '톤 변경' : 'Tone Change'}</strong>:{' '}
                    {isKo ? '격식체, 비격식체, 학술적, 친근한 등으로 톤 변경' : 'Change tone to formal, informal, academic, friendly, etc.'}
                  </li>
                  <li>
                    <strong>{isKo ? '이모지 추가' : 'Add Emojis'}</strong>:{' '}
                    {isKo ? '텍스트에 관련 이모지를 자동 추가' : 'Automatically add relevant emojis to text'}
                  </li>
                  <li>
                    <strong>{isKo ? '최종 다듬기' : 'Final Polish'}</strong>:{' '}
                    {isKo ? '문법, 문체, 일관성을 전체적으로 다듬기' : 'Overall polish of grammar, style, and consistency'}
                  </li>
                </ul>
              </div>

              <div>
                <h3>{isKo ? '코딩 모드' : 'Coding Mode'}</h3>
                <p>{isKo ? 'Canvas 코딩 모드의 주요 기능:' : 'Key features of Canvas coding mode:'}</p>
                <ul>
                  <li>
                    <strong>{isKo ? '코드 리뷰' : 'Code Review'}</strong>:{' '}
                    {isKo ? 'AI가 코드를 검토하고 개선점을 인라인 댓글로 제안' : 'AI reviews code and suggests improvements as inline comments'}
                  </li>
                  <li>
                    <strong>{isKo ? '버그 수정' : 'Bug Fix'}</strong>:{' '}
                    {isKo ? '코드의 버그를 자동으로 발견하고 수정' : 'Automatically find and fix bugs in code'}
                  </li>
                  <li>
                    <strong>{isKo ? '언어 변환' : 'Language Conversion'}</strong>:{' '}
                    {isKo ? 'Python을 JavaScript로 등 프로그래밍 언어 간 변환' : 'Convert between programming languages like Python to JavaScript'}
                  </li>
                  <li>
                    <strong>{isKo ? '로그 추가' : 'Add Logs'}</strong>:{' '}
                    {isKo ? '디버깅을 위한 로깅 코드 자동 삽입' : 'Automatically insert logging code for debugging'}
                  </li>
                  <li>
                    <strong>{isKo ? '주석 추가' : 'Add Comments'}</strong>:{' '}
                    {isKo ? '코드에 설명 주석을 자동으로 추가' : 'Automatically add explanatory comments to code'}
                  </li>
                </ul>

                <TipBox type="tip" title={isKo ? 'Canvas 활용 팁' : 'Canvas Usage Tips'}>
                  {isKo
                    ? 'Canvas에서 텍스트의 특정 부분을 드래그하여 선택하면, 해당 부분에 대해서만 수정을 요청할 수 있습니다. 전체를 다시 작성할 필요 없이 세밀한 수정이 가능합니다.'
                    : 'In Canvas, you can drag to select specific parts of text and request modifications for just that section. This enables fine-grained edits without rewriting the entire content.'}
                </TipBox>
              </div>

              <div>
                <h3>{isKo ? '협업 편집 및 버전 관리' : 'Collaborative Editing & Version Control'}</h3>
                <p>
                  {isKo
                    ? 'Canvas는 실시간 협업 편집 환경을 제공합니다. 주요 특징:'
                    : 'Canvas provides a real-time collaborative editing environment. Key features:'}
                </p>
                <ul>
                  <li>{isKo ? '사용자와 AI가 동시에 같은 문서를 편집할 수 있습니다' : 'User and AI can edit the same document simultaneously'}</li>
                  <li>{isKo ? '변경 사항을 실행 취소(Undo)하여 이전 상태로 되돌릴 수 있습니다' : 'Changes can be undone to revert to previous states'}</li>
                  <li>{isKo ? '버전 히스토리를 통해 이전 버전으로 복원할 수 있습니다' : 'Restore previous versions through version history'}</li>
                  <li>{isKo ? '최종 결과물을 복사하여 다른 도구에 붙여넣기 할 수 있습니다' : 'Copy the final result to paste into other tools'}</li>
                </ul>

                <TipBox type="important" title={isKo ? 'Canvas 사용 조건' : 'Canvas Requirements'}>
                  {isKo
                    ? 'Canvas는 GPT-4o 모델에서 사용 가능합니다. "canvas를 열어줘" 또는 "canvas 모드로 전환해줘"라고 요청하여 활성화할 수 있습니다. 글쓰기나 코딩 관련 요청을 하면 자동으로 Canvas가 활성화되기도 합니다.'
                    : 'Canvas is available with the GPT-4o model. You can activate it by requesting "open canvas" or "switch to canvas mode". Canvas may also activate automatically when you make writing or coding-related requests.'}
                </TipBox>
              </div>
            </section>
          )}

          {/* Voice Chat Section */}
          {activeSection === 'voice' && (
            <section className="guide-section">
              <h2>
                <i className="fa-solid fa-microphone" />
                {isKo ? '음성 대화 (Voice Chat)' : 'Voice Chat'}
              </h2>

              <div>
                <h3>{isKo ? '음성 대화 모드 소개' : 'Voice Chat Mode Introduction'}</h3>
                <p>
                  {isKo
                    ? 'ChatGPT의 음성 대화 기능을 통해 마치 실제 사람과 대화하는 것처럼 AI와 자연스럽게 대화할 수 있습니다. 모바일 앱에서 헤드폰 아이콘을 탭하여 시작할 수 있으며, 데스크톱 앱에서도 사용 가능합니다.'
                    : 'ChatGPT\'s voice chat feature allows you to converse naturally with AI as if talking to a real person. Start by tapping the headphone icon in the mobile app, and it\'s also available on the desktop app.'}
                </p>
                <p>
                  {isKo
                    ? '일반 음성 모드에서는 음성을 텍스트로 변환한 뒤 응답을 생성하고 다시 음성으로 출력하는 방식으로 작동합니다.'
                    : 'Standard voice mode works by converting speech to text, generating a response, and then outputting it as speech.'}
                </p>
              </div>

              <div>
                <h3>{isKo ? 'Advanced Voice Mode (고급 음성 모드)' : 'Advanced Voice Mode'}</h3>
                <p>
                  {isKo
                    ? 'Advanced Voice Mode는 GPT-4o의 네이티브 멀티모달 기능을 활용하여 더 자연스럽고 감정이 풍부한 대화를 제공합니다:'
                    : 'Advanced Voice Mode leverages GPT-4o\'s native multimodal capabilities to provide more natural and emotionally rich conversations:'}
                </p>
                <ul>
                  <li>
                    <strong>{isKo ? '자연스러운 대화 흐름' : 'Natural Conversation Flow'}</strong>:{' '}
                    {isKo ? '대화 중간에 끼어들기, 실시간 반응, 자연스러운 쉼' : 'Interruptions mid-conversation, real-time reactions, natural pauses'}
                  </li>
                  <li>
                    <strong>{isKo ? '감정 표현' : 'Emotional Expression'}</strong>:{' '}
                    {isKo ? '흥분, 공감, 유머 등 다양한 감정을 목소리로 표현' : 'Express emotions like excitement, empathy, humor through voice'}
                  </li>
                  <li>
                    <strong>{isKo ? '비전 기능 통합' : 'Vision Integration'}</strong>:{' '}
                    {isKo ? '카메라를 통해 실시간으로 사물을 보고 대화 가능' : 'View objects in real-time through camera and converse about them'}
                  </li>
                  <li>
                    <strong>{isKo ? '낮은 지연시간' : 'Low Latency'}</strong>:{' '}
                    {isKo ? '평균 320ms의 빠른 응답 속도' : 'Fast response time averaging 320ms'}
                  </li>
                </ul>
              </div>

              <div>
                <h3>{isKo ? '음성 설정 및 선택' : 'Voice Settings & Selection'}</h3>
                <p>
                  {isKo
                    ? '다양한 음성 중에서 선택할 수 있으며, 각 음성은 고유한 톤과 특성을 가지고 있습니다:'
                    : 'Choose from various voices, each with unique tone and characteristics:'}
                </p>
                <ul>
                  <li>{isKo ? '여러 가지 음성 프리셋 중 선택 가능 (Breeze, Cove, Ember, Juniper, Sol 등)' : 'Choose from multiple voice presets (Breeze, Cove, Ember, Juniper, Sol, etc.)'}</li>
                  <li>{isKo ? '설정 > 음성에서 기본 음성 변경 가능' : 'Change default voice in Settings > Voice'}</li>
                  <li>{isKo ? '대화 중에도 음성 변경 가능' : 'Voice can be changed during conversation'}</li>
                </ul>

                <TipBox type="tip" title={isKo ? '음성 대화 활용 팁' : 'Voice Chat Usage Tips'}>
                  <ul>
                    <li>{isKo ? '조용한 환경에서 사용하면 인식률이 높아집니다' : 'Recognition rate improves in quiet environments'}</li>
                    <li>{isKo ? '명확하게 천천히 말하면 더 정확한 응답을 받을 수 있습니다' : 'Speaking clearly and slowly yields more accurate responses'}</li>
                    <li>{isKo ? '언어 학습에 특히 유용합니다 - 발음 교정, 회화 연습 등' : 'Especially useful for language learning - pronunciation correction, conversation practice, etc.'}</li>
                  </ul>
                </TipBox>
              </div>

              <div>
                <h3>{isKo ? '실시간 번역 및 활용 사례' : 'Real-time Translation & Use Cases'}</h3>
                <p>{isKo ? '음성 대화의 다양한 활용 사례:' : 'Various voice chat use cases:'}</p>
                <ul>
                  <li>
                    <strong>{isKo ? '실시간 통역' : 'Real-time Interpretation'}</strong>:{' '}
                    {isKo ? '두 사람 사이에서 실시간으로 통역 역할 수행' : 'Serve as a real-time interpreter between two people'}
                  </li>
                  <li>
                    <strong>{isKo ? '언어 학습' : 'Language Learning'}</strong>:{' '}
                    {isKo ? '원어민처럼 대화하며 발음과 문법을 교정' : 'Converse like a native speaker while correcting pronunciation and grammar'}
                  </li>
                  <li>
                    <strong>{isKo ? '브레인스토밍' : 'Brainstorming'}</strong>:{' '}
                    {isKo ? '아이디어를 말로 주고받으며 창의적 사고 촉진' : 'Exchange ideas verbally to promote creative thinking'}
                  </li>
                  <li>
                    <strong>{isKo ? '접근성' : 'Accessibility'}</strong>:{' '}
                    {isKo ? '시각 장애가 있는 사용자를 위한 음성 기반 인터페이스' : 'Voice-based interface for users with visual impairments'}
                  </li>
                  <li>
                    <strong>{isKo ? '운전 중 사용' : 'While Driving'}</strong>:{' '}
                    {isKo ? '핸즈프리로 질문하고 답변을 음성으로 들을 수 있음' : 'Ask questions hands-free and hear answers via voice'}
                  </li>
                  <li>
                    <strong>{isKo ? '면접 연습' : 'Interview Practice'}</strong>:{' '}
                    {isKo ? '모의 면접관 역할로 면접 준비' : 'Prepare for interviews with a mock interviewer'}
                  </li>
                </ul>

                <TipBox type="warning" title={isKo ? '음성 대화 제한사항' : 'Voice Chat Limitations'}>
                  <ul>
                    <li>{isKo ? 'Advanced Voice Mode는 사용 시간에 월간 한도가 있습니다' : 'Advanced Voice Mode has a monthly usage time limit'}</li>
                    <li>{isKo ? '음악 생성이나 노래 부르기는 지원하지 않습니다' : 'Music generation and singing are not supported'}</li>
                    <li>{isKo ? '실제 인물의 목소리를 모방하지 않습니다' : 'Does not imitate real people\'s voices'}</li>
                    <li>{isKo ? '배경 소음이 많은 환경에서는 인식률이 떨어질 수 있습니다' : 'Recognition rate may decrease in noisy environments'}</li>
                  </ul>
                </TipBox>
              </div>
            </section>
          )}

          {/* Memory Section */}
          {activeSection === 'memory' && (
            <section className="guide-section">
              <h2>
                <i className="fa-solid fa-brain" />
                {isKo ? 'Memory 기능' : 'Memory Feature'}
              </h2>

              <div>
                <h3>{isKo ? 'Memory 기능 소개' : 'Introduction to Memory Feature'}</h3>
                <p>
                  {isKo
                    ? 'Memory 기능은 ChatGPT가 대화 간에 정보를 기억할 수 있게 해주는 기능입니다. 새로운 대화를 시작해도 이전에 공유한 선호사항, 개인 정보, 작업 스타일 등을 기억하여 더 개인화된 응답을 제공합니다.'
                    : 'The Memory feature allows ChatGPT to remember information across conversations. Even when starting a new conversation, it remembers previously shared preferences, personal info, and work styles to provide more personalized responses.'}
                </p>
                <p>
                  {isKo
                    ? 'ChatGPT는 대화 중 중요하다고 판단되는 정보를 자동으로 기억하거나, 사용자가 직접 "이것을 기억해줘"라고 명시적으로 요청할 수 있습니다.'
                    : 'ChatGPT automatically remembers information it deems important during conversation, or users can explicitly request "remember this".'}
                </p>
              </div>

              <div>
                <h3>{isKo ? '기억 관리하기' : 'Managing Memories'}</h3>
                <p>
                  {isKo
                    ? '저장된 기억을 확인하고 관리하는 방법:'
                    : 'How to check and manage saved memories:'}
                </p>
                <ul>
                  <li>
                    <strong>{isKo ? '기억 확인' : 'View Memories'}</strong>:{' '}
                    {isKo ? '설정 > 개인화 > Memory에서 저장된 모든 기억 확인 가능' : 'View all saved memories in Settings > Personalization > Memory'}
                  </li>
                  <li>
                    <strong>{isKo ? '개별 삭제' : 'Individual Deletion'}</strong>:{' '}
                    {isKo ? '특정 기억만 선택하여 삭제할 수 있음' : 'Select and delete specific memories'}
                  </li>
                  <li>
                    <strong>{isKo ? '전체 삭제' : 'Delete All'}</strong>:{' '}
                    {isKo ? '모든 기억을 한 번에 삭제할 수 있음' : 'Delete all memories at once'}
                  </li>
                  <li>
                    <strong>{isKo ? '대화 중 삭제' : 'Delete During Chat'}</strong>:{' '}
                    {isKo ? '"이것은 잊어줘"라고 요청하여 특정 기억 삭제 가능' : 'Request "forget this" to delete specific memories'}
                  </li>
                </ul>

                <CodeBlock
                  language="text"
                  code={isKo
                    ? `# Memory 활용 예시

사용자: "나는 시니어 프론트엔드 개발자이고
       React와 TypeScript를 주로 사용해. 기억해줘."

ChatGPT: "알겠습니다! 기억하겠습니다."
→ 이후 코딩 질문에 React/TypeScript 기반으로 답변

사용자: "나는 채식주의자야. 기억해줘."

ChatGPT: "기억하겠습니다."
→ 이후 식단/레시피 추천 시 채식 옵션만 제안

사용자: "이전에 기억한 프로그래밍 언어 선호도는 잊어줘."

ChatGPT: "해당 기억을 삭제했습니다."`
                    : `# Memory Usage Examples

User: "I'm a senior frontend developer who mainly
      uses React and TypeScript. Remember this."

ChatGPT: "Got it! I'll remember that."
→ Future coding questions answered based on React/TypeScript

User: "I'm a vegetarian. Remember this."

ChatGPT: "I'll remember that."
→ Future diet/recipe suggestions only include vegetarian options

User: "Forget the programming language preference
      you remembered earlier."

ChatGPT: "I've deleted that memory."`}
                />
              </div>

              <div>
                <h3>{isKo ? '프라이버시 설정' : 'Privacy Settings'}</h3>
                <p>
                  {isKo
                    ? 'Memory 기능의 프라이버시를 관리하는 방법:'
                    : 'How to manage Memory feature privacy:'}
                </p>
                <ul>
                  <li>
                    <strong>{isKo ? 'Memory 끄기' : 'Turn Off Memory'}</strong>:{' '}
                    {isKo ? '설정 > 개인화 > Memory에서 기능 자체를 비활성화할 수 있습니다' : 'Disable the feature entirely in Settings > Personalization > Memory'}
                  </li>
                  <li>
                    <strong>{isKo ? '임시 채팅' : 'Temporary Chat'}</strong>:{' '}
                    {isKo ? '임시 채팅 모드를 사용하면 해당 대화의 내용이 기억에 저장되지 않습니다' : 'Using temporary chat mode prevents conversation content from being saved to memory'}
                  </li>
                  <li>
                    <strong>{isKo ? '선택적 기억' : 'Selective Memory'}</strong>:{' '}
                    {isKo ? '민감한 대화에서는 "이 대화의 내용은 기억하지 마"라고 요청할 수 있습니다' : 'In sensitive conversations, you can request "don\'t remember anything from this conversation"'}
                  </li>
                </ul>

                <TipBox type="important" title={isKo ? '프라이버시 참고사항' : 'Privacy Notes'}>
                  {isKo
                    ? 'Memory에 저장된 정보는 OpenAI의 데이터 사용 정책에 따라 처리됩니다. 민감한 개인 정보(주민등록번호, 비밀번호 등)는 Memory에 저장하지 않는 것이 좋습니다. ChatGPT는 이러한 민감 정보의 저장을 자동으로 거부하기도 합니다.'
                    : 'Information stored in Memory is processed according to OpenAI\'s data usage policy. It\'s best not to store sensitive personal information (social security numbers, passwords, etc.) in Memory. ChatGPT may automatically refuse to store such sensitive information.'}
                </TipBox>
              </div>

              <div>
                <h3>{isKo ? '효과적인 Memory 활용법' : 'Effective Memory Usage'}</h3>
                <p>
                  {isKo
                    ? 'Memory 기능을 최대한 활용하기 위한 전략:'
                    : 'Strategies to maximize Memory feature usage:'}
                </p>
                <ul>
                  <li>
                    <strong>{isKo ? '업무 컨텍스트 저장' : 'Save Work Context'}</strong>:{' '}
                    {isKo ? '직업, 사용 기술 스택, 프로젝트 정보 등을 기억시켜 더 관련성 높은 답변 받기' : 'Store job, tech stack, project info for more relevant answers'}
                  </li>
                  <li>
                    <strong>{isKo ? '커뮤니케이션 선호도' : 'Communication Preferences'}</strong>:{' '}
                    {isKo ? '답변 스타일, 언어 수준, 상세도 등의 선호사항 저장' : 'Store preferences for answer style, language level, detail level'}
                  </li>
                  <li>
                    <strong>{isKo ? '반복 작업 최적화' : 'Optimize Repetitive Tasks'}</strong>:{' '}
                    {isKo ? '자주 하는 작업의 형식이나 스타일을 기억시켜 매번 설명하는 수고 줄이기' : 'Store formats and styles for frequent tasks to reduce repeated explanations'}
                  </li>
                  <li>
                    <strong>{isKo ? '학습 진도 관리' : 'Learning Progress Management'}</strong>:{' '}
                    {isKo ? '학습 중인 주제, 현재 수준, 목표 등을 기억시켜 연속적인 학습 경험 만들기' : 'Store topics being studied, current level, goals for continuous learning experience'}
                  </li>
                </ul>

                <TipBox type="tip" title={isKo ? 'Memory 관리 팁' : 'Memory Management Tips'}>
                  {isKo
                    ? '주기적으로 설정에서 저장된 기억을 확인하고 정리하세요. 더 이상 관련 없는 정보는 삭제하고, 중요한 정보가 제대로 저장되어 있는지 확인하면 더 나은 사용 경험을 얻을 수 있습니다.'
                    : 'Periodically review and organize saved memories in settings. Delete information that\'s no longer relevant and verify important information is properly stored for a better user experience.'}
                </TipBox>
              </div>
            </section>
          )}

          {/* Section Navigation */}
          <div className="guide-section-nav">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
            >
              <i className="fa-solid fa-arrow-left" /> {isKo ? '이전' : 'Prev'}
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex === SECTIONS.length - 1}
            >
              {isKo ? '다음' : 'Next'} <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
