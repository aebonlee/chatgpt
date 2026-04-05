import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'intro', icon: 'fa-circle-info', ko: 'ChatGPT 소개', en: 'Introduction' },
  { id: 'account', icon: 'fa-user-plus', ko: '계정 생성 & 요금제', en: 'Account & Plans' },
  { id: 'interface', icon: 'fa-desktop', ko: '인터페이스 이해', en: 'Interface Guide' },
  { id: 'conversation', icon: 'fa-comments', ko: '효과적인 대화법', en: 'Effective Conversations' },
  { id: 'settings', icon: 'fa-gear', ko: '설정 & 커스텀', en: 'Settings & Custom' },
  { id: 'tips', icon: 'fa-lightbulb', ko: '팁 & 단축키', en: 'Tips & Shortcuts' },
  { id: 'usecases', icon: 'fa-briefcase', ko: '활용 사례', en: 'Use Cases' },
];

export default function ChatGPTBasics() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('intro');
  const isKo = language === 'ko';

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title={isKo ? 'ChatGPT 기초 가이드 | ChatGPT 마스터' : 'ChatGPT Basics Guide | ChatGPT Master'}
        description={isKo ? 'ChatGPT를 처음 시작하는 분들을 위한 완벽한 기초 가이드' : 'Complete beginner guide to getting started with ChatGPT'}
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* Sidebar */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {isKo ? '목차' : 'Contents'}
            </div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main className="guide-content">
            {activeSection === 'intro' && <IntroSection isKo={isKo} />}
            {activeSection === 'account' && <AccountSection isKo={isKo} />}
            {activeSection === 'interface' && <InterfaceSection isKo={isKo} />}
            {activeSection === 'conversation' && <ConversationSection isKo={isKo} />}
            {activeSection === 'settings' && <SettingsSection isKo={isKo} />}
            {activeSection === 'tips' && <TipsSection isKo={isKo} />}
            {activeSection === 'usecases' && <UseCasesSection isKo={isKo} />}

            {/* Section Navigation */}
            <div className="guide-section-nav">
              <button
                className="guide-nav-btn prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en
                    : isKo ? '이전' : 'Previous'}
                </span>
              </button>
              <button
                className="guide-nav-btn next"
                onClick={handleNext}
                disabled={currentIndex === SECTIONS.length - 1}
              >
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en
                    : isKo ? '다음' : 'Next'}
                </span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

/* ===============================================
   Section: Introduction
   =============================================== */
function IntroSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? 'ChatGPT 소개' : 'Introduction to ChatGPT'}</h2>

      <h3>{isKo ? 'ChatGPT란 무엇인가?' : 'What is ChatGPT?'}</h3>
      <p>
        {isKo
          ? 'ChatGPT는 OpenAI에서 개발한 대규모 언어 모델(LLM) 기반의 AI 챗봇입니다. "Chat"은 대화를 의미하고, "GPT"는 Generative Pre-trained Transformer의 약자로, 사전 훈련된 생성형 트랜스포머 모델을 뜻합니다. 사용자가 자연어로 질문하거나 요청을 하면, ChatGPT가 인간과 유사한 방식으로 텍스트를 생성하여 응답합니다.'
          : 'ChatGPT is an AI chatbot developed by OpenAI, built on a Large Language Model (LLM). "Chat" refers to conversation, and "GPT" stands for Generative Pre-trained Transformer. When users ask questions or make requests in natural language, ChatGPT generates human-like text responses.'}
      </p>

      <h3>{isKo ? 'GPT 모델의 발전 역사' : 'History of GPT Models'}</h3>
      <p>
        {isKo
          ? 'GPT 모델은 자연어 처리(NLP) 분야에서 혁신적인 발전을 이루어 왔습니다. 각 버전별 주요 특징을 살펴보겠습니다.'
          : 'GPT models have achieved revolutionary advances in Natural Language Processing (NLP). Let\'s look at the key features of each version.'}
      </p>
      <ul>
        <li>
          <strong>GPT-1 (2018)</strong> -{' '}
          {isKo
            ? '1억 1,700만 개의 파라미터로 시작한 최초의 GPT 모델입니다. 비지도 학습(Unsupervised Learning)을 통해 텍스트 생성의 가능성을 보여주었으며, 트랜스포머 아키텍처를 활용한 언어 모델의 기초를 확립했습니다.'
            : 'The first GPT model with 117 million parameters. It demonstrated the potential of text generation through unsupervised learning and established the foundation of language models using Transformer architecture.'}
        </li>
        <li>
          <strong>GPT-2 (2019)</strong> -{' '}
          {isKo
            ? '15억 개의 파라미터로 크게 확장되었습니다. 놀라운 텍스트 생성 능력을 보여주었으나, 악용 우려로 인해 처음에는 전체 모델 공개가 보류되었습니다. 긴 문맥의 글쓰기, 번역, 요약 등 다양한 작업을 수행할 수 있었습니다.'
            : 'Significantly expanded to 1.5 billion parameters. It showed remarkable text generation capabilities, but initial full model release was delayed due to misuse concerns. It could perform various tasks such as long-form writing, translation, and summarization.'}
        </li>
        <li>
          <strong>GPT-3 (2020)</strong> -{' '}
          {isKo
            ? '1,750억 개의 파라미터로 비약적인 도약을 이루었습니다. Few-shot 학습 능력이 탁월했으며, 코드 작성, 시 작성, 대화 등 거의 모든 텍스트 기반 작업에서 인상적인 성능을 보여주었습니다. API를 통해 개발자들에게 공개되어 수많은 AI 애플리케이션의 기반이 되었습니다.'
            : 'Made a dramatic leap with 175 billion parameters. It excelled at few-shot learning and showed impressive performance in nearly all text-based tasks. Released to developers via API, it became the foundation for numerous AI applications.'}
        </li>
        <li>
          <strong>GPT-3.5 & ChatGPT (2022.11)</strong> -{' '}
          {isKo
            ? 'RLHF(인간 피드백을 통한 강화학습)를 적용하여 대화에 최적화된 모델입니다. ChatGPT라는 이름으로 일반 대중에게 공개되어 역사상 가장 빠르게 성장한 소비자 앱이 되었습니다 (출시 2개월 만에 1억 명 사용자 돌파). 자연스러운 대화, 지시 따르기, 안전한 응답 생성에 초점을 맞추었습니다.'
            : 'Optimized for conversation with RLHF (Reinforcement Learning from Human Feedback). Released to the public as ChatGPT, it became the fastest-growing consumer app in history (100 million users within 2 months). Focused on natural conversation, instruction following, and safe response generation.'}
        </li>
        <li>
          <strong>GPT-4 (2023.03)</strong> -{' '}
          {isKo
            ? '멀티모달 기능이 추가되어 텍스트뿐만 아니라 이미지도 입력으로 받을 수 있게 되었습니다. 추론 능력, 정확성, 안전성 면에서 대폭 향상되었으며, 변호사 시험, 의사 면허 시험 등 다양한 전문 시험에서 상위 수준의 점수를 기록했습니다. 더 긴 컨텍스트 윈도우(최대 32K 토큰)를 지원합니다.'
            : 'Added multimodal capabilities, accepting both text and images as input. Significantly improved in reasoning, accuracy, and safety, scoring at top levels in various professional exams including the bar exam and medical licensing exam. Supports longer context windows (up to 32K tokens).'}
        </li>
        <li>
          <strong>GPT-4o (2024.05)</strong> -{' '}
          {isKo
            ? '"o"는 "omni"(모든 것)를 의미합니다. 텍스트, 이미지, 오디오를 통합적으로 처리할 수 있는 진정한 멀티모달 모델입니다. GPT-4 대비 2배 빠른 속도와 50% 저렴한 비용을 자랑하며, 실시간 음성 대화, 비전 기능 등이 대폭 향상되었습니다. 무료 사용자에게도 일부 기능이 제공됩니다.'
            : '"o" stands for "omni." A truly multimodal model that processes text, images, and audio seamlessly. 2x faster and 50% cheaper than GPT-4, with significantly improved real-time voice conversation and vision capabilities. Some features are available to free users.'}
        </li>
      </ul>

      <TipBox type="important">
        {isKo
          ? 'ChatGPT는 실시간 인터넷 검색 기능이 기본적으로 활성화되어 있지 않습니다. 학습 데이터에 기반하여 응답하므로, 최신 정보가 필요한 경우 "웹 검색" 기능을 활용하거나 날짜를 확인하세요.'
          : 'ChatGPT does not have real-time internet search enabled by default. It responds based on training data, so for up-to-date information, use the "Browse" feature or verify dates.'}
      </TipBox>

      <h3>{isKo ? 'ChatGPT의 핵심 기능' : 'Key Features of ChatGPT'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '자연어 대화' : 'Natural Language Conversation'}</strong> -{' '}
          {isKo
            ? '인간처럼 자연스러운 대화가 가능하며, 문맥을 유지하면서 여러 차례에 걸친 대화를 이어갈 수 있습니다.'
            : 'Capable of natural human-like conversation while maintaining context across multiple turns.'}
        </li>
        <li>
          <strong>{isKo ? '다국어 지원' : 'Multilingual Support'}</strong> -{' '}
          {isKo
            ? '한국어를 포함한 수십 개 언어를 이해하고 생성할 수 있습니다. 번역, 다국어 콘텐츠 작성에도 활용 가능합니다.'
            : 'Understands and generates text in dozens of languages including Korean. Can be used for translation and multilingual content creation.'}
        </li>
        <li>
          <strong>{isKo ? '코드 작성 & 분석' : 'Code Writing & Analysis'}</strong> -{' '}
          {isKo
            ? 'Python, JavaScript, Java 등 다양한 프로그래밍 언어로 코드를 작성하고, 기존 코드를 분석하거나 디버깅할 수 있습니다.'
            : 'Writes code in various programming languages like Python, JavaScript, Java, and can analyze or debug existing code.'}
        </li>
        <li>
          <strong>{isKo ? '이미지 인식 (Vision)' : 'Image Recognition (Vision)'}</strong> -{' '}
          {isKo
            ? 'GPT-4o 모델에서는 이미지를 업로드하면 이미지의 내용을 분석하고 설명해 줍니다. 차트, 스크린샷, 손글씨 등 다양한 이미지를 이해합니다.'
            : 'With GPT-4o, you can upload images for content analysis and description. It understands charts, screenshots, handwriting, and more.'}
        </li>
        <li>
          <strong>{isKo ? '파일 업로드 & 분석' : 'File Upload & Analysis'}</strong> -{' '}
          {isKo
            ? 'PDF, Word, Excel, CSV 등 다양한 파일을 업로드하여 내용을 분석하고, 요약하거나, 데이터를 시각화할 수 있습니다.'
            : 'Upload files like PDF, Word, Excel, CSV for content analysis, summarization, and data visualization.'}
        </li>
        <li>
          <strong>{isKo ? 'DALL-E 이미지 생성' : 'DALL-E Image Generation'}</strong> -{' '}
          {isKo
            ? '텍스트 설명만으로 고품질 이미지를 생성할 수 있습니다. 로고, 일러스트, 컨셉 아트 등 다양한 시각적 콘텐츠를 만들 수 있습니다.'
            : 'Generate high-quality images from text descriptions. Create logos, illustrations, concept art, and various visual content.'}
        </li>
      </ul>

      <h3>{isKo ? 'ChatGPT는 어떻게 작동하나요?' : 'How Does ChatGPT Work?'}</h3>
      <p>
        {isKo
          ? 'ChatGPT의 작동 원리를 간단히 이해하면 더 효과적으로 활용할 수 있습니다. ChatGPT는 크게 3단계의 학습 과정을 거쳐 만들어집니다.'
          : 'Understanding how ChatGPT works can help you use it more effectively. ChatGPT is built through a 3-stage training process.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '1단계: 사전 학습 (Pre-training)' : 'Stage 1: Pre-training'}</strong> -{' '}
          {isKo
            ? '인터넷의 방대한 텍스트 데이터(책, 웹사이트, 논문 등)를 학습합니다. 이 단계에서 문법, 사실, 추론 패턴 등 언어의 기본 구조를 익힙니다. 다음 단어를 예측하는 방식으로 학습하며, 이를 통해 문맥을 이해하는 능력을 갖추게 됩니다.'
            : 'Learns from vast text data on the internet (books, websites, papers). In this stage, it learns basic language structures like grammar, facts, and reasoning patterns. It learns by predicting the next word, gaining the ability to understand context.'}
        </li>
        <li>
          <strong>{isKo ? '2단계: 지시 미세조정 (Instruction Fine-tuning)' : 'Stage 2: Instruction Fine-tuning'}</strong> -{' '}
          {isKo
            ? '사람이 작성한 고품질 대화 데이터를 통해 지시를 따르는 방법을 학습합니다. 질문에 적절히 답변하고, 요청사항을 정확히 수행하는 능력을 키웁니다.'
            : 'Learns how to follow instructions through high-quality conversation data written by humans. Develops the ability to answer questions appropriately and execute requests accurately.'}
        </li>
        <li>
          <strong>{isKo ? '3단계: RLHF (인간 피드백 강화학습)' : 'Stage 3: RLHF'}</strong> -{' '}
          {isKo
            ? '인간 평가자가 모델의 응답을 비교하고 순위를 매기는 방식으로 모델을 개선합니다. 이를 통해 더 유용하고, 정확하며, 안전한 응답을 생성하도록 최적화됩니다. 유해하거나 편향된 콘텐츠를 줄이는 데 핵심적인 역할을 합니다.'
            : 'Improves the model by having human evaluators compare and rank responses. This optimizes the model to generate more helpful, accurate, and safe responses. Plays a crucial role in reducing harmful or biased content.'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? 'ChatGPT는 "생각"하는 것이 아니라 확률적으로 다음에 올 가능성이 높은 텍스트를 예측하는 방식으로 작동합니다. 이 점을 이해하면 왜 가끔 "환각(Hallucination)" 현상이 발생하는지 이해할 수 있습니다. 중요한 정보는 항상 교차 검증하세요!'
          : 'ChatGPT doesn\'t "think" but predicts the most likely next text based on probability. Understanding this helps explain why "hallucinations" sometimes occur. Always cross-verify important information!'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Account & Plans
   =============================================== */
function AccountSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '계정 생성 & 요금제' : 'Account & Plans'}</h2>

      <h3>{isKo ? '계정 생성 방법' : 'How to Sign Up'}</h3>
      <p>
        {isKo
          ? 'ChatGPT를 사용하기 위해 먼저 OpenAI 계정을 만들어야 합니다. 다음 단계를 따라주세요.'
          : 'To use ChatGPT, you first need to create an OpenAI account. Follow these steps.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '1. 웹사이트 접속' : '1. Visit the Website'}</strong> -{' '}
          {isKo
            ? 'chat.openai.com 에 접속합니다. 또는 모바일 앱(iOS/Android)을 앱스토어에서 다운로드할 수 있습니다.'
            : 'Go to chat.openai.com. Or download the mobile app (iOS/Android) from the app store.'}
        </li>
        <li>
          <strong>{isKo ? '2. 회원가입 클릭' : '2. Click Sign Up'}</strong> -{' '}
          {isKo
            ? '"Sign up" 버튼을 클릭합니다. 이메일, Google 계정, Microsoft 계정, Apple ID 중 하나를 선택하여 가입할 수 있습니다.'
            : 'Click the "Sign up" button. You can register using email, Google account, Microsoft account, or Apple ID.'}
        </li>
        <li>
          <strong>{isKo ? '3. 이메일 인증' : '3. Email Verification'}</strong> -{' '}
          {isKo
            ? '이메일로 가입한 경우, 발송된 인증 메일의 링크를 클릭하여 이메일을 인증합니다.'
            : 'If signing up with email, click the verification link sent to your email address.'}
        </li>
        <li>
          <strong>{isKo ? '4. 프로필 설정' : '4. Profile Setup'}</strong> -{' '}
          {isKo
            ? '이름과 생년월일을 입력합니다. 13세 이상이어야 사용 가능하며, 18세 미만은 보호자 동의가 필요할 수 있습니다.'
            : 'Enter your name and date of birth. You must be at least 13 years old, and users under 18 may need parental consent.'}
        </li>
        <li>
          <strong>{isKo ? '5. 사용 시작' : '5. Start Using'}</strong> -{' '}
          {isKo
            ? '가입이 완료되면 바로 ChatGPT를 사용할 수 있습니다. 무료 계정으로도 기본적인 대화 기능을 모두 이용할 수 있습니다.'
            : 'Once registration is complete, you can start using ChatGPT immediately. A free account provides access to all basic conversation features.'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? 'Google 또는 Microsoft 계정으로 가입하면 별도의 비밀번호 설정 없이 간편하게 로그인할 수 있어 편리합니다.'
          : 'Signing up with Google or Microsoft account allows convenient login without setting a separate password.'}
      </TipBox>

      <h3>{isKo ? '요금제 비교' : 'Plan Comparison'}</h3>
      <p>
        {isKo
          ? 'OpenAI는 다양한 사용자 요구를 충족하기 위해 여러 요금제를 제공하고 있습니다. 각 요금제의 특징을 자세히 살펴보겠습니다.'
          : 'OpenAI offers several plans to meet diverse user needs. Let\'s examine each plan\'s features in detail.'}
      </p>

      <h4>{isKo ? 'Free (무료)' : 'Free'}</h4>
      <ul>
        <li>{isKo ? '가격: 무료' : 'Price: Free'}</li>
        <li>{isKo ? 'GPT-4o 모델 사용 가능 (사용량 제한 있음)' : 'Access to GPT-4o model (with usage limits)'}</li>
        <li>{isKo ? 'GPT-4o mini 무제한 사용' : 'Unlimited GPT-4o mini usage'}</li>
        <li>{isKo ? '웹 검색(Browse) 기능 제한적 사용' : 'Limited web browsing feature'}</li>
        <li>{isKo ? '파일 업로드 및 이미지 분석 가능' : 'File upload and image analysis available'}</li>
        <li>{isKo ? 'DALL-E 이미지 생성 제한적 사용' : 'Limited DALL-E image generation'}</li>
        <li>{isKo ? 'GPTs(커스텀 챗봇) 사용 가능 (생성은 불가)' : 'GPTs (custom chatbots) usage available (creation not available)'}</li>
        <li>{isKo ? '피크 시간대 접속 제한 가능' : 'Possible access restrictions during peak times'}</li>
      </ul>

      <h4>{isKo ? 'Plus (플러스)' : 'Plus'}</h4>
      <ul>
        <li>{isKo ? '가격: 월 $20 (약 27,000원)' : 'Price: $20/month'}</li>
        <li>{isKo ? 'GPT-4o 사용량 5배 증가' : '5x more GPT-4o usage'}</li>
        <li>{isKo ? 'GPT-4o mini 무제한' : 'Unlimited GPT-4o mini'}</li>
        <li>{isKo ? 'o1, o1-mini 등 추론(Reasoning) 모델 접근' : 'Access to o1, o1-mini reasoning models'}</li>
        <li>{isKo ? 'DALL-E 이미지 생성 확대' : 'Extended DALL-E image generation'}</li>
        <li>{isKo ? '고급 데이터 분석(Advanced Data Analysis) 사용' : 'Advanced Data Analysis usage'}</li>
        <li>{isKo ? 'GPTs 생성 및 게시 가능' : 'GPTs creation and publishing available'}</li>
        <li>{isKo ? '우선적 접속 (피크 시간에도 안정적)' : 'Priority access (stable even during peak times)'}</li>
        <li>{isKo ? '새 기능 우선 체험' : 'Early access to new features'}</li>
      </ul>

      <h4>{isKo ? 'Team (팀)' : 'Team'}</h4>
      <ul>
        <li>{isKo ? '가격: 사용자당 월 $25 (연간 결제) / $30 (월간 결제)' : 'Price: $25/user/month (annual) / $30/user/month (monthly)'}</li>
        <li>{isKo ? 'Plus의 모든 기능 포함' : 'All Plus features included'}</li>
        <li>{isKo ? 'GPT-4o, GPT-4 사용량 추가 증가' : 'Further increased GPT-4o, GPT-4 usage'}</li>
        <li>{isKo ? '팀 전용 작업 공간(Workspace)' : 'Team-dedicated workspace'}</li>
        <li>{isKo ? '관리자 콘솔로 멤버 관리' : 'Member management via admin console'}</li>
        <li>{isKo ? '팀 데이터가 모델 학습에 사용되지 않음' : 'Team data not used for model training'}</li>
        <li>{isKo ? '팀 내 GPTs 공유 가능' : 'GPTs sharing within team available'}</li>
        <li>{isKo ? '최소 2명부터 시작' : 'Minimum 2 users to start'}</li>
      </ul>

      <h4>{isKo ? 'Enterprise (엔터프라이즈)' : 'Enterprise'}</h4>
      <ul>
        <li>{isKo ? '가격: 맞춤 견적 (영업팀 문의)' : 'Price: Custom pricing (contact sales)'}</li>
        <li>{isKo ? 'Team의 모든 기능 포함' : 'All Team features included'}</li>
        <li>{isKo ? 'GPT-4o 무제한 사용' : 'Unlimited GPT-4o usage'}</li>
        <li>{isKo ? '확장된 컨텍스트 윈도우 (128K 토큰)' : 'Extended context window (128K tokens)'}</li>
        <li>{isKo ? 'SSO(Single Sign-On) 지원' : 'SSO (Single Sign-On) support'}</li>
        <li>{isKo ? '도메인 인증' : 'Domain verification'}</li>
        <li>{isKo ? '분석 대시보드' : 'Analytics dashboard'}</li>
        <li>{isKo ? 'API 크레딧 포함' : 'API credits included'}</li>
        <li>{isKo ? '전담 고객 성공 매니저' : 'Dedicated customer success manager'}</li>
        <li>{isKo ? '엔터프라이즈급 보안 및 규정 준수' : 'Enterprise-grade security and compliance'}</li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '개인 사용자라면 먼저 무료 요금제로 시작해 보세요. ChatGPT를 자주 사용하게 되고, GPT-4o 사용량 제한이 부족하다고 느낀다면 Plus로 업그레이드하는 것을 추천합니다. 비즈니스 용도라면 데이터 보호를 위해 Team 또는 Enterprise를 고려하세요.'
          : 'If you\'re an individual user, start with the free plan. If you find yourself using ChatGPT frequently and the GPT-4o usage limit is insufficient, consider upgrading to Plus. For business use, consider Team or Enterprise for data protection.'}
      </TipBox>

      <h3>{isKo ? '결제 방법' : 'Payment Methods'}</h3>
      <p>
        {isKo
          ? 'ChatGPT Plus 구독은 신용카드 또는 체크카드로 결제할 수 있습니다. Visa, MasterCard, American Express 등 주요 카드가 지원됩니다. iOS 앱에서는 Apple을 통한 인앱 결제도 가능하지만, 앱스토어 수수료로 인해 가격이 다를 수 있습니다. 구독은 언제든지 취소할 수 있으며, 취소 후에도 결제 기간이 끝날 때까지 Plus 기능을 사용할 수 있습니다.'
          : 'ChatGPT Plus subscription can be paid with credit or debit cards. Major cards like Visa, MasterCard, and American Express are supported. In-app purchases through Apple are available on iOS, though prices may differ due to App Store fees. Subscriptions can be cancelled anytime, and Plus features remain available until the end of the billing period.'}
      </p>
    </div>
  );
}

