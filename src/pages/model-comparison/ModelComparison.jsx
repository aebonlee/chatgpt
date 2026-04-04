import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'overview', icon: 'fa-chart-bar', ko: '모델 개요', en: 'Model Overview' },
  { id: 'gpt4o', icon: 'fa-star', ko: 'GPT-4o', en: 'GPT-4o' },
  { id: 'gpt4', icon: 'fa-gem', ko: 'GPT-4 / GPT-4 Turbo', en: 'GPT-4 / GPT-4 Turbo' },
  { id: 'o-series', icon: 'fa-brain', ko: 'o1 / o3 시리즈', en: 'o1 / o3 Series' },
  { id: 'gpt4mini', icon: 'fa-bolt', ko: 'GPT-4o mini', en: 'GPT-4o mini' },
  { id: 'comparison', icon: 'fa-table', ko: '성능 비교표', en: 'Performance Table' },
  { id: 'choosing', icon: 'fa-compass', ko: '모델 선택 가이드', en: 'Selection Guide' },
];

export default function ModelComparison() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
  const ko = language === 'ko';

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

  /* ───────── Section renderers ───────── */

  const renderOverview = () => (
    <div className="guide-section" id="overview">
      <h2>{ko ? '모델 개요' : 'Model Overview'}</h2>

      <h3>{ko ? 'OpenAI 모델 발전 역사' : 'OpenAI Model Evolution'}</h3>
      <p>
        {ko
          ? 'OpenAI는 2018년 GPT-1을 시작으로, 자연어 처리 분야에서 혁신적인 발전을 이루어 왔습니다. GPT-1은 1억 1,700만 개의 파라미터를 가진 비교적 작은 모델이었지만, 사전 학습(pre-training)과 미세 조정(fine-tuning)이라는 패러다임을 제시하며 AI 언어 모델의 새로운 시대를 열었습니다.'
          : 'OpenAI has driven revolutionary advances in natural language processing since GPT-1 in 2018. GPT-1, with 117 million parameters, was relatively small but introduced the pre-training and fine-tuning paradigm that opened a new era for AI language models.'}
      </p>
      <p>
        {ko
          ? 'GPT-2(2019)는 15억 파라미터로 확장되어 놀라운 텍스트 생성 능력을 보여주었고, GPT-3(2020)는 1,750억 파라미터로 도약하며 퓨샷 학습(few-shot learning)이라는 개념을 대중화했습니다. GPT-3.5(2022)는 ChatGPT의 기반이 되어 전 세계적인 AI 열풍을 일으켰습니다.'
          : 'GPT-2 (2019) scaled to 1.5 billion parameters with impressive text generation, GPT-3 (2020) leaped to 175 billion parameters popularizing few-shot learning, and GPT-3.5 (2022) powered ChatGPT, sparking a global AI boom.'}
      </p>
      <p>
        {ko
          ? 'GPT-4(2023)는 멀티모달 처리와 향상된 추론 능력을 갖추며 한층 더 진보했고, 2024년에는 GPT-4o가 등장하여 텍스트, 이미지, 오디오를 하나의 모델로 처리하는 옴니(omni) 모델 시대가 열렸습니다. 같은 해, 추론 특화 o1 시리즈와 비용 효율적인 GPT-4o mini도 출시되었습니다.'
          : 'GPT-4 (2023) brought multimodal processing and enhanced reasoning. In 2024, GPT-4o ushered in the omni-model era handling text, image, and audio in a single model, while the reasoning-focused o1 series and cost-efficient GPT-4o mini also launched.'}
      </p>

      <h3>{ko ? '모델 패밀리 구성' : 'Model Family Structure'}</h3>
      <p>
        {ko
          ? '현재 OpenAI의 모델은 크게 네 가지 패밀리로 구분됩니다:'
          : 'OpenAI\'s current models are divided into four main families:'}
      </p>
      <ul>
        <li>
          <strong>GPT-4o</strong> {ko
            ? '- 플래그십 옴니 모델. 텍스트, 이미지, 오디오를 네이티브로 처리하며 가장 균형 잡힌 성능과 속도를 제공합니다.'
            : '- Flagship omni model. Natively handles text, images, and audio with the best balance of performance and speed.'}
        </li>
        <li>
          <strong>GPT-4 / GPT-4 Turbo</strong> {ko
            ? '- 검증된 고성능 모델. GPT-4 Turbo는 128K 컨텍스트와 개선된 가격을 제공합니다.'
            : '- Proven high-performance models. GPT-4 Turbo offers 128K context and improved pricing.'}
        </li>
        <li>
          <strong>o1 / o3 시리즈</strong> {ko
            ? '- 추론(reasoning) 특화 모델. 복잡한 수학, 과학, 코딩 문제에서 탁월한 성능을 보입니다.'
            : '- Reasoning-specialized models. Excel at complex math, science, and coding problems.'}
        </li>
        <li>
          <strong>GPT-4o mini</strong> {ko
            ? '- 경량 모델. 빠른 속도와 낮은 비용으로 간단한 작업에 최적화되어 있습니다.'
            : '- Lightweight model. Optimized for simple tasks with fast speed and low cost.'}
        </li>
      </ul>

      <h3>{ko ? '주요 차이점 요약' : 'Key Differences Summary'}</h3>
      <p>
        {ko
          ? '각 모델은 성능, 속도, 비용, 컨텍스트 윈도우, 멀티모달 지원 등에서 차이가 있습니다. GPT-4o는 범용 목적에 가장 적합하고, o1/o3는 깊은 추론이 필요한 작업에, GPT-4o mini는 대량 처리와 비용 절감이 중요한 시나리오에 적합합니다. 이어지는 섹션에서 각 모델을 상세히 비교해 보겠습니다.'
          : 'Each model differs in performance, speed, cost, context window, and multimodal support. GPT-4o is best for general purposes, o1/o3 for deep reasoning tasks, and GPT-4o mini for high-volume, cost-sensitive scenarios. The following sections compare each model in detail.'}
      </p>

      <TipBox type="tip" title={ko ? '알아두세요' : 'Good to Know'}>
        <p>
          {ko
            ? 'OpenAI는 지속적으로 모델을 업데이트합니다. API에서 사용되는 모델 이름에는 날짜 스냅샷(예: gpt-4o-2024-08-06)이 포함되어 특정 버전을 고정할 수 있습니다. 프로덕션 환경에서는 스냅샷 이름을 사용하는 것이 안정성 면에서 좋습니다.'
            : 'OpenAI continuously updates its models. API model names include date snapshots (e.g., gpt-4o-2024-08-06) to pin specific versions. Using snapshot names is recommended for stability in production environments.'}
        </p>
      </TipBox>
    </div>
  );

  const renderGpt4o = () => (
    <div className="guide-section" id="gpt4o">
      <h2>GPT-4o</h2>

      <h3>{ko ? 'GPT-4o 소개' : 'Introducing GPT-4o'}</h3>
      <p>
        {ko
          ? 'GPT-4o("o"는 "omni"를 의미)는 2024년 5월에 출시된 OpenAI의 플래그십 모델입니다. GPT-4 수준의 지능을 유지하면서도 텍스트, 이미지, 오디오를 단일 모델에서 네이티브로 처리할 수 있다는 것이 가장 큰 특징입니다. 기존에는 각 모달리티별로 별도의 모델이 필요했지만, GPT-4o는 하나의 통합 모델로 모든 입출력을 처리합니다.'
          : 'GPT-4o ("o" stands for "omni") is OpenAI\'s flagship model released in May 2024. Its key feature is natively processing text, images, and audio in a single model while maintaining GPT-4-level intelligence. Previously separate models were needed for each modality, but GPT-4o handles all inputs and outputs in one unified model.'}
      </p>

      <h3>{ko ? '멀티모달 능력' : 'Multimodal Capabilities'}</h3>
      <p>
        {ko
          ? 'GPT-4o는 세 가지 모달리티를 네이티브로 지원합니다:'
          : 'GPT-4o natively supports three modalities:'}
      </p>
      <ul>
        <li>
          <strong>{ko ? '텍스트' : 'Text'}</strong> {ko
            ? '- 자연어 이해 및 생성, 번역, 요약, 코드 작성 등 모든 텍스트 기반 작업을 수행합니다.'
            : '- Performs all text-based tasks including natural language understanding, generation, translation, summarization, and code writing.'}
        </li>
        <li>
          <strong>{ko ? '이미지(비전)' : 'Image (Vision)'}</strong> {ko
            ? '- 이미지를 입력받아 분석, 설명, OCR, 차트 해석 등이 가능합니다. GPT-4 Vision과 동일하거나 더 나은 성능을 보입니다.'
            : '- Accepts images for analysis, description, OCR, chart interpretation, etc. Matches or exceeds GPT-4 Vision performance.'}
        </li>
        <li>
          <strong>{ko ? '오디오' : 'Audio'}</strong> {ko
            ? '- 음성 입력을 직접 이해하고 음성으로 응답할 수 있습니다. Whisper를 거치지 않고 네이티브로 오디오를 처리하여 감정, 톤, 억양까지 이해합니다.'
            : '- Directly understands voice input and responds with speech. Processes audio natively without going through Whisper, understanding emotion, tone, and intonation.'}
        </li>
      </ul>

      <h3>{ko ? '속도 및 비용 특성' : 'Speed & Cost Characteristics'}</h3>
      <p>
        {ko
          ? 'GPT-4o는 GPT-4 Turbo 대비 약 2배 빠른 응답 속도를 보이며, API 비용은 약 50% 저렴합니다. 구체적인 가격은 입력 토큰 $2.50 / 1M, 출력 토큰 $10.00 / 1M입니다(2024년 기준). 이는 GPT-4 Turbo의 입력 $10 / 1M, 출력 $30 / 1M에 비해 큰 폭으로 인하된 것입니다.'
          : 'GPT-4o is approximately 2x faster than GPT-4 Turbo and about 50% cheaper via API. Specific pricing is $2.50/1M input tokens and $10.00/1M output tokens (as of 2024), a significant reduction from GPT-4 Turbo\'s $10/1M input and $30/1M output.'}
      </p>

      <h3>{ko ? '128K 컨텍스트 윈도우' : '128K Context Window'}</h3>
      <p>
        {ko
          ? 'GPT-4o는 128,000 토큰의 컨텍스트 윈도우를 지원합니다. 이는 약 300페이지 분량의 텍스트를 한 번에 처리할 수 있다는 의미입니다. 긴 문서 분석, 대규모 코드베이스 리뷰, 복잡한 대화 이력 유지 등에 매우 유용합니다. 출력 토큰은 최대 16,384 토큰까지 생성할 수 있습니다.'
          : 'GPT-4o supports a 128,000-token context window, meaning it can process approximately 300 pages of text at once. This is very useful for long document analysis, large codebase review, and maintaining complex conversation histories. Output can generate up to 16,384 tokens.'}
      </p>

      <h3>{ko ? '활용 시나리오' : 'Use Case Scenarios'}</h3>
      <ul>
        <li>{ko ? '복잡한 대화형 AI 어시스턴트 구축' : 'Building complex conversational AI assistants'}</li>
        <li>{ko ? '이미지와 텍스트를 결합한 멀티모달 앱 개발' : 'Developing multimodal apps combining images and text'}</li>
        <li>{ko ? '실시간 음성 대화 시스템' : 'Real-time voice conversation systems'}</li>
        <li>{ko ? '긴 문서의 분석 및 요약' : 'Long document analysis and summarization'}</li>
        <li>{ko ? '코드 생성 및 디버깅' : 'Code generation and debugging'}</li>
        <li>{ko ? '다국어 번역 및 콘텐츠 생성' : 'Multilingual translation and content creation'}</li>
      </ul>

      <TipBox type="important" title={ko ? '핵심 포인트' : 'Key Point'}>
        <p>
          {ko
            ? 'GPT-4o는 대부분의 사용 사례에서 가장 추천되는 모델입니다. GPT-4 수준의 성능을 더 빠르고 저렴하게 사용할 수 있으며, 멀티모달 지원까지 네이티브로 제공합니다. 특별히 깊은 추론이 필요한 경우가 아니라면 GPT-4o를 기본 선택으로 고려하세요.'
            : 'GPT-4o is the most recommended model for most use cases. It offers GPT-4-level performance faster and cheaper, with native multimodal support. Unless you specifically need deep reasoning, consider GPT-4o as your default choice.'}
        </p>
      </TipBox>
    </div>
  );

  const renderGpt4 = () => (
    <div className="guide-section" id="gpt4">
      <h2>GPT-4 / GPT-4 Turbo</h2>

      <h3>{ko ? 'GPT-4 소개' : 'Introducing GPT-4'}</h3>
      <p>
        {ko
          ? 'GPT-4는 2023년 3월에 출시된 OpenAI의 대규모 멀티모달 모델입니다. GPT-3.5 대비 창의성, 정확성, 안전성에서 큰 폭으로 향상되었으며, 특히 복잡한 지시 사항을 이해하고 미묘한 뉘앙스를 처리하는 능력이 뛰어납니다. 출시 당시 8K와 32K 컨텍스트 윈도우 두 가지 버전이 제공되었습니다.'
          : 'GPT-4, released in March 2023, is OpenAI\'s large multimodal model. It significantly improved creativity, accuracy, and safety over GPT-3.5, with excellent ability to understand complex instructions and handle subtle nuances. It launched with both 8K and 32K context window versions.'}
      </p>

      <h3>{ko ? 'GPT-4 Turbo의 등장' : 'The Arrival of GPT-4 Turbo'}</h3>
      <p>
        {ko
          ? 'GPT-4 Turbo는 2023년 11월 DevDay에서 발표되었습니다. GPT-4의 핵심 성능은 유지하면서도 여러 가지 중요한 개선이 이루어졌습니다:'
          : 'GPT-4 Turbo was announced at DevDay in November 2023. It maintains GPT-4\'s core performance while delivering several important improvements:'}
      </p>
      <ul>
        <li>
          <strong>{ko ? '컨텍스트 확장' : 'Context Expansion'}</strong> {ko
            ? '- 8K/32K에서 128K 토큰으로 대폭 확장되었습니다.'
            : '- Expanded significantly from 8K/32K to 128K tokens.'}
        </li>
        <li>
          <strong>{ko ? '가격 인하' : 'Price Reduction'}</strong> {ko
            ? '- 입력 토큰 비용이 GPT-4 대비 약 3배 저렴해졌습니다(입력 $10/1M, 출력 $30/1M).'
            : '- Input token cost became about 3x cheaper than GPT-4 ($10/1M input, $30/1M output).'}
        </li>
        <li>
          <strong>{ko ? '학습 데이터 업데이트' : 'Training Data Update'}</strong> {ko
            ? '- 학습 데이터가 2023년 4월까지로 업데이트되었습니다.'
            : '- Training data updated through April 2023.'}
        </li>
        <li>
          <strong>{ko ? 'JSON 모드' : 'JSON Mode'}</strong> {ko
            ? '- 안정적인 JSON 출력을 보장하는 JSON 모드가 추가되었습니다.'
            : '- Added JSON mode ensuring reliable JSON output.'}
        </li>
        <li>
          <strong>{ko ? '재현 가능한 출력' : 'Reproducible Output'}</strong> {ko
            ? '- seed 파라미터를 통해 일관된 출력을 생성할 수 있게 되었습니다.'
            : '- Consistent output generation via the seed parameter.'}
        </li>
      </ul>

      <h3>{ko ? '성능 특성' : 'Performance Characteristics'}</h3>
      <p>
        {ko
          ? 'GPT-4 계열은 모의 사법시험에서 상위 10% 이내의 점수를 기록할 만큼 뛰어난 추론 능력을 보유하고 있습니다. 복잡한 수학 문제, 논리적 추론, 창의적 글쓰기, 코드 생성 등 다양한 벤치마크에서 GPT-3.5를 크게 상회하는 성능을 보입니다. 다만 GPT-4o가 출시된 이후로는 대부분의 벤치마크에서 GPT-4o가 동등하거나 더 나은 성능을 보여줍니다.'
          : 'The GPT-4 family scored in the top 10% on simulated bar exams, demonstrating excellent reasoning. It significantly outperforms GPT-3.5 on various benchmarks including complex math, logical reasoning, creative writing, and code generation. However, since GPT-4o\'s release, GPT-4o matches or exceeds GPT-4 on most benchmarks.'}
      </p>

      <h3>{ko ? '최적 활용 시나리오' : 'Optimal Use Scenarios'}</h3>
      <ul>
        <li>{ko ? '레거시 시스템에서 GPT-4 기반으로 구축된 파이프라인 유지보수' : 'Maintaining pipelines built on GPT-4 in legacy systems'}</li>
        <li>{ko ? 'GPT-4 Turbo의 특정 스냅샷 버전에 의존하는 프로덕션 환경' : 'Production environments dependent on specific GPT-4 Turbo snapshot versions'}</li>
        <li>{ko ? 'GPT-4의 특정 동작 패턴에 최적화된 프롬프트가 있는 경우' : 'Cases with prompts optimized for GPT-4\'s specific behavior patterns'}</li>
      </ul>

      <TipBox type="warning" title={ko ? '참고 사항' : 'Note'}>
        <p>
          {ko
            ? '새로운 프로젝트에서는 GPT-4 Turbo 대신 GPT-4o를 사용하는 것이 권장됩니다. GPT-4o는 GPT-4 Turbo보다 더 빠르고, 저렴하며, 대부분의 벤치마크에서 동등하거나 더 나은 성능을 보입니다. GPT-4 / GPT-4 Turbo는 기존 시스템 호환성이 필요한 경우에 주로 사용됩니다.'
            : 'For new projects, GPT-4o is recommended over GPT-4 Turbo. GPT-4o is faster, cheaper, and matches or exceeds GPT-4 Turbo on most benchmarks. GPT-4/GPT-4 Turbo is primarily used for existing system compatibility.'}
        </p>
      </TipBox>
    </div>
  );

  const renderOSeries = () => (
    <div className="guide-section" id="o-series">
      <h2>{ko ? 'o1 / o3 시리즈' : 'o1 / o3 Series'}</h2>

      <h3>{ko ? 'o1 / o3 모델 소개' : 'Introducing o1 / o3 Models'}</h3>
      <p>
        {ko
          ? 'o1 시리즈는 2024년 9월에 출시된 OpenAI의 추론(reasoning) 특화 모델입니다. 기존 GPT 모델과 달리, o1은 응답하기 전에 "생각하는 시간"을 가지며, 내부적으로 Chain-of-Thought(사고 연쇄) 추론을 수행합니다. 이후 2025년에 o3 및 o3-mini가 발표되어 추론 능력이 더욱 강화되었습니다.'
          : 'The o1 series, released in September 2024, is OpenAI\'s reasoning-specialized model. Unlike conventional GPT models, o1 takes "thinking time" before responding, internally performing Chain-of-Thought reasoning. Later in 2025, o3 and o3-mini were announced with further enhanced reasoning.'}
      </p>

      <h3>{ko ? '추론(Reasoning) 능력' : 'Reasoning Capabilities'}</h3>
      <p>
        {ko
          ? 'o1/o3 모델의 핵심은 복잡한 문제를 단계적으로 분석하고 해결하는 능력입니다. 모델은 응답 전에 내부적으로 여러 추론 단계를 거치며, 이 과정에서 문제를 분해하고, 가설을 세우고, 검증하는 과정을 자동으로 수행합니다. 이러한 접근 방식 덕분에 기존 GPT-4o로는 풀기 어려웠던 복잡한 문제도 정확하게 해결할 수 있습니다.'
          : 'The core of o1/o3 models is their ability to analyze and solve complex problems step by step. Before responding, the model goes through multiple internal reasoning steps, automatically decomposing problems, forming hypotheses, and verifying them. This approach enables accurate solutions to complex problems that GPT-4o struggled with.'}
      </p>
      <p>
        {ko
          ? '다만, 이 "생각하는 시간" 때문에 응답 속도는 GPT-4o보다 느립니다. 간단한 질문에도 수십 초가 걸릴 수 있으며, 복잡한 문제는 수 분이 소요될 수 있습니다. 또한 추론 토큰이 추가로 소비되므로 비용도 더 높습니다.'
          : 'However, this "thinking time" makes response speeds slower than GPT-4o. Simple questions may take tens of seconds, and complex problems can take several minutes. Additional reasoning tokens are consumed, making costs higher as well.'}
      </p>

      <h3>{ko ? '수학, 과학, 코딩 특화' : 'Specialization in Math, Science & Coding'}</h3>
      <p>
        {ko
          ? 'o1/o3 모델은 다음 분야에서 특히 뛰어난 성능을 보입니다:'
          : 'o1/o3 models excel particularly in the following areas:'}
      </p>
      <ul>
        <li>
          <strong>{ko ? '수학' : 'Mathematics'}</strong> {ko
            ? '- 국제 수학 올림피아드(IMO) 수준의 문제를 풀 수 있습니다. o1은 AIME(미국 수학 초대 시험)에서 상위 500명 수준의 점수를 기록했습니다.'
            : '- Can solve International Mathematical Olympiad (IMO) level problems. o1 scored at the top-500 level on AIME.'}
        </li>
        <li>
          <strong>{ko ? '과학' : 'Science'}</strong> {ko
            ? '- GPQA Diamond(대학원 수준 과학 질문)에서 PhD 전문가 수준의 정확도를 달성했습니다. 물리학, 화학, 생물학 문제에서 뛰어난 추론을 보여줍니다.'
            : '- Achieved PhD-expert level accuracy on GPQA Diamond (graduate-level science questions). Shows outstanding reasoning in physics, chemistry, and biology.'}
        </li>
        <li>
          <strong>{ko ? '코딩' : 'Coding'}</strong> {ko
            ? '- Codeforces 프로그래밍 대회에서 상위 퍼센타일에 해당하는 성적을 거두었습니다. 복잡한 알고리즘 설계, 디버깅, 코드 리팩토링에 탁월합니다.'
            : '- Achieved top percentile results in Codeforces programming competitions. Excels at complex algorithm design, debugging, and code refactoring.'}
        </li>
      </ul>

      <h3>{ko ? '사용 시나리오' : 'Use Scenarios'}</h3>
      <ul>
        <li>{ko ? '복잡한 수학적 증명이나 계산이 필요한 작업' : 'Tasks requiring complex mathematical proofs or calculations'}</li>
        <li>{ko ? '과학 연구에서의 데이터 분석 및 가설 검증' : 'Data analysis and hypothesis testing in scientific research'}</li>
        <li>{ko ? '고난이도 알고리즘 문제 풀이' : 'Solving high-difficulty algorithm problems'}</li>
        <li>{ko ? '복잡한 비즈니스 로직의 설계 및 검증' : 'Designing and verifying complex business logic'}</li>
        <li>{ko ? '다단계 추론이 필요한 전략적 의사결정' : 'Strategic decision-making requiring multi-step reasoning'}</li>
        <li>{ko ? '법률, 의료 등 전문 분야의 복잡한 분석' : 'Complex analysis in specialized fields like law and medicine'}</li>
      </ul>

      <TipBox type="tip" title={ko ? '사용 팁' : 'Usage Tip'}>
        <p>
          {ko
            ? 'o1/o3 모델을 사용할 때는 시스템 프롬프트 대신 개발자 메시지(developer message)를 사용합니다. 또한, temperature나 top_p 등의 샘플링 파라미터가 제한됩니다. 프롬프트는 간결하고 명확하게 작성하되, 단계별 사고를 지시할 필요 없이 문제만 정확히 제시하면 모델이 스스로 최적의 추론 경로를 찾습니다.'
            : 'When using o1/o3 models, use developer messages instead of system prompts. Sampling parameters like temperature and top_p are limited. Write prompts concisely and clearly - just state the problem precisely without instructing step-by-step thinking, as the model finds the optimal reasoning path on its own.'}
        </p>
      </TipBox>
    </div>
  );

  const renderGpt4Mini = () => (
    <div className="guide-section" id="gpt4mini">
      <h2>GPT-4o mini</h2>

      <h3>{ko ? 'GPT-4o mini 소개' : 'Introducing GPT-4o mini'}</h3>
      <p>
        {ko
          ? 'GPT-4o mini는 2024년 7월에 출시된 OpenAI의 소형 고효율 모델입니다. GPT-4o의 지능을 물려받으면서도 크게 축소된 크기로, 빠른 응답 속도와 매우 낮은 비용을 제공합니다. 이전의 GPT-3.5 Turbo를 대체하는 모델로 자리매김했습니다.'
          : 'GPT-4o mini, released in July 2024, is OpenAI\'s compact high-efficiency model. Inheriting GPT-4o\'s intelligence in a significantly reduced size, it offers fast response speeds and very low costs. It has positioned itself as the replacement for GPT-3.5 Turbo.'}
      </p>

      <h3>{ko ? '비용 효율성' : 'Cost Efficiency'}</h3>
      <p>
        {ko
          ? 'GPT-4o mini의 가격은 입력 $0.15 / 1M 토큰, 출력 $0.60 / 1M 토큰으로, GPT-4o 대비 약 94% 저렴합니다. 이는 GPT-3.5 Turbo($0.50 입력 / $1.50 출력)보다도 약 60% 더 저렴합니다. 대량의 API 호출이 필요한 서비스에서 비용을 획기적으로 절감할 수 있습니다.'
          : 'GPT-4o mini is priced at $0.15/1M input tokens and $0.60/1M output tokens, about 94% cheaper than GPT-4o. This is also about 60% cheaper than GPT-3.5 Turbo ($0.50 input / $1.50 output). It can dramatically reduce costs for services requiring high-volume API calls.'}
      </p>

      <h3>{ko ? '경량 작업에 최적' : 'Optimal for Lightweight Tasks'}</h3>
      <p>
        {ko
          ? 'GPT-4o mini는 128K 토큰의 컨텍스트 윈도우를 지원하며, 다음과 같은 경량 작업에 최적화되어 있습니다:'
          : 'GPT-4o mini supports a 128K token context window and is optimized for lightweight tasks such as:'}
      </p>
      <ul>
        <li>{ko ? '간단한 질의응답 및 챗봇' : 'Simple Q&A and chatbots'}</li>
        <li>{ko ? '텍스트 분류 및 감정 분석' : 'Text classification and sentiment analysis'}</li>
        <li>{ko ? '데이터 추출 및 구조화' : 'Data extraction and structuring'}</li>
        <li>{ko ? '간단한 번역 및 요약' : 'Simple translation and summarization'}</li>
        <li>{ko ? '양식 자동 완성 및 검증' : 'Form auto-completion and validation'}</li>
        <li>{ko ? '대량 텍스트 전처리 파이프라인' : 'High-volume text preprocessing pipelines'}</li>
      </ul>

      <h3>{ko ? 'GPT-3.5 Turbo와의 비교' : 'Comparison with GPT-3.5 Turbo'}</h3>
      <p>
        {ko
          ? 'GPT-4o mini는 GPT-3.5 Turbo를 거의 모든 면에서 능가합니다. MMLU 벤치마크에서 GPT-4o mini는 82%를 기록한 반면, GPT-3.5 Turbo는 70%에 그쳤습니다. 추론 능력, 코드 생성, 지시 사항 따르기 등에서 모두 월등한 성능을 보이면서도 가격은 더 저렴합니다. OpenAI는 공식적으로 GPT-3.5 Turbo 대신 GPT-4o mini 사용을 권장하고 있습니다.'
          : 'GPT-4o mini surpasses GPT-3.5 Turbo in virtually every aspect. On the MMLU benchmark, GPT-4o mini scored 82% versus GPT-3.5 Turbo\'s 70%. It shows superior reasoning, code generation, and instruction following at an even lower price. OpenAI officially recommends GPT-4o mini over GPT-3.5 Turbo.'}
      </p>

      <TipBox type="tip" title={ko ? '비용 절감 팁' : 'Cost Saving Tip'}>
        <p>
          {ko
            ? '많은 프로덕션 시스템에서 GPT-4o를 사용하는 작업 중 상당 부분이 GPT-4o mini로 대체 가능합니다. 라우팅 시스템을 구축하여 간단한 요청은 GPT-4o mini로, 복잡한 요청만 GPT-4o로 보내면 전체 비용을 크게 절감할 수 있습니다.'
            : 'Many tasks using GPT-4o in production can be replaced by GPT-4o mini. Building a routing system that sends simple requests to GPT-4o mini and only complex ones to GPT-4o can significantly reduce overall costs.'}
        </p>
      </TipBox>
    </div>
  );

  const renderComparison = () => (
    <div className="guide-section" id="comparison">
      <h2>{ko ? '성능 비교표' : 'Performance Comparison Table'}</h2>
      <p>
        {ko
          ? '아래 표는 주요 OpenAI 모델들의 핵심 사양을 한눈에 비교할 수 있도록 정리한 것입니다.'
          : 'The table below provides an at-a-glance comparison of key specifications for major OpenAI models.'}
      </p>

      <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>{ko ? '모델' : 'Model'}</th>
              <th>{ko ? '컨텍스트' : 'Context'}</th>
              <th>{ko ? '최대 출력' : 'Max Output'}</th>
              <th>{ko ? '입력 비용' : 'Input Cost'}</th>
              <th>{ko ? '출력 비용' : 'Output Cost'}</th>
              <th>{ko ? '속도' : 'Speed'}</th>
              <th>{ko ? '멀티모달' : 'Multimodal'}</th>
              <th>{ko ? '추론 능력' : 'Reasoning'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>GPT-4o</strong></td>
              <td>128K</td>
              <td>16K</td>
              <td>$2.50/1M</td>
              <td>$10.00/1M</td>
              <td>{ko ? '빠름' : 'Fast'}</td>
              <td>{ko ? '텍스트, 이미지, 오디오' : 'Text, Image, Audio'}</td>
              <td>{ko ? '높음' : 'High'}</td>
            </tr>
            <tr>
              <td><strong>GPT-4 Turbo</strong></td>
              <td>128K</td>
              <td>4K</td>
              <td>$10.00/1M</td>
              <td>$30.00/1M</td>
              <td>{ko ? '보통' : 'Moderate'}</td>
              <td>{ko ? '텍스트, 이미지' : 'Text, Image'}</td>
              <td>{ko ? '높음' : 'High'}</td>
            </tr>
            <tr>
              <td><strong>GPT-4</strong></td>
              <td>8K</td>
              <td>8K</td>
              <td>$30.00/1M</td>
              <td>$60.00/1M</td>
              <td>{ko ? '느림' : 'Slow'}</td>
              <td>{ko ? '텍스트' : 'Text'}</td>
              <td>{ko ? '높음' : 'High'}</td>
            </tr>
            <tr>
              <td><strong>o1</strong></td>
              <td>200K</td>
              <td>100K</td>
              <td>$15.00/1M</td>
              <td>$60.00/1M</td>
              <td>{ko ? '느림 (추론)' : 'Slow (Reasoning)'}</td>
              <td>{ko ? '텍스트, 이미지' : 'Text, Image'}</td>
              <td>{ko ? '매우 높음' : 'Very High'}</td>
            </tr>
            <tr>
              <td><strong>o3-mini</strong></td>
              <td>200K</td>
              <td>100K</td>
              <td>$1.10/1M</td>
              <td>$4.40/1M</td>
              <td>{ko ? '보통 (추론)' : 'Moderate (Reasoning)'}</td>
              <td>{ko ? '텍스트' : 'Text'}</td>
              <td>{ko ? '높음' : 'High'}</td>
            </tr>
            <tr>
              <td><strong>GPT-4o mini</strong></td>
              <td>128K</td>
              <td>16K</td>
              <td>$0.15/1M</td>
              <td>$0.60/1M</td>
              <td>{ko ? '매우 빠름' : 'Very Fast'}</td>
              <td>{ko ? '텍스트, 이미지' : 'Text, Image'}</td>
              <td>{ko ? '보통' : 'Moderate'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="important" title={ko ? '가격 참고' : 'Pricing Note'}>
        <p>
          {ko
            ? '위 가격은 2024년 기준이며, OpenAI는 지속적으로 가격을 조정합니다. 최신 가격은 OpenAI 공식 가격 페이지(platform.openai.com/pricing)에서 확인하세요. 또한, 배치 API를 사용하면 50% 할인된 가격으로 이용할 수 있습니다.'
            : 'Prices above are as of 2024 and OpenAI continuously adjusts pricing. Check the latest prices on OpenAI\'s official pricing page (platform.openai.com/pricing). Additionally, using the Batch API offers 50% discounted pricing.'}
        </p>
      </TipBox>

      <h3>{ko ? '벤치마크 성능 비교' : 'Benchmark Performance Comparison'}</h3>
      <div style={{ overflowX: 'auto' }}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>{ko ? '벤치마크' : 'Benchmark'}</th>
              <th>GPT-4o</th>
              <th>GPT-4 Turbo</th>
              <th>o1</th>
              <th>GPT-4o mini</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>MMLU</strong></td>
              <td>88.7%</td>
              <td>86.4%</td>
              <td>92.3%</td>
              <td>82.0%</td>
            </tr>
            <tr>
              <td><strong>HumanEval ({ko ? '코딩' : 'Coding'})</strong></td>
              <td>90.2%</td>
              <td>86.6%</td>
              <td>92.4%</td>
              <td>87.0%</td>
            </tr>
            <tr>
              <td><strong>MATH</strong></td>
              <td>76.6%</td>
              <td>72.2%</td>
              <td>94.8%</td>
              <td>70.2%</td>
            </tr>
            <tr>
              <td><strong>GPQA Diamond</strong></td>
              <td>53.6%</td>
              <td>49.1%</td>
              <td>78.0%</td>
              <td>40.2%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="tip" title={ko ? '해석 가이드' : 'Interpretation Guide'}>
        <p>
          {ko
            ? 'MMLU는 종합적인 지식 수준을, HumanEval은 코드 생성 능력을, MATH는 수학적 추론을, GPQA Diamond는 전문가 수준의 과학 추론을 측정합니다. o1이 수학과 과학 추론에서 압도적으로 높은 점수를 보이는 것을 확인할 수 있습니다.'
            : 'MMLU measures comprehensive knowledge, HumanEval measures code generation ability, MATH measures mathematical reasoning, and GPQA Diamond measures expert-level scientific reasoning. Notice how o1 dominates in math and science reasoning scores.'}
        </p>
      </TipBox>
    </div>
  );

  const renderChoosing = () => (
    <div className="guide-section" id="choosing">
      <h2>{ko ? '모델 선택 가이드' : 'Model Selection Guide'}</h2>

      <h3>{ko ? '용도별 추천 모델' : 'Recommended Models by Use Case'}</h3>
      <p>
        {ko
          ? '프로젝트의 요구사항에 따라 적합한 모델이 달라집니다. 아래는 주요 사용 사례별 추천 모델입니다:'
          : 'The appropriate model varies by project requirements. Below are recommended models for key use cases:'}
      </p>
      <ul>
        <li>
          <strong>{ko ? '일반적인 대화형 AI / 챗봇' : 'General Conversational AI / Chatbot'}</strong>
          {ko ? ' → GPT-4o (최고 성능) 또는 GPT-4o mini (비용 절감)' : ' → GPT-4o (best performance) or GPT-4o mini (cost savings)'}
        </li>
        <li>
          <strong>{ko ? '이미지 분석 및 멀티모달 앱' : 'Image Analysis & Multimodal Apps'}</strong>
          {ko ? ' → GPT-4o (네이티브 멀티모달 지원)' : ' → GPT-4o (native multimodal support)'}
        </li>
        <li>
          <strong>{ko ? '복잡한 수학/과학 문제 풀이' : 'Complex Math/Science Problem Solving'}</strong>
          {ko ? ' → o1 또는 o3 (추론 특화)' : ' → o1 or o3 (reasoning specialized)'}
        </li>
        <li>
          <strong>{ko ? '고난이도 코딩 및 알고리즘' : 'Advanced Coding & Algorithms'}</strong>
          {ko ? ' → o1 (복잡한 로직) 또는 GPT-4o (일반 코딩)' : ' → o1 (complex logic) or GPT-4o (general coding)'}
        </li>
        <li>
          <strong>{ko ? '대량 데이터 처리 / 분류' : 'High-Volume Data Processing / Classification'}</strong>
          {ko ? ' → GPT-4o mini (최저 비용, 빠른 속도)' : ' → GPT-4o mini (lowest cost, fastest speed)'}
        </li>
        <li>
          <strong>{ko ? '실시간 음성 대화' : 'Real-Time Voice Conversation'}</strong>
          {ko ? ' → GPT-4o (네이티브 오디오 지원)' : ' → GPT-4o (native audio support)'}
        </li>
        <li>
          <strong>{ko ? '비용에 민감한 스타트업 / MVP' : 'Cost-Sensitive Startup / MVP'}</strong>
          {ko ? ' → GPT-4o mini (기본) + GPT-4o (핵심 기능만)' : ' → GPT-4o mini (default) + GPT-4o (core features only)'}
        </li>
        <li>
          <strong>{ko ? '연구 및 논문 분석' : 'Research & Paper Analysis'}</strong>
          {ko ? ' → o1 (깊은 분석) 또는 GPT-4o (일반 요약)' : ' → o1 (deep analysis) or GPT-4o (general summarization)'}
        </li>
      </ul>

      <h3>{ko ? '비용 대비 성능 분석' : 'Cost-Performance Analysis'}</h3>
      <p>
        {ko
          ? '모델 선택에서 가장 중요한 고려 사항 중 하나는 비용 대비 성능입니다. 단순히 가장 비싼 모델이 최선의 선택은 아닙니다. 핵심은 "이 작업에 정말 고성능 모델이 필요한가?"를 판단하는 것입니다.'
          : 'One of the most important considerations in model selection is cost-performance ratio. The most expensive model isn\'t always the best choice. The key is determining "Does this task really need a high-performance model?"'}
      </p>
      <ul>
        <li>
          <strong>{ko ? '고성능이 반드시 필요한 경우' : 'When High Performance is Essential'}</strong>
          {ko
            ? ' - 법률 문서 분석, 의학적 판단 보조, 복잡한 금융 모델링 등에서는 GPT-4o 또는 o1을 사용하세요. 비용보다 정확성이 중요합니다.'
            : ' - For legal document analysis, medical decision support, complex financial modeling, use GPT-4o or o1. Accuracy matters more than cost.'}
        </li>
        <li>
          <strong>{ko ? '적정 성능으로 충분한 경우' : 'When Adequate Performance Suffices'}</strong>
          {ko
            ? ' - 고객 서비스 챗봇, FAQ 응답, 간단한 텍스트 생성 등에서는 GPT-4o mini로 충분합니다. 비용을 94% 이상 절감할 수 있습니다.'
            : ' - For customer service chatbots, FAQ responses, simple text generation, GPT-4o mini is sufficient. You can save over 94% on costs.'}
        </li>
        <li>
          <strong>{ko ? '하이브리드 접근' : 'Hybrid Approach'}</strong>
          {ko
            ? ' - 라우터 패턴을 사용하여 요청의 복잡도에 따라 다른 모델로 분기하세요. 간단한 요청의 80%를 GPT-4o mini로 처리하면 전체 비용을 70% 이상 절감 가능합니다.'
            : ' - Use a router pattern to route requests to different models based on complexity. Processing 80% of simple requests with GPT-4o mini can reduce total costs by over 70%.'}
        </li>
      </ul>

      <h3>{ko ? '의사결정 트리' : 'Decision Tree'}</h3>
      <p>
        {ko
          ? '모델 선택이 어려울 때는 다음 의사결정 트리를 따라가 보세요:'
          : 'When model selection is difficult, follow this decision tree:'}
      </p>
      <ol>
        <li>
          <strong>{ko ? '복잡한 추론이 필요한가?' : 'Is complex reasoning needed?'}</strong>
          <ul>
            <li>
              {ko
                ? '예 → 수학/과학/코딩 문제인가?'
                : 'Yes → Is it a math/science/coding problem?'}
              <ul>
                <li>{ko ? '예 → o1 또는 o3 사용' : 'Yes → Use o1 or o3'}</li>
                <li>{ko ? '아니오 → GPT-4o 사용' : 'No → Use GPT-4o'}</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>{ko ? '멀티모달(이미지/오디오) 처리가 필요한가?' : 'Is multimodal (image/audio) processing needed?'}</strong>
          <ul>
            <li>
              {ko
                ? '예 → 오디오가 포함되는가?'
                : 'Yes → Does it include audio?'}
              <ul>
                <li>{ko ? '예 → GPT-4o 사용' : 'Yes → Use GPT-4o'}</li>
                <li>{ko ? '아니오(이미지만) → GPT-4o 또는 GPT-4o mini 사용' : 'No (image only) → Use GPT-4o or GPT-4o mini'}</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>{ko ? '비용이 가장 중요한 요소인가?' : 'Is cost the most important factor?'}</strong>
          <ul>
            <li>{ko ? '예 → GPT-4o mini 사용' : 'Yes → Use GPT-4o mini'}</li>
            <li>{ko ? '아니오 → GPT-4o 사용' : 'No → Use GPT-4o'}</li>
          </ul>
        </li>
        <li>
          <strong>{ko ? '위 어디에도 해당하지 않는다면?' : 'None of the above?'}</strong>
          <ul>
            <li>{ko ? 'GPT-4o를 기본으로 시작하고, 필요에 따라 조정하세요.' : 'Start with GPT-4o as default and adjust as needed.'}</li>
          </ul>
        </li>
      </ol>

      <TipBox type="tip" title={ko ? '실전 조언' : 'Practical Advice'}>
        <p>
          {ko
            ? '처음에는 GPT-4o로 프로토타입을 구축한 다음, 프로덕션에서 각 기능별로 필요한 최소 성능을 갖춘 모델로 전환하는 것이 좋은 전략입니다. eval(평가) 데이터셋을 만들어 각 모델의 성능을 측정하고, 품질이 유지되는 한 더 저렴한 모델로 대체하세요.'
            : 'A good strategy is to build prototypes with GPT-4o first, then switch each feature to the minimum-performance model needed in production. Create evaluation datasets to measure each model\'s performance, and replace with cheaper models as long as quality is maintained.'}
        </p>
      </TipBox>

      <TipBox type="important" title={ko ? '최종 요약' : 'Final Summary'}>
        <p>
          {ko
            ? '모델 선택에 정답은 없습니다. 중요한 것은 요구사항을 정확히 파악하고, 성능과 비용 사이의 최적점을 찾는 것입니다. GPT-4o는 가장 안전한 기본 선택이며, 비용 절감이 필요하면 GPT-4o mini를, 깊은 추론이 필요하면 o1/o3를 고려하세요.'
            : 'There is no single right answer in model selection. What matters is accurately understanding your requirements and finding the sweet spot between performance and cost. GPT-4o is the safest default, consider GPT-4o mini for cost savings, and o1/o3 for deep reasoning needs.'}
        </p>
      </TipBox>
    </div>
  );

  /* ───────── Section map ───────── */

  const sectionRenderers = {
    overview: renderOverview,
    gpt4o: renderGpt4o,
    gpt4: renderGpt4,
    'o-series': renderOSeries,
    gpt4mini: renderGpt4Mini,
    comparison: renderComparison,
    choosing: renderChoosing,
  };

  return (
    <>
      <SEOHead
        title={ko ? 'OpenAI 모델 비교 가이드' : 'OpenAI Model Comparison Guide'}
        description={
          ko
            ? 'GPT-4o, GPT-4, o1/o3, GPT-4o mini 등 OpenAI 모델의 성능, 가격, 속도를 상세 비교합니다.'
            : 'Detailed comparison of OpenAI models including GPT-4o, GPT-4, o1/o3, and GPT-4o mini covering performance, pricing, and speed.'
        }
        path="/model-comparison"
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* Sidebar */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {ko ? '목차' : 'Contents'}
            </div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => goToSection(section.id)}
                  >
                    <i className={`fa-solid ${section.icon} nav-icon`} />
                    {ko ? section.ko : section.en}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main className="guide-content">
            <div className="guide-content-header">
              <h1>{ko ? 'OpenAI 모델 비교 가이드' : 'OpenAI Model Comparison Guide'}</h1>
              <p>
                {ko
                  ? 'GPT-4o, GPT-4 Turbo, o1/o3, GPT-4o mini 등 주요 OpenAI 모델의 성능, 가격, 속도, 활용 시나리오를 상세히 비교하고, 프로젝트에 최적의 모델을 선택하는 방법을 알아봅니다.'
                  : 'Compare performance, pricing, speed, and use cases of major OpenAI models including GPT-4o, GPT-4 Turbo, o1/o3, and GPT-4o mini, and learn how to choose the optimal model for your project.'}
              </p>
            </div>

            {sectionRenderers[activeSection]?.()}

            {/* Section Navigation */}
            <div className="guide-section-nav">
              <button onClick={goPrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                {currentIndex > 0
                  ? ko
                    ? SECTIONS[currentIndex - 1].ko
                    : SECTIONS[currentIndex - 1].en
                  : ko
                    ? '이전'
                    : 'Previous'}
              </button>
              <button
                onClick={goNext}
                disabled={currentIndex === SECTIONS.length - 1}
              >
                {currentIndex < SECTIONS.length - 1
                  ? ko
                    ? SECTIONS[currentIndex + 1].ko
                    : SECTIONS[currentIndex + 1].en
                  : ko
                    ? '다음'
                    : 'Next'}
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