/* ===============================================
   Section: Interface Guide
   =============================================== */
function InterfaceSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '인터페이스 이해' : 'Interface Guide'}</h2>

      <h3>{isKo ? '메인 화면 구성' : 'Main Screen Layout'}</h3>
      <p>
        {isKo
          ? 'ChatGPT의 웹 인터페이스는 직관적이고 깔끔하게 설계되어 있습니다. 크게 사이드바(좌측), 채팅 영역(중앙), 입력창(하단)으로 구성됩니다.'
          : 'ChatGPT\'s web interface is designed to be intuitive and clean. It consists of a sidebar (left), chat area (center), and input field (bottom).'}
      </p>

      <h3>{isKo ? '사이드바 (Sidebar)' : 'Sidebar'}</h3>
      <p>
        {isKo
          ? '화면 좌측의 사이드바에는 대화 목록과 주요 기능이 정리되어 있습니다.'
          : 'The sidebar on the left contains conversation lists and key features.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '새 채팅 (New Chat)' : 'New Chat'}</strong> -{' '}
          {isKo
            ? '상단의 "+" 버튼 또는 "New chat"을 클릭하면 새로운 대화를 시작합니다. 각 대화는 독립적인 컨텍스트를 가집니다.'
            : 'Click the "+" button or "New chat" at the top to start a new conversation. Each conversation has independent context.'}
        </li>
        <li>
          <strong>{isKo ? '대화 목록' : 'Conversation List'}</strong> -{' '}
          {isKo
            ? '이전 대화들이 시간순으로 나열됩니다. "오늘", "어제", "지난 7일", "지난 30일" 등으로 그룹화되어 있습니다. 대화 제목은 첫 메시지를 기반으로 자동 생성되며, 클릭하여 이름을 변경할 수 있습니다.'
            : 'Previous conversations are listed chronologically, grouped by "Today," "Yesterday," "Previous 7 Days," "Previous 30 Days," etc. Titles are auto-generated from the first message and can be renamed by clicking.'}
        </li>
        <li>
          <strong>{isKo ? '검색 기능' : 'Search Feature'}</strong> -{' '}
          {isKo
            ? '돋보기 아이콘을 클릭하거나 단축키를 사용하여 이전 대화를 키워드로 검색할 수 있습니다.'
            : 'Click the magnifying glass icon or use keyboard shortcuts to search previous conversations by keyword.'}
        </li>
        <li>
          <strong>{isKo ? 'GPTs 탐색' : 'Explore GPTs'}</strong> -{' '}
          {isKo
            ? 'GPT Store에서 다른 사용자들이 만든 맞춤형 GPT를 탐색하고 사용할 수 있습니다.'
            : 'Explore and use custom GPTs created by other users from the GPT Store.'}
        </li>
      </ul>

      <h3>{isKo ? '채팅 영역' : 'Chat Area'}</h3>
      <p>
        {isKo
          ? '화면 중앙의 넓은 영역이 실제 대화가 이루어지는 공간입니다.'
          : 'The wide central area is where actual conversations take place.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '메시지 표시' : 'Message Display'}</strong> -{' '}
          {isKo
            ? '사용자의 메시지와 ChatGPT의 응답이 번갈아 표시됩니다. 사용자 메시지는 우측에, AI 응답은 좌측에 나타납니다.'
            : 'User messages and ChatGPT responses are displayed alternately. User messages appear on the right, AI responses on the left.'}
        </li>
        <li>
          <strong>{isKo ? '마크다운 렌더링' : 'Markdown Rendering'}</strong> -{' '}
          {isKo
            ? 'ChatGPT의 응답은 마크다운 형식으로 렌더링됩니다. 제목, 굵은 글씨, 목록, 코드 블록, 표 등이 깔끔하게 표시됩니다.'
            : 'ChatGPT responses are rendered in Markdown format. Headings, bold text, lists, code blocks, and tables are displayed cleanly.'}
        </li>
        <li>
          <strong>{isKo ? '코드 블록' : 'Code Blocks'}</strong> -{' '}
          {isKo
            ? '코드가 포함된 응답에는 구문 강조(Syntax Highlighting)가 적용되며, "Copy code" 버튼으로 코드를 쉽게 복사할 수 있습니다.'
            : 'Code in responses has syntax highlighting applied, and a "Copy code" button makes it easy to copy code.'}
        </li>
        <li>
          <strong>{isKo ? '응답 액션' : 'Response Actions'}</strong> -{' '}
          {isKo
            ? '각 응답 하단에는 복사, 좋아요/싫어요, 재생성(Regenerate) 버튼이 있습니다. 피드백은 모델 개선에 도움이 됩니다.'
            : 'Below each response are copy, thumbs up/down, and regenerate buttons. Feedback helps improve the model.'}
        </li>
      </ul>

      <h3>{isKo ? '모델 선택기' : 'Model Selector'}</h3>
      <p>
        {isKo
          ? '채팅 화면 상단에서 사용할 AI 모델을 선택할 수 있습니다. 대화 중에도 모델을 변경할 수 있으며, 각 모델은 다른 특성을 가집니다.'
          : 'You can select the AI model at the top of the chat screen. Models can be changed during conversation, and each has different characteristics.'}
      </p>
      <ul>
        <li>
          <strong>GPT-4o</strong> -{' '}
          {isKo
            ? '가장 강력한 범용 모델입니다. 복잡한 추론, 창의적 글쓰기, 코딩에 탁월합니다. Plus 사용자는 더 많은 메시지를 보낼 수 있습니다.'
            : 'The most powerful general-purpose model. Excels at complex reasoning, creative writing, and coding. Plus users can send more messages.'}
        </li>
        <li>
          <strong>GPT-4o mini</strong> -{' '}
          {isKo
            ? '빠르고 가벼운 모델로, 간단한 질문이나 일상적인 대화에 적합합니다. 무료 사용자도 무제한으로 사용할 수 있습니다.'
            : 'A fast, lightweight model suitable for simple questions and everyday conversations. Free users can use it without limits.'}
        </li>
        <li>
          <strong>o1 / o1-mini</strong> -{' '}
          {isKo
            ? '복잡한 수학, 과학, 코딩 문제에 특화된 추론 모델입니다. 응답 전에 "생각하는" 과정을 거쳐 더 정확한 답변을 제공합니다. Plus 이상의 요금제에서 사용 가능합니다.'
            : 'Reasoning models specialized for complex math, science, and coding problems. They go through a "thinking" process before responding for more accurate answers. Available on Plus and above plans.'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '간단한 일상 질문에는 GPT-4o mini를, 복잡한 분석이나 전문적인 작업에는 GPT-4o를, 수학/과학 문제에는 o1을 사용하세요. 적절한 모델 선택이 효율적인 사용의 핵심입니다.'
          : 'Use GPT-4o mini for simple everyday questions, GPT-4o for complex analysis or professional work, and o1 for math/science problems. Choosing the right model is key to efficient usage.'}
      </TipBox>

      <h3>{isKo ? '입력창 (Input Field)' : 'Input Field'}</h3>
      <p>
        {isKo
          ? '화면 하단의 입력창에서 메시지를 작성하고 전송합니다.'
          : 'Write and send messages from the input field at the bottom of the screen.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '텍스트 입력' : 'Text Input'}</strong> -{' '}
          {isKo
            ? '메시지를 입력하고 Enter 키 또는 전송 버튼을 클릭하여 전송합니다. Shift+Enter로 줄바꿈할 수 있습니다.'
            : 'Type a message and press Enter or click the send button to send. Use Shift+Enter for line breaks.'}
        </li>
        <li>
          <strong>{isKo ? '파일 첨부' : 'File Attachment'}</strong> -{' '}
          {isKo
            ? '클립 아이콘을 클릭하거나 파일을 드래그 앤 드롭하여 첨부할 수 있습니다. 이미지, PDF, 코드 파일 등을 지원합니다.'
            : 'Click the clip icon or drag and drop files to attach them. Supports images, PDFs, code files, and more.'}
        </li>
        <li>
          <strong>{isKo ? '음성 입력' : 'Voice Input'}</strong> -{' '}
          {isKo
            ? '마이크 아이콘을 클릭하여 음성으로 메시지를 입력할 수 있습니다. 한국어 음성 인식을 지원합니다.'
            : 'Click the microphone icon to input messages by voice. Korean speech recognition is supported.'}
        </li>
      </ul>

      <h3>{isKo ? '대화 관리' : 'Conversation Management'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '대화 이름 변경' : 'Rename Conversation'}</strong> -{' '}
          {isKo
            ? '사이드바에서 대화 제목을 클릭하여 원하는 이름으로 변경할 수 있습니다. 체계적인 관리를 위해 의미 있는 이름을 사용하세요.'
            : 'Click the conversation title in the sidebar to rename it. Use meaningful names for systematic management.'}
        </li>
        <li>
          <strong>{isKo ? '대화 삭제' : 'Delete Conversation'}</strong> -{' '}
          {isKo
            ? '대화에 마우스를 올리면 나타나는 삭제(휴지통) 아이콘을 클릭합니다. 삭제된 대화는 복구할 수 없으니 주의하세요.'
            : 'Click the delete (trash) icon that appears when hovering over a conversation. Deleted conversations cannot be recovered.'}
        </li>
        <li>
          <strong>{isKo ? '대화 공유' : 'Share Conversation'}</strong> -{' '}
          {isKo
            ? '대화 내용을 링크로 공유할 수 있습니다. 공유된 대화는 읽기 전용이며, 공유 설정에서 언제든 링크를 비활성화할 수 있습니다.'
            : 'Share conversation content via link. Shared conversations are read-only, and you can deactivate the link anytime from sharing settings.'}
        </li>
        <li>
          <strong>{isKo ? '대화 아카이브' : 'Archive Conversation'}</strong> -{' '}
          {isKo
            ? '자주 사용하지 않지만 보관하고 싶은 대화를 아카이브할 수 있습니다. 설정 > 일반에서 아카이브된 대화를 관리할 수 있습니다.'
            : 'Archive conversations you don\'t use often but want to keep. Manage archived conversations in Settings > General.'}
        </li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? '중요한 대화 내용은 별도로 복사하여 저장해 두세요. ChatGPT의 대화 기록은 영구적으로 보장되지 않으며, 서비스 업데이트나 계정 문제로 인해 대화가 유실될 수 있습니다.'
          : 'Save important conversation content separately by copying it. ChatGPT conversation history is not permanently guaranteed and may be lost due to service updates or account issues.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Effective Conversations
   =============================================== */
function ConversationSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '효과적인 대화법' : 'Effective Conversations'}</h2>

      <h3>{isKo ? '좋은 질문의 원칙' : 'Principles of Good Questions'}</h3>
      <p>
        {isKo
          ? 'ChatGPT에서 원하는 답변을 얻으려면 좋은 질문(프롬프트)을 작성하는 것이 핵심입니다. 다음 원칙들을 참고하세요.'
          : 'Writing good questions (prompts) is key to getting desired answers from ChatGPT. Follow these principles.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '구체적으로 질문하기' : 'Be Specific'}</strong> -{' '}
          {isKo
            ? '"마케팅에 대해 알려줘" 대신 "B2B SaaS 스타트업을 위한 콘텐츠 마케팅 전략 5가지를 예시와 함께 알려줘"처럼 구체적으로 요청하세요.'
            : 'Instead of "Tell me about marketing," ask "Give me 5 content marketing strategies for B2B SaaS startups with examples."'}
        </li>
        <li>
          <strong>{isKo ? '역할 지정하기' : 'Assign a Role'}</strong> -{' '}
          {isKo
            ? '"10년 경력의 시니어 개발자로서 이 코드를 리뷰해줘"처럼 ChatGPT에게 특정 역할을 부여하면 더 전문적인 답변을 얻을 수 있습니다.'
            : 'Assigning a specific role like "Review this code as a senior developer with 10 years of experience" yields more expert responses.'}
        </li>
        <li>
          <strong>{isKo ? '출력 형식 지정하기' : 'Specify Output Format'}</strong> -{' '}
          {isKo
            ? '"표 형식으로 정리해줘", "마크다운으로 작성해줘", "불릿 포인트로 요약해줘"처럼 원하는 형식을 명시하세요.'
            : 'Specify the desired format like "Organize in a table," "Write in Markdown," or "Summarize with bullet points."'}
        </li>
        <li>
          <strong>{isKo ? '맥락 제공하기' : 'Provide Context'}</strong> -{' '}
          {isKo
            ? '배경 정보, 대상 독자, 목적 등을 알려주면 더 적절한 답변을 받을 수 있습니다. "이 글은 초등학생을 대상으로 합니다"와 같은 맥락을 추가하세요.'
            : 'Providing background information, target audience, and purpose leads to more appropriate answers. Add context like "This article is for elementary school students."'}
        </li>
        <li>
          <strong>{isKo ? '제약 조건 명시하기' : 'Specify Constraints'}</strong> -{' '}
          {isKo
            ? '"500자 이내로", "전문 용어 없이 쉽게", "한국어로 작성해줘" 등 제약 조건을 명확히 하세요.'
            : 'Clearly state constraints like "Within 500 words," "Easy without jargon," or "Write in Korean."'}
        </li>
      </ul>

      <h3>{isKo ? '좋은 프롬프트 vs 나쁜 프롬프트' : 'Good Prompts vs Bad Prompts'}</h3>

      <p><strong>{isKo ? '나쁜 예시:' : 'Bad Example:'}</strong></p>
      <CodeBlock
        language="text"
        code={isKo ? '파이썬 코드 짜줘' : 'Write Python code'}
      />

      <p><strong>{isKo ? '좋은 예시:' : 'Good Example:'}</strong></p>
      <CodeBlock
        language="text"
        code={isKo
          ? `파이썬으로 CSV 파일을 읽어서 데이터를 분석하는 코드를 작성해줘.

요구사항:
- pandas 라이브러리 사용
- 'sales_data.csv' 파일에서 월별 매출 합계 계산
- 결과를 막대그래프로 시각화 (matplotlib 사용)
- 한글 폰트 깨짐 방지 코드 포함
- 코드에 한국어 주석 추가`
          : `Write Python code to read a CSV file and analyze data.

Requirements:
- Use pandas library
- Calculate monthly sales totals from 'sales_data.csv'
- Visualize results as a bar chart (using matplotlib)
- Include Korean font rendering fix
- Add Korean comments to the code`}
      />

      <TipBox type="tip">
        {isKo
          ? '프롬프트에 "단계별로 설명해줘" 또는 "Step by step으로 풀어줘"를 추가하면 더 체계적이고 상세한 답변을 받을 수 있습니다. 이를 Chain of Thought(사고의 연쇄) 기법이라고 합니다.'
          : 'Adding "Explain step by step" to your prompt yields more systematic and detailed responses. This is called the Chain of Thought technique.'}
      </TipBox>

      <h3>{isKo ? '컨텍스트 관리' : 'Context Management'}</h3>
      <p>
        {isKo
          ? 'ChatGPT는 같은 대화 내에서 이전 메시지를 기억합니다. 이 "컨텍스트 윈도우"를 효과적으로 활용하면 더 좋은 결과를 얻을 수 있습니다.'
          : 'ChatGPT remembers previous messages within the same conversation. Effectively utilizing this "context window" yields better results.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '한 주제 = 한 대화' : 'One Topic = One Conversation'}</strong> -{' '}
          {isKo
            ? '서로 다른 주제는 별도의 대화에서 진행하세요. 주제가 섞이면 ChatGPT가 혼란을 겪어 응답 품질이 떨어질 수 있습니다.'
            : 'Discuss different topics in separate conversations. Mixing topics can confuse ChatGPT and reduce response quality.'}
        </li>
        <li>
          <strong>{isKo ? '이전 맥락 참조' : 'Reference Previous Context'}</strong> -{' '}
          {isKo
            ? '"위에서 작성한 코드에서 에러 처리를 추가해줘"처럼 이전 답변을 자연스럽게 참조할 수 있습니다.'
            : 'You can naturally reference previous responses like "Add error handling to the code you wrote above."'}
        </li>
        <li>
          <strong>{isKo ? '대화가 길어지면 요약 요청' : 'Request Summary for Long Conversations'}</strong> -{' '}
          {isKo
            ? '대화가 길어지면 "지금까지 논의한 내용을 요약해줘"라고 요청하세요. 그리고 새 대화에서 해당 요약을 첫 메시지로 붙여넣어 맥락을 이어갈 수 있습니다.'
            : 'When conversations get long, ask to "Summarize what we\'ve discussed so far." Then paste that summary as the first message in a new conversation to continue the context.'}
        </li>
        <li>
          <strong>{isKo ? '컨텍스트 윈도우 한계 인지' : 'Know Context Window Limits'}</strong> -{' '}
          {isKo
            ? 'ChatGPT의 컨텍스트 윈도우에는 한계가 있습니다 (GPT-4o 기준 약 128K 토큰). 매우 긴 대화에서는 초기 메시지를 "잊어버릴" 수 있으므로, 중요한 정보는 주기적으로 다시 언급해 주세요.'
            : 'ChatGPT has context window limits (about 128K tokens for GPT-4o). In very long conversations, early messages may be "forgotten," so periodically restate important information.'}
        </li>
      </ul>

      <h3>{isKo ? '멀티턴 대화 전략' : 'Multi-Turn Conversation Strategies'}</h3>
      <p>
        {isKo
          ? '복잡한 작업은 한 번에 완성하려 하지 말고, 여러 단계로 나누어 대화하는 것이 효과적입니다.'
          : 'For complex tasks, it\'s more effective to break them into multiple steps rather than trying to complete everything at once.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '점진적 구체화' : 'Progressive Refinement'}</strong> -{' '}
          {isKo
            ? '먼저 큰 그림을 요청하고, 그 다음 각 부분을 구체화해 나가세요. "블로그 글의 개요를 먼저 작성해줘" -> "2번 항목을 자세히 써줘"'
            : 'Ask for the big picture first, then refine each part. "Write a blog outline first" then "Elaborate on item 2."'}
        </li>
        <li>
          <strong>{isKo ? '피드백 제공' : 'Provide Feedback'}</strong> -{' '}
          {isKo
            ? '"좋은데 좀 더 캐주얼한 톤으로 바꿔줘", "이 부분은 좋지만 결론이 약해" 등 구체적인 피드백을 제공하세요.'
            : 'Provide specific feedback like "Good, but make the tone more casual" or "This part is good but the conclusion is weak."'}
        </li>
        <li>
          <strong>{isKo ? '반복 수정 (Iteration)' : 'Iteration'}</strong> -{' '}
          {isKo
            ? '한 번에 완벽한 결과를 기대하지 마세요. 2-3회의 수정 요청을 통해 원하는 결과에 가까워질 수 있습니다.'
            : 'Don\'t expect perfect results in one try. 2-3 rounds of revision requests can get you closer to desired results.'}
        </li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? 'ChatGPT가 잘못된 정보를 자신 있게 말하는 "환각(Hallucination)" 현상에 주의하세요. 특히 숫자, 날짜, 인용, 링크 등은 반드시 원본 소스에서 확인해야 합니다. "출처를 알려줘"라고 요청하면 확인에 도움이 됩니다.'
          : 'Beware of "hallucinations" where ChatGPT confidently states incorrect information. Always verify numbers, dates, quotes, and links from original sources. Asking "Provide your sources" can help with verification.'}
      </TipBox>

      <h3>{isKo ? '응답 개선 요청하기' : 'Requesting Response Improvements'}</h3>
      <p>
        {isKo
          ? 'ChatGPT의 응답이 마음에 들지 않을 때 사용할 수 있는 유용한 후속 프롬프트들입니다.'
          : 'Useful follow-up prompts when you\'re not satisfied with ChatGPT\'s response.'}
      </p>
      <ul>
        <li>{isKo ? '"더 자세히 설명해줘" - 간략한 답변을 확장' : '"Explain in more detail" - expand brief answers'}</li>
        <li>{isKo ? '"더 간결하게 요약해줘" - 긴 답변을 압축' : '"Summarize more concisely" - condense long answers'}</li>
        <li>{isKo ? '"예시를 들어서 설명해줘" - 추상적 설명에 구체성 추가' : '"Explain with examples" - add specificity to abstract explanations'}</li>
        <li>{isKo ? '"다른 관점에서 접근해줘" - 새로운 시각의 답변 요청' : '"Approach from a different perspective" - request a new viewpoint'}</li>
        <li>{isKo ? '"초보자도 이해할 수 있게 설명해줘" - 난이도 조절' : '"Explain so a beginner can understand" - adjust difficulty level'}</li>
        <li>{isKo ? '"장단점을 비교해줘" - 균형 잡힌 분석 요청' : '"Compare pros and cons" - request balanced analysis'}</li>
        <li>{isKo ? '"실제 사용 사례를 포함해줘" - 실용적 정보 추가' : '"Include real-world use cases" - add practical information'}</li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Settings & Custom
   =============================================== */
function SettingsSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '설정 & 커스텀' : 'Settings & Custom'}</h2>

      <h3>{isKo ? 'Custom Instructions (맞춤 지시사항)' : 'Custom Instructions'}</h3>
      <p>
        {isKo
          ? 'Custom Instructions는 모든 새로운 대화에 자동으로 적용되는 기본 지시사항을 설정하는 기능입니다. 매번 같은 내용을 반복하지 않아도 됩니다. 설정 > Personalization > Custom Instructions에서 설정할 수 있습니다.'
          : 'Custom Instructions allow you to set default instructions that automatically apply to all new conversations. No need to repeat the same instructions every time. Set them in Settings > Personalization > Custom Instructions.'}
      </p>
      <p>
        {isKo
          ? '두 가지 섹션으로 구성되어 있습니다.'
          : 'It consists of two sections.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '"ChatGPT가 알아야 할 것"' : '"What would you like ChatGPT to know about you?"'}</strong> -{' '}
          {isKo
            ? '당신의 직업, 관심사, 위치, 사용 목적 등 배경 정보를 입력합니다. 예: "나는 한국에서 일하는 프론트엔드 개발자입니다. React와 TypeScript를 주로 사용합니다."'
            : 'Enter background information like your job, interests, location, and use case. Example: "I am a frontend developer in Korea. I mainly use React and TypeScript."'}
        </li>
        <li>
          <strong>{isKo ? '"ChatGPT가 어떻게 응답할지"' : '"How would you like ChatGPT to respond?"'}</strong> -{' '}
          {isKo
            ? '응답 스타일, 길이, 형식 등을 지정합니다. 예: "항상 한국어로 답변해줘. 코드에는 주석을 달아줘. 전문 용어를 쓸 때는 영어 원어를 괄호 안에 표기해줘."'
            : 'Specify response style, length, and format. Example: "Always respond in Korean. Add comments to code. When using technical terms, include the English original in parentheses."'}
        </li>
      </ul>

      <CodeBlock
        language="text"
        code={isKo
          ? `[Custom Instructions 예시]

ChatGPT가 알아야 할 것:
- 한국에서 일하는 풀스택 웹 개발자
- React, Node.js, PostgreSQL 사용
- 중급 수준, 시니어 레벨을 목표로 학습 중
- 개인 프로젝트와 회사 업무 모두에 ChatGPT 활용

ChatGPT 응답 방식:
- 한국어로 답변하되, 기술 용어는 영어 병기
- 코드에 한국어 주석 포함
- 모범 사례(Best Practice)와 함께 설명
- 보안 관련 주의사항 항상 언급
- 간결하되 핵심은 빠짐없이`
          : `[Custom Instructions Example]

What ChatGPT should know:
- Full-stack web developer based in Korea
- Uses React, Node.js, PostgreSQL
- Intermediate level, studying toward senior level
- Uses ChatGPT for both personal projects and work

Response preferences:
- Answer in Korean with English technical terms
- Include Korean comments in code
- Explain with best practices
- Always mention security considerations
- Concise but comprehensive`}
      />

      <TipBox type="tip">
        {isKo
          ? 'Custom Instructions는 각 대화의 모든 메시지에 영향을 미치므로, 너무 길거나 복잡하게 작성하면 토큰을 낭비할 수 있습니다. 핵심적인 내용만 간결하게 작성하세요.'
          : 'Custom Instructions affect every message in each conversation, so overly long or complex instructions can waste tokens. Keep them concise with only essential content.'}
      </TipBox>

      <h3>{isKo ? 'Memory (메모리)' : 'Memory'}</h3>
      <p>
        {isKo
          ? 'Memory 기능은 ChatGPT가 여러 대화에 걸쳐 사용자에 대한 정보를 기억하는 기능입니다. 대화 중에 언급한 선호도, 배경 정보 등을 자동으로 저장하고, 이후 대화에서 활용합니다.'
          : 'The Memory feature allows ChatGPT to remember information about you across conversations. It automatically saves preferences, background information, etc. mentioned during conversations and uses them later.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '자동 저장' : 'Auto-save'}</strong> -{' '}
          {isKo
            ? '대화 중 중요한 정보(이름, 직업, 선호도 등)가 자동으로 메모리에 저장됩니다.'
            : 'Important information (name, job, preferences) is automatically saved to memory during conversations.'}
        </li>
        <li>
          <strong>{isKo ? '명시적 저장' : 'Explicit Save'}</strong> -{' '}
          {isKo
            ? '"이것을 기억해줘"라고 말하면 특정 정보를 메모리에 저장할 수 있습니다.'
            : 'Saying "Remember this" saves specific information to memory.'}
        </li>
        <li>
          <strong>{isKo ? '메모리 관리' : 'Memory Management'}</strong> -{' '}
          {isKo
            ? '설정 > Personalization > Memory에서 저장된 메모리를 확인하고, 개별적으로 삭제하거나 전체 초기화할 수 있습니다.'
            : 'View saved memories in Settings > Personalization > Memory. You can delete individual items or clear all memories.'}
        </li>
        <li>
          <strong>{isKo ? '메모리 비활성화' : 'Disable Memory'}</strong> -{' '}
          {isKo
            ? '프라이버시가 걱정되면 메모리 기능을 완전히 비활성화할 수 있습니다. 임시 채팅(Temporary Chat) 모드를 사용하면 해당 대화는 메모리에 저장되지 않습니다.'
            : 'If privacy is a concern, you can completely disable the memory feature. Using Temporary Chat mode ensures that conversation is not saved to memory.'}
        </li>
      </ul>

      <h3>{isKo ? 'Data Controls (데이터 관리)' : 'Data Controls'}</h3>
      <p>
        {isKo
          ? '설정 > Data Controls에서 개인 데이터의 관리 방법을 제어할 수 있습니다.'
          : 'Control how your personal data is managed in Settings > Data Controls.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '채팅 기록 & 학습' : 'Chat History & Training'}</strong> -{' '}
          {isKo
            ? '이 옵션을 끄면 대화 내용이 OpenAI의 모델 학습에 사용되지 않습니다. 단, 이 경우 채팅 기록도 30일 후 삭제됩니다. 민감한 정보를 다루는 경우 이 옵션을 끄는 것을 권장합니다.'
            : 'Turning this off prevents your conversations from being used for OpenAI model training. However, chat history will also be deleted after 30 days. Recommended to turn off when handling sensitive information.'}
        </li>
        <li>
          <strong>{isKo ? '데이터 내보내기' : 'Export Data'}</strong> -{' '}
          {isKo
            ? '모든 대화 기록과 계정 정보를 JSON 형식으로 내보낼 수 있습니다. "Export data" 버튼을 클릭하면 이메일로 다운로드 링크가 전송됩니다.'
            : 'Export all conversation history and account information in JSON format. Click "Export data" to receive a download link via email.'}
        </li>
        <li>
          <strong>{isKo ? '계정 삭제' : 'Delete Account'}</strong> -{' '}
          {isKo
            ? '계정과 모든 관련 데이터를 영구적으로 삭제할 수 있습니다. 이 작업은 되돌릴 수 없으므로 신중하게 결정하세요.'
            : 'Permanently delete your account and all associated data. This action is irreversible, so decide carefully.'}
        </li>
        <li>
          <strong>{isKo ? '공유된 링크 관리' : 'Manage Shared Links'}</strong> -{' '}
          {isKo
            ? '이전에 공유한 대화 링크를 확인하고, 불필요한 공유 링크를 비활성화할 수 있습니다.'
            : 'View previously shared conversation links and deactivate unnecessary shared links.'}
        </li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? '회사 기밀 정보, 개인 식별 정보(주민등록번호, 비밀번호 등), 의료 정보 등 민감한 데이터는 ChatGPT에 입력하지 않는 것이 좋습니다. 필요한 경우 "채팅 기록 & 학습" 옵션을 반드시 끄세요.'
          : 'Avoid entering sensitive data like company secrets, personal identification numbers, passwords, or medical information into ChatGPT. If necessary, make sure to turn off the "Chat History & Training" option.'}
      </TipBox>

      <h3>{isKo ? '일반 설정' : 'General Settings'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '테마 (Theme)' : 'Theme'}</strong> -{' '}
          {isKo
            ? '라이트 모드, 다크 모드, 또는 시스템 설정에 따라 자동으로 전환되도록 설정할 수 있습니다.'
            : 'Set to light mode, dark mode, or auto-switch based on system settings.'}
        </li>
        <li>
          <strong>{isKo ? '언어 (Language)' : 'Language'}</strong> -{' '}
          {isKo
            ? '인터페이스 언어를 설정할 수 있습니다. 인터페이스 언어와 별개로 대화는 어떤 언어로든 가능합니다.'
            : 'Set the interface language. Conversations can be in any language regardless of the interface language setting.'}
        </li>
        <li>
          <strong>{isKo ? '아카이브된 대화' : 'Archived Conversations'}</strong> -{' '}
          {isKo
            ? '아카이브한 대화를 관리하고, 필요시 다시 활성화할 수 있습니다.'
            : 'Manage archived conversations and reactivate them when needed.'}
        </li>
        <li>
          <strong>{isKo ? '모든 대화 삭제' : 'Delete All Conversations'}</strong> -{' '}
          {isKo
            ? '모든 대화 기록을 한 번에 삭제할 수 있습니다. 이 작업은 되돌릴 수 없습니다.'
            : 'Delete all conversation history at once. This action is irreversible.'}
        </li>
      </ul>
    </div>
  );
}

/* ===============================================
   Section: Tips & Shortcuts
   =============================================== */
function TipsSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '팁 & 단축키' : 'Tips & Shortcuts'}</h2>

      <h3>{isKo ? '키보드 단축키' : 'Keyboard Shortcuts'}</h3>
      <p>
        {isKo
          ? 'ChatGPT에서 사용할 수 있는 주요 키보드 단축키를 익혀두면 생산성이 크게 향상됩니다.'
          : 'Learning the main keyboard shortcuts in ChatGPT significantly improves productivity.'}
      </p>
      <ul>
        <li><strong>Ctrl/Cmd + Shift + O</strong> - {isKo ? '사이드바 열기/닫기' : 'Toggle sidebar'}</li>
        <li><strong>Ctrl/Cmd + Shift + N</strong> - {isKo ? '새 대화 시작' : 'Start new conversation'}</li>
        <li><strong>Ctrl/Cmd + Shift + C</strong> - {isKo ? '마지막 코드 블록 복사' : 'Copy last code block'}</li>
        <li><strong>Ctrl/Cmd + Shift + ;</strong> - {isKo ? '마지막 응답 복사' : 'Copy last response'}</li>
        <li><strong>Ctrl/Cmd + /</strong> - {isKo ? '단축키 목록 표시' : 'Show shortcuts list'}</li>
        <li><strong>Ctrl/Cmd + Shift + S</strong> - {isKo ? '대화 검색' : 'Search conversations'}</li>
        <li><strong>Shift + Esc</strong> - {isKo ? '생성 중인 응답 중지' : 'Stop generating response'}</li>
        <li><strong>Shift + Enter</strong> - {isKo ? '줄바꿈 (Enter는 전송)' : 'New line (Enter sends)'}</li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? 'Ctrl/Cmd + / 단축키를 누르면 사용 가능한 모든 단축키를 한눈에 볼 수 있습니다. 이것만 기억해도 나머지는 쉽게 찾을 수 있습니다!'
          : 'Press Ctrl/Cmd + / to see all available shortcuts at a glance. Remember just this one and you can easily find the rest!'}
      </TipBox>

      <h3>{isKo ? '생산성 향상 팁' : 'Productivity Tips'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '템플릿 활용' : 'Use Templates'}</strong> -{' '}
          {isKo
            ? '자주 사용하는 프롬프트를 메모장이나 노션에 저장해두고 필요할 때 붙여넣기하세요. 예: 이메일 작성 템플릿, 코드 리뷰 요청 템플릿, 번역 요청 템플릿 등.'
            : 'Save frequently used prompts in a notepad or Notion and paste when needed. Examples: email writing template, code review request template, translation request template.'}
        </li>
        <li>
          <strong>{isKo ? '코드 인터프리터 활용' : 'Use Code Interpreter'}</strong> -{' '}
          {isKo
            ? '데이터 분석, 차트 생성, 파일 변환 등 실제 코드를 실행해야 하는 작업은 Advanced Data Analysis(코드 인터프리터) 기능을 사용하세요. 파일을 업로드하면 자동으로 활성화됩니다.'
            : 'For tasks requiring actual code execution like data analysis, chart creation, and file conversion, use the Advanced Data Analysis (Code Interpreter) feature. It activates automatically when you upload files.'}
        </li>
        <li>
          <strong>{isKo ? '대화 이름 체계적으로 관리' : 'Manage Conversation Names Systematically'}</strong> -{' '}
          {isKo
            ? '대화 이름을 "[프로젝트명] 기능 설명" 형태로 변경하면 나중에 쉽게 찾을 수 있습니다. 예: "[MyApp] 로그인 기능 구현", "[블로그] 4월 포스트 초안"'
            : 'Rename conversations like "[Project] Feature Description" for easy retrieval. Example: "[MyApp] Login Implementation", "[Blog] April Post Draft"'}
        </li>
        <li>
          <strong>{isKo ? '임시 채팅 활용' : 'Use Temporary Chat'}</strong> -{' '}
          {isKo
            ? '일회성 질문이나 민감한 내용은 임시 채팅(Temporary Chat)을 사용하세요. 대화가 기록에 남지 않고 메모리에도 저장되지 않습니다.'
            : 'Use Temporary Chat for one-time questions or sensitive content. Conversations won\'t be saved to history or memory.'}
        </li>
        <li>
          <strong>{isKo ? 'GPTs 활용' : 'Leverage GPTs'}</strong> -{' '}
          {isKo
            ? '특정 작업에 최적화된 GPTs를 찾아 활용하세요. 글쓰기, 코딩, 디자인, 학습 등 분야별 전문 GPTs가 GPT Store에 있습니다. 자주 사용하는 GPTs는 즐겨찾기에 추가하세요.'
            : 'Find and use GPTs optimized for specific tasks. Specialized GPTs for writing, coding, design, and learning are available in the GPT Store. Add frequently used GPTs to favorites.'}
        </li>
        <li>
          <strong>{isKo ? '모바일 앱 활용' : 'Use Mobile App'}</strong> -{' '}
          {isKo
            ? '이동 중에도 ChatGPT 모바일 앱을 통해 질문할 수 있습니다. 음성 대화 기능을 활용하면 핸즈프리로 대화할 수 있어 매우 편리합니다.'
            : 'Ask questions on-the-go via the ChatGPT mobile app. The voice conversation feature allows hands-free chatting, which is very convenient.'}
        </li>
      </ul>

      <h3>{isKo ? '흔한 실수와 해결법' : 'Common Mistakes & Solutions'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '너무 모호한 질문' : 'Too Vague Questions'}</strong>
          <br />
          {isKo
            ? '실수: "좋은 앱 만들어줘" -> 해결: "React Native로 할 일 목록(Todo) 앱을 만들어줘. 기능: 할 일 추가/삭제/완료 체크, 로컬 저장, 다크모드 지원"'
            : 'Mistake: "Make a good app" -> Solution: "Create a Todo list app with React Native. Features: add/delete/check tasks, local storage, dark mode support"'}
        </li>
        <li>
          <strong>{isKo ? '결과를 검증하지 않는 것' : 'Not Verifying Results'}</strong>
          <br />
          {isKo
            ? '실수: ChatGPT의 답변을 그대로 사용 -> 해결: 중요한 사실, 수치, 코드는 반드시 직접 확인하세요. 특히 법률, 의학, 재무 관련 조언은 전문가와 상담이 필요합니다.'
            : 'Mistake: Using ChatGPT answers as-is -> Solution: Always verify important facts, figures, and code yourself. Legal, medical, and financial advice especially requires professional consultation.'}
        </li>
        <li>
          <strong>{isKo ? '하나의 대화에 모든 것을 넣기' : 'Putting Everything in One Conversation'}</strong>
          <br />
          {isKo
            ? '실수: 하나의 긴 대화에서 여러 주제를 다룸 -> 해결: 주제별로 새 대화를 시작하세요. 컨텍스트가 깔끔할수록 응답 품질이 좋아집니다.'
            : 'Mistake: Discussing multiple topics in one long conversation -> Solution: Start new conversations for each topic. Cleaner context leads to better response quality.'}
        </li>
        <li>
          <strong>{isKo ? 'ChatGPT에 과도한 신뢰' : 'Over-trusting ChatGPT'}</strong>
          <br />
          {isKo
            ? '실수: "ChatGPT가 말했으니 맞을 거야" -> 해결: ChatGPT는 도구이지 권위 있는 출처가 아닙니다. 중요한 결정에는 여러 소스를 참고하세요.'
            : 'Mistake: "ChatGPT said it, so it must be right" -> Solution: ChatGPT is a tool, not an authoritative source. Consult multiple sources for important decisions.'}
        </li>
        <li>
          <strong>{isKo ? '민감한 정보 입력' : 'Entering Sensitive Information'}</strong>
          <br />
          {isKo
            ? '실수: 비밀번호, API 키, 개인정보를 입력 -> 해결: 민감한 정보는 절대 입력하지 마세요. 코드 예시가 필요하면 더미 데이터를 사용하세요.'
            : 'Mistake: Entering passwords, API keys, personal info -> Solution: Never enter sensitive information. Use dummy data when code examples are needed.'}
        </li>
        <li>
          <strong>{isKo ? '한 번에 너무 많은 것을 요청' : 'Requesting Too Much at Once'}</strong>
          <br />
          {isKo
            ? '실수: "전체 웹사이트를 처음부터 끝까지 만들어줘" -> 해결: 큰 작업은 단계별로 나누어 요청하세요. "먼저 프로젝트 구조를 설계해줘" -> "헤더 컴포넌트를 만들어줘" -> ...'
            : 'Mistake: "Build the entire website from start to finish" -> Solution: Break large tasks into steps. "Design the project structure first" -> "Create the header component" -> ...'}
        </li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '프롬프트 엔지니어링은 연습을 통해 향상됩니다. 처음부터 완벽한 프롬프트를 작성할 필요 없습니다. 같은 질문도 다양한 방식으로 시도해보면서 어떤 방식이 가장 좋은 결과를 내는지 경험을 쌓아가세요.'
          : 'Prompt engineering improves with practice. You don\'t need to write perfect prompts from the start. Try the same question in different ways and build experience on which approach yields the best results.'}
      </TipBox>
    </div>
  );
}

/* ===============================================
   Section: Use Cases
   =============================================== */
function UseCasesSection({ isKo }: any) {
  return (
    <div className="guide-section">
      <h2>{isKo ? '활용 사례' : 'Use Cases'}</h2>

      <p>
        {isKo
          ? 'ChatGPT는 다양한 분야에서 강력한 도구로 활용될 수 있습니다. 주요 활용 분야와 구체적인 사용 예시를 살펴보겠습니다.'
          : 'ChatGPT can be a powerful tool across various fields. Let\'s explore major use cases and specific examples.'}
      </p>

      <h3>{isKo ? '글쓰기 & 콘텐츠 작성' : 'Writing & Content Creation'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '블로그 포스트 & 아티클' : 'Blog Posts & Articles'}</strong> -{' '}
          {isKo
            ? '주제를 주면 개요를 작성하고, 각 섹션을 상세하게 채워줍니다. SEO에 최적화된 제목과 메타 설명도 생성할 수 있습니다. "AI 트렌드 2024"와 같은 주제로 3000자 블로그를 요청해 보세요.'
            : 'Given a topic, it creates outlines and fills in each section in detail. Can also generate SEO-optimized titles and meta descriptions.'}
        </li>
        <li>
          <strong>{isKo ? '이메일 작성' : 'Email Writing'}</strong> -{' '}
          {isKo
            ? '비즈니스 이메일, 감사 메일, 문의 메일 등 다양한 이메일을 톤에 맞게 작성해 줍니다. "거래처에 보낼 정중한 납기 연장 요청 이메일을 작성해줘"와 같이 구체적으로 요청하세요.'
            : 'Writes various emails including business, thank-you, and inquiry emails in the appropriate tone.'}
        </li>
        <li>
          <strong>{isKo ? '소셜 미디어 콘텐츠' : 'Social Media Content'}</strong> -{' '}
          {isKo
            ? '인스타그램 캡션, 트위터 쓰레드, 링크드인 포스트 등 각 플랫폼에 맞는 콘텐츠를 생성할 수 있습니다. 해시태그 추천도 함께 받을 수 있습니다.'
            : 'Creates content tailored to each platform including Instagram captions, Twitter threads, and LinkedIn posts. Can also recommend hashtags.'}
        </li>
        <li>
          <strong>{isKo ? '교정 & 윤문' : 'Proofreading & Editing'}</strong> -{' '}
          {isKo
            ? '작성한 글의 문법 오류를 수정하고, 문체를 개선하며, 더 자연스럽고 읽기 쉬운 문장으로 다듬어 줍니다.'
            : 'Corrects grammar errors, improves writing style, and polishes text for more natural and readable sentences.'}
        </li>
      </ul>

      <h3>{isKo ? '코딩 & 개발' : 'Coding & Development'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '코드 작성' : 'Code Writing'}</strong> -{' '}
          {isKo
            ? '요구사항을 설명하면 다양한 프로그래밍 언어로 코드를 작성해 줍니다. 함수, 클래스, API 엔드포인트, 데이터베이스 쿼리 등 거의 모든 종류의 코드를 생성할 수 있습니다.'
            : 'Writes code in various programming languages based on requirements. Can generate nearly all types of code including functions, classes, API endpoints, and database queries.'}
        </li>
        <li>
          <strong>{isKo ? '디버깅 & 에러 해결' : 'Debugging & Error Resolution'}</strong> -{' '}
          {isKo
            ? '에러 메시지를 복사하여 붙여넣으면 원인을 분석하고 해결책을 제시합니다. 스택 트레이스, 로그 파일도 분석할 수 있습니다.'
            : 'Paste error messages and it will analyze the cause and suggest solutions. Can also analyze stack traces and log files.'}
        </li>
        <li>
          <strong>{isKo ? '코드 리뷰 & 리팩토링' : 'Code Review & Refactoring'}</strong> -{' '}
          {isKo
            ? '기존 코드를 분석하여 개선점을 제안하고, 클린 코드 원칙에 맞게 리팩토링해 줍니다. 성능 최적화, 보안 취약점 찾기도 가능합니다.'
            : 'Analyzes existing code, suggests improvements, and refactors according to clean code principles. Can also optimize performance and find security vulnerabilities.'}
        </li>
        <li>
          <strong>{isKo ? '테스트 코드 작성' : 'Test Code Writing'}</strong> -{' '}
          {isKo
            ? '유닛 테스트, 통합 테스트 코드를 자동으로 생성해 줍니다. Jest, pytest, JUnit 등 다양한 테스트 프레임워크를 지원합니다.'
            : 'Automatically generates unit tests and integration tests. Supports various testing frameworks like Jest, pytest, and JUnit.'}
        </li>
        <li>
          <strong>{isKo ? '기술 문서 작성' : 'Technical Documentation'}</strong> -{' '}
          {isKo
            ? 'README, API 문서, 코드 주석, 아키텍처 설명서 등을 작성해 줍니다.'
            : 'Writes READMEs, API documentation, code comments, and architecture descriptions.'}
        </li>
      </ul>

      <CodeBlock
        language="text"
        code={isKo
          ? `[코딩 활용 프롬프트 예시]

"다음 Python 함수를 리뷰해줘. 성능, 가독성, 에러 처리
측면에서 개선할 점을 알려주고, 리팩토링된 코드를 보여줘.

def get_user_data(user_id):
    data = db.query(f'SELECT * FROM users WHERE id = {user_id}')
    return data"`
          : `[Coding Prompt Example]

"Review this Python function. Suggest improvements in terms
of performance, readability, and error handling, and show
the refactored code.

def get_user_data(user_id):
    data = db.query(f'SELECT * FROM users WHERE id = {user_id}')
    return data"`}
      />

      <h3>{isKo ? '학습 & 교육' : 'Learning & Education'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '개념 설명' : 'Concept Explanation'}</strong> -{' '}
          {isKo
            ? '어려운 개념을 이해하기 쉽게 설명해 줍니다. "양자역학을 중학생도 이해할 수 있게 비유를 들어 설명해줘"처럼 수준을 지정할 수 있습니다.'
            : 'Explains difficult concepts in easy-to-understand ways. You can specify the level like "Explain quantum mechanics with analogies a middle schooler can understand."'}
        </li>
        <li>
          <strong>{isKo ? '학습 계획 수립' : 'Study Plan Creation'}</strong> -{' '}
          {isKo
            ? '"3개월 안에 Python 웹 개발을 배우고 싶어. 주당 10시간 투자 가능해"와 같이 요청하면 단계별 학습 계획을 세워줍니다.'
            : 'Request like "I want to learn Python web development in 3 months, investing 10 hours per week" and it creates a step-by-step study plan.'}
        </li>
        <li>
          <strong>{isKo ? '문제 풀이 도우미' : 'Problem-Solving Helper'}</strong> -{' '}
          {isKo
            ? '수학, 과학, 프로그래밍 문제의 풀이 과정을 단계별로 설명해 줍니다. 답만 알려주는 것이 아니라 이해를 돕는 설명을 제공합니다.'
            : 'Explains math, science, and programming problem solutions step by step. Provides explanations for understanding, not just answers.'}
        </li>
        <li>
          <strong>{isKo ? '언어 학습' : 'Language Learning'}</strong> -{' '}
          {isKo
            ? '외국어 문법 설명, 작문 교정, 회화 연습 파트너로 활용할 수 있습니다. "영어 비즈니스 이메일 표현 10가지를 예문과 함께 알려줘"와 같이 요청해보세요.'
            : 'Can be used for foreign language grammar explanations, writing corrections, and conversation practice.'}
        </li>
        <li>
          <strong>{isKo ? '퀴즈 & 플래시카드 생성' : 'Quiz & Flashcard Creation'}</strong> -{' '}
          {isKo
            ? '학습 내용을 기반으로 퀴즈 문제나 플래시카드를 만들어 줍니다. 복습에 매우 효과적입니다.'
            : 'Creates quizzes and flashcards based on study content. Very effective for review.'}
        </li>
      </ul>

      <h3>{isKo ? '비즈니스 활용' : 'Business Use'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '시장 조사 & 분석' : 'Market Research & Analysis'}</strong> -{' '}
          {isKo
            ? '시장 동향, 경쟁사 분석, SWOT 분석, 사업 계획서 초안 작성 등에 활용할 수 있습니다. 다만 최신 데이터는 웹 검색 기능과 함께 사용하세요.'
            : 'Used for market trends, competitor analysis, SWOT analysis, and business plan drafts. Use with web browsing for up-to-date data.'}
        </li>
        <li>
          <strong>{isKo ? '회의록 & 보고서 작성' : 'Meeting Notes & Reports'}</strong> -{' '}
          {isKo
            ? '회의 내용을 정리하여 회의록을 작성하고, 주간/월간 보고서, 프로젝트 제안서 등 다양한 비즈니스 문서를 작성해 줍니다.'
            : 'Organizes meeting content into minutes and writes various business documents like weekly/monthly reports and project proposals.'}
        </li>
        <li>
          <strong>{isKo ? '데이터 분석' : 'Data Analysis'}</strong> -{' '}
          {isKo
            ? 'CSV, Excel 파일을 업로드하면 데이터를 분석하고, 인사이트를 도출하며, 차트를 생성해 줍니다. 피벗 테이블, 통계 분석, 트렌드 파악 등이 가능합니다.'
            : 'Upload CSV or Excel files for data analysis, insight extraction, and chart generation. Pivot tables, statistical analysis, and trend identification are possible.'}
        </li>
        <li>
          <strong>{isKo ? '고객 서비스 개선' : 'Customer Service Improvement'}</strong> -{' '}
          {isKo
            ? 'FAQ 작성, 고객 응대 스크립트 생성, 불만 사항에 대한 적절한 응대 문구 작성에 활용할 수 있습니다.'
            : 'Create FAQs, customer response scripts, and appropriate complaint handling responses.'}
        </li>
      </ul>

      <h3>{isKo ? '창의적 활용' : 'Creative Use'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '스토리 & 시나리오 작성' : 'Story & Scenario Writing'}</strong> -{' '}
          {isKo
            ? '소설, 단편, 시나리오, 대본 등 창작물의 아이디어 브레인스토밍부터 초안 작성까지 도와줍니다. 장르, 톤, 캐릭터 설정을 지정하면 더 좋은 결과를 얻을 수 있습니다.'
            : 'Helps with brainstorming and drafting creative works like novels, short stories, screenplays, and scripts. Specifying genre, tone, and character settings yields better results.'}
        </li>
        <li>
          <strong>{isKo ? '이미지 생성 (DALL-E)' : 'Image Generation (DALL-E)'}</strong> -{' '}
          {isKo
            ? '텍스트 설명을 입력하면 AI가 이미지를 생성합니다. 로고, 일러스트, 배경 이미지, 프로필 사진 등을 만들 수 있습니다. 스타일(수채화, 3D, 미니멀 등)을 지정할 수 있습니다.'
            : 'AI generates images from text descriptions. Create logos, illustrations, background images, and profile pictures. Specify styles (watercolor, 3D, minimal, etc.).'}
        </li>
        <li>
          <strong>{isKo ? '음악 & 가사 작성' : 'Music & Lyrics Writing'}</strong> -{' '}
          {isKo
            ? '노래 가사, 시, 랩 가사 등을 작성할 수 있습니다. 장르, 분위기, 주제를 지정하면 그에 맞는 가사를 생성합니다.'
            : 'Write song lyrics, poems, and rap lyrics. Specify genre, mood, and theme for matching lyrics.'}
        </li>
        <li>
          <strong>{isKo ? '게임 디자인' : 'Game Design'}</strong> -{' '}
          {isKo
            ? '게임 컨셉, 캐릭터 설정, 스토리라인, 게임 메카닉스 등을 구상하는 데 도움을 받을 수 있습니다. 텍스트 기반 어드벤처 게임을 ChatGPT와 함께 플레이할 수도 있습니다.'
            : 'Get help designing game concepts, character settings, storylines, and game mechanics. You can even play text-based adventure games with ChatGPT.'}
        </li>
      </ul>

      <h3>{isKo ? '분석 & 리서치' : 'Analysis & Research'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '논문 & 문헌 분석' : 'Paper & Literature Analysis'}</strong> -{' '}
          {isKo
            ? 'PDF 논문을 업로드하면 핵심 내용을 요약하고, 방법론을 분석하며, 비판적 리뷰를 제공합니다. 관련 연구 방향도 제안받을 수 있습니다.'
            : 'Upload PDF papers for summarization, methodology analysis, and critical review. Can also suggest related research directions.'}
        </li>
        <li>
          <strong>{isKo ? '법률 & 계약서 분석' : 'Legal & Contract Analysis'}</strong> -{' '}
          {isKo
            ? '계약서, 이용약관 등을 업로드하면 핵심 조항을 요약하고, 주의할 점을 알려줍니다. 단, 법적 조언으로 대체할 수는 없으므로 중요한 사안은 반드시 변호사와 상담하세요.'
            : 'Upload contracts and terms of service for key clause summaries and attention points. Note: this cannot replace legal advice, so consult a lawyer for important matters.'}
        </li>
        <li>
          <strong>{isKo ? '트렌드 분석' : 'Trend Analysis'}</strong> -{' '}
          {isKo
            ? '특정 산업이나 기술의 트렌드를 분석하고, 미래 전망을 정리해 줍니다. 웹 검색과 결합하면 최신 정보를 반영한 분석이 가능합니다.'
            : 'Analyze trends in specific industries or technologies and organize future outlooks. Combined with web browsing, analysis can reflect the latest information.'}
        </li>
        <li>
          <strong>{isKo ? '비교 분석' : 'Comparative Analysis'}</strong> -{' '}
          {isKo
            ? '제품, 서비스, 기술, 프레임워크 등을 다양한 관점에서 비교 분석하여 표 형태로 정리해 줍니다. "React vs Vue vs Angular 비교표를 만들어줘"와 같이 요청해 보세요.'
            : 'Compares products, services, technologies, and frameworks from various perspectives in table format. Try requesting "Create a comparison table of React vs Vue vs Angular."'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? 'ChatGPT를 가장 효과적으로 활용하는 방법은 "AI에게 전부 맡기기"가 아니라 "AI와 협업하기"입니다. 초안은 ChatGPT가, 검수와 최종 판단은 사람이 하는 워크플로우를 만들어보세요.'
          : 'The most effective way to use ChatGPT is not "leaving everything to AI" but "collaborating with AI." Create a workflow where ChatGPT handles drafts while humans handle review and final decisions.'}
      </TipBox>

      <TipBox type="warning">
        {isKo
          ? 'ChatGPT의 응답을 학술 논문이나 공식 문서에 그대로 사용하는 것은 표절 및 학술 윤리 위반에 해당할 수 있습니다. 참고 자료로 활용하되, 반드시 자신의 언어로 재작성하고 출처를 밝히세요.'
          : 'Using ChatGPT responses directly in academic papers or official documents may constitute plagiarism and academic ethics violations. Use as reference material, but always rewrite in your own words and cite sources.'}
      </TipBox>
    </div>
  );
}
