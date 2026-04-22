import{u,j as e}from"./index-BDnkTbfJ.js";import{b as m}from"./vendor-C9mfkM5v.js";import{S as g}from"./SEOHead-owWsmNU-.js";import{C as i}from"./CodeBlock-BwKqdOtn.js";import{T as r}from"./TipBox-pxhbprOG.js";import"./supabase-BiHzSKx7.js";const n=[{id:"basics",icon:"fa-book",ko:"프롬프트 기본 원칙",en:"Basic Principles"},{id:"role",icon:"fa-user-tag",ko:"역할 부여 (Role)",en:"Role Assignment"},{id:"cot",icon:"fa-brain",ko:"단계별 사고 (CoT)",en:"Chain of Thought"},{id:"fewshot",icon:"fa-list-check",ko:"Few-shot 프롬프팅",en:"Few-shot Prompting"},{id:"chaining",icon:"fa-link",ko:"프롬프트 체이닝",en:"Prompt Chaining"},{id:"advanced",icon:"fa-rocket",ko:"고급 기법",en:"Advanced Techniques"},{id:"templates",icon:"fa-file-lines",ko:"실전 템플릿",en:"Practical Templates"}];function S(){const{language:c}=u(),[a,p]=m.useState("basics"),t=c==="ko",s=n.findIndex(o=>o.id===a),l=o=>{p(o),window.scrollTo({top:0,behavior:"smooth"})},d=()=>{s>0&&l(n[s-1].id)},h=()=>{s<n.length-1&&l(n[s+1].id)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:t?"프롬프트 엔지니어링 가이드":"Prompt Engineering Guide",description:t?"ChatGPT 프롬프트 엔지니어링의 모든 것 - 기본 원칙부터 고급 기법까지 체계적으로 배우세요.":"Everything about ChatGPT prompt engineering - learn systematically from basic principles to advanced techniques.",path:"/prompt-engineering"}),e.jsx("div",{className:"guide-page",children:e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:t?"프롬프트 엔지니어링":"Prompt Engineering"}),e.jsx("ul",{className:"guide-nav",children:n.map(o=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${a===o.id?"active":""}`,onClick:()=>l(o.id),children:[e.jsx("i",{className:`fa-solid ${o.icon} nav-icon`}),t?o.ko:o.en]})},o.id))})]}),e.jsxs("main",{className:"guide-content",children:[e.jsxs("div",{className:"guide-content-header",children:[e.jsx("h1",{children:t?"ChatGPT 프롬프트 엔지니어링 완벽 가이드":"Complete Guide to ChatGPT Prompt Engineering"}),e.jsx("p",{children:t?"AI와 효과적으로 소통하는 기술, 프롬프트 엔지니어링의 핵심 원칙과 실전 기법을 체계적으로 학습합니다. 기본 원칙부터 고급 테크닉, 실무 템플릿까지 모두 다룹니다.":"Learn the art of communicating effectively with AI. This guide covers core principles and practical techniques of prompt engineering, from basics to advanced methods and real-world templates."})]}),a==="basics"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"프롬프트 기본 원칙":"Basic Principles"}),e.jsx("h3",{children:t?"1. 명확성 (Clarity)":"1. Clarity"}),e.jsx("p",{children:t?"프롬프트 엔지니어링에서 가장 중요한 원칙은 명확성입니다. ChatGPT는 사용자가 입력한 텍스트를 기반으로 응답을 생성하므로, 모호하거나 불분명한 지시는 원하지 않는 결과를 초래합니다. 질문이나 지시를 작성할 때는 누가, 무엇을, 어떻게, 왜 해야 하는지를 구체적으로 명시해야 합니다.":"The most important principle in prompt engineering is clarity. ChatGPT generates responses based on user input text, so ambiguous or unclear instructions lead to undesired results."}),e.jsx(i,{language:"text",code:t?`# 나쁜 예시 (모호한 프롬프트)
마케팅에 대해 알려줘.

# 좋은 예시 (명확한 프롬프트)
B2B SaaS 스타트업을 위한 콘텐츠 마케팅 전략을 5가지 제안해줘.
각 전략에 대해 다음을 포함해줘:
- 전략 이름
- 구체적인 실행 방법
- 예상 비용 범위
- 기대 효과 (3개월 기준)`:`# Bad Example (Vague prompt)
Tell me about marketing.

# Good Example (Clear prompt)
Suggest 5 content marketing strategies for a B2B SaaS startup.
For each strategy, include:
- Strategy name
- Specific implementation steps
- Estimated cost range
- Expected results (3-month basis)`}),e.jsx("h3",{children:t?"2. 구체성 (Specificity)":"2. Specificity"}),e.jsx("p",{children:t?'구체적인 프롬프트는 AI가 정확히 어떤 형태의 응답을 생성해야 하는지 이해하는 데 도움을 줍니다. 원하는 길이, 형식, 대상 독자, 톤앤매너 등을 지정하면 훨씬 더 유용한 결과를 얻을 수 있습니다. "자세히 알려줘"보다는 "500자 이내로 초등학생도 이해할 수 있게 설명해줘"가 훨씬 효과적입니다.':"Specific prompts help the AI understand exactly what type of response to generate. Specifying desired length, format, target audience, and tone leads to much more useful results."}),e.jsx(i,{language:"text",code:t?`# 구체적인 프롬프트 작성법
다음 조건에 맞게 블로그 글을 작성해줘:
- 주제: "초보자를 위한 Python 학습 로드맵"
- 분량: 2000자 내외
- 대상 독자: 프로그래밍 경험이 없는 대학생
- 톤: 친근하고 격려하는 어조
- 구성: 서론, 본론(4단계 로드맵), 결론
- 각 단계마다 추천 학습 자료 1개씩 포함`:`# Writing Specific Prompts
Write a blog post with these conditions:
- Topic: "Python Learning Roadmap for Beginners"
- Length: around 2000 characters
- Audience: college students with no programming experience
- Tone: friendly and encouraging
- Structure: intro, body (4-step roadmap), conclusion
- Include 1 recommended resource per step`}),e.jsx("h3",{children:t?"3. 맥락 제공 (Context)":"3. Providing Context"}),e.jsx("p",{children:t?"ChatGPT는 대화의 맥락을 이해할 수 있지만, 충분한 배경 정보를 제공하지 않으면 일반적이고 평범한 답변을 생성합니다. 현재 상황, 이전에 시도한 것, 최종 목표 등의 맥락을 함께 전달하면 훨씬 맞춤화된 응답을 받을 수 있습니다. 특히 전문적인 분야의 질문일수록 맥락 제공이 중요합니다.":"ChatGPT can understand conversation context, but without sufficient background information, it generates generic answers. Providing context like current situation, previous attempts, and end goals leads to much more tailored responses."}),e.jsx(i,{language:"text",code:t?`# 맥락을 포함한 프롬프트
배경: 나는 3년차 프론트엔드 개발자이고, React를 주로 사용합니다.
현재 상황: 팀에서 상태 관리 라이브러리를 Redux에서 다른 것으로
교체하려고 논의 중입니다.
팀 규모: 5명의 프론트엔드 개발자
프로젝트 규모: 중대형 (100+ 컴포넌트)

위 상황에서 Redux를 대체할 수 있는 상태 관리 솔루션을
3가지 추천하고, 각각의 마이그레이션 난이도와
학습 곡선을 비교해줘.`:`# Prompt with Context
Background: I'm a 3-year frontend developer, primarily using React.
Current situation: Our team is discussing replacing Redux
with another state management library.
Team size: 5 frontend developers
Project scale: Medium-large (100+ components)

Given this situation, recommend 3 state management solutions
that can replace Redux, and compare the migration difficulty
and learning curve for each.`}),e.jsx("h3",{children:t?"4. 출력 형식 지정 (Output Format)":"4. Output Format Specification"}),e.jsx("p",{children:t?"원하는 출력 형식을 명시적으로 지정하면 결과의 활용도가 크게 높아집니다. 표, 목록, JSON, 마크다운 등 구체적인 형식을 요청할 수 있으며, 이렇게 하면 후속 작업에 바로 활용할 수 있는 형태의 결과물을 얻을 수 있습니다. 특히 개발자라면 JSON이나 코드 형태로 응답을 요청하는 것이 매우 유용합니다.":"Explicitly specifying the desired output format greatly increases the usefulness of results. You can request specific formats like tables, lists, JSON, or markdown, getting results ready for immediate use in follow-up tasks."}),e.jsx(i,{language:"text",code:t?`# 출력 형식 지정 예시
한국의 주요 IT 기업 5곳을 다음 JSON 형식으로 정리해줘:

[
  {
    "company": "회사명",
    "founded": "설립연도",
    "mainProduct": "주력 제품/서비스",
    "employees": "직원 수 (대략)",
    "techStack": ["주요 기술 스택"]
  }
]

추가 조건:
- 시가총액 기준 상위 5곳
- techStack은 공개된 정보 기반으로 3개 이상 포함`:`# Output Format Example
List the top 5 IT companies in Korea in this JSON format:

[
  {
    "company": "Company Name",
    "founded": "Year Founded",
    "mainProduct": "Main Product/Service",
    "employees": "Approximate headcount",
    "techStack": ["Key technologies"]
  }
]

Additional conditions:
- Top 5 by market capitalization
- Include 3+ items in techStack based on public info`}),e.jsx(r,{type:"tip",title:t?"기본 원칙 요약":"Summary of Basic Principles",children:e.jsx("p",{children:t?"좋은 프롬프트의 4가지 핵심 요소를 기억하세요: (1) 명확한 지시, (2) 구체적인 조건, (3) 충분한 맥락, (4) 원하는 출력 형식. 이 네 가지를 모두 포함하면 ChatGPT에서 훨씬 더 정확하고 유용한 결과를 얻을 수 있습니다.":"Remember the 4 key elements of good prompts: (1) Clear instructions, (2) Specific conditions, (3) Sufficient context, (4) Desired output format. Including all four yields much more accurate and useful results from ChatGPT."})}),e.jsx("h3",{children:t?"5. 제약 조건 설정 (Constraints)":"5. Setting Constraints"}),e.jsx("p",{children:t?'원하지 않는 내용을 명시적으로 제외하는 것도 중요한 기법입니다. "~하지 마세요", "~를 제외하고" 등의 제약 조건을 추가하면 AI가 불필요한 내용을 생성하는 것을 방지할 수 있습니다. 또한 응답의 범위를 제한하여 더 집중된 결과를 얻을 수 있습니다.':'Explicitly excluding unwanted content is also an important technique. Adding constraints like "do not..." or "exclude..." prevents the AI from generating unnecessary content and helps focus the results.'}),e.jsx(i,{language:"text",code:t?`# 제약 조건 활용 예시
React 컴포넌트 설계 패턴을 설명해줘.

제약 조건:
- 클래스 컴포넌트는 제외하고 함수형 컴포넌트만 다뤄줘
- TypeScript 기반으로 예시 코드를 작성해줘
- 각 패턴마다 "언제 사용하면 좋은지"를 반드시 포함해줘
- 이론 설명은 최소화하고 실용적인 코드 위주로 작성해줘
- 총 5가지 패턴으로 제한해줘`:`# Constraint Example
Explain React component design patterns.

Constraints:
- Only cover functional components, exclude class components
- Write example code in TypeScript
- Include "when to use" for each pattern
- Minimize theory, focus on practical code
- Limit to 5 patterns total`})]}),a==="role"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"역할 부여 (Role Assignment)":"Role Assignment"}),e.jsx("h3",{children:t?"역할 부여란?":"What is Role Assignment?"}),e.jsx("p",{children:t?'역할 부여(Role Prompting)는 ChatGPT에게 특정 전문가나 캐릭터의 역할을 부여하여, 해당 관점에서 응답하도록 유도하는 기법입니다. "당신은 ~입니다"라는 패턴을 사용하면, AI가 해당 역할에 적합한 전문 지식, 어조, 관점을 활용하여 더 전문적이고 일관된 응답을 생성합니다. 이 기법은 프롬프트 엔지니어링에서 가장 널리 사용되는 기법 중 하나입니다.':'Role Prompting is a technique where you assign ChatGPT a specific expert role or character persona, guiding it to respond from that perspective. Using the "You are..." pattern, the AI leverages specialized knowledge, tone, and viewpoint appropriate for that role.'}),e.jsx("h3",{children:t?"기본 역할 부여 패턴":"Basic Role Assignment Pattern"}),e.jsx("p",{children:t?'가장 기본적인 역할 부여는 "당신은 [전문가 유형]입니다"로 시작합니다. 역할을 구체적으로 정의할수록 응답의 품질이 높아집니다. 단순히 "전문가"라고 하기보다는 경력, 전문 분야, 특기 등을 함께 명시하면 더 좋은 결과를 얻을 수 있습니다.':'The most basic role assignment starts with "You are a [expert type]." The more specifically you define the role, the higher the quality of responses. Rather than simply saying "expert," specifying experience, specialization, and strengths yields better results.'}),e.jsx(i,{language:"text",code:t?`# 기본 역할 부여
당신은 10년 경력의 시니어 백엔드 개발자입니다.
대규모 트래픽을 처리하는 시스템 설계에 전문성을 가지고 있으며,
AWS 인프라와 MSA(마이크로서비스 아키텍처)에 깊은 경험이 있습니다.

일일 활성 사용자(DAU) 100만 명 규모의 소셜 미디어 앱의
뉴스피드 시스템을 설계해주세요.

다음을 포함해주세요:
1. 전체 시스템 아키텍처
2. 데이터베이스 설계 (Push vs Pull 모델 비교)
3. 캐싱 전략
4. 트래픽 급증 시 대응 방안`:`# Basic Role Assignment
You are a senior backend developer with 10 years of experience.
You specialize in designing systems that handle large-scale traffic,
with deep experience in AWS infrastructure and MSA.

Design a newsfeed system for a social media app
with 1 million DAU.

Include:
1. Overall system architecture
2. Database design (Push vs Pull model comparison)
3. Caching strategy
4. Surge traffic handling plan`}),e.jsx("h3",{children:t?"복합 역할 부여":"Compound Role Assignment"}),e.jsx("p",{children:t?'때로는 여러 전문 분야를 결합한 복합 역할을 부여하면 더 풍부한 관점의 응답을 얻을 수 있습니다. 예를 들어 "기술과 비즈니스 모두 이해하는 CTO"나 "UX와 심리학을 결합한 디자이너" 같은 역할을 부여하면, 단일 관점보다 더 포괄적인 답변을 생성합니다.':'Sometimes assigning compound roles that combine multiple specializations yields richer perspectives. For example, assigning "a CTO who understands both tech and business" produces more comprehensive answers than a single-perspective role.'}),e.jsx(i,{language:"text",code:t?`# 복합 역할 부여 예시
당신은 기술과 비즈니스 양쪽 모두에 깊은 이해를 가진
스타트업 CTO입니다. 이전에 두 번의 성공적인 Exit 경험이 있으며,
현재는 AI 기반 B2B SaaS 회사를 운영하고 있습니다.

기술적 관점과 비즈니스 관점을 모두 고려하여,
AI 스타트업의 MVP 개발 전략을 조언해주세요.

포함할 내용:
- 기술 스택 선정 기준 (속도 vs 확장성 트레이드오프)
- 개발팀 구성 (초기 3-5명 기준)
- 6개월 로드맵
- 투자자에게 어필할 수 있는 기술적 차별점 전략`:`# Compound Role Example
You are a startup CTO with deep understanding of both
technology and business. You have two successful exits,
and currently run an AI-based B2B SaaS company.

Considering both technical and business perspectives,
advise on MVP development strategy for an AI startup.

Include:
- Tech stack selection criteria (speed vs scalability tradeoff)
- Team composition (initial 3-5 people)
- 6-month roadmap
- Technical differentiation strategy to appeal to investors`}),e.jsx("h3",{children:t?"페르소나 설정":"Persona Configuration"}),e.jsx("p",{children:t?"단순한 역할 부여를 넘어서, 성격, 커뮤니케이션 스타일, 가치관 등을 포함한 상세한 페르소나를 설정할 수 있습니다. 이는 특히 콘텐츠 생성, 교육, 코칭 등의 시나리오에서 매우 효과적입니다. 페르소나가 구체적일수록 일관성 있고 개성 있는 응답을 얻을 수 있습니다.":"Beyond simple role assignment, you can set up detailed personas including personality, communication style, and values. This is especially effective for content creation, education, and coaching scenarios."}),e.jsx(i,{language:"text",code:t?`# 상세 페르소나 설정
당신은 "코드 멘토 김선생"입니다.

페르소나 설정:
- 20년 경력의 소프트웨어 엔지니어 출신 프로그래밍 강사
- 따뜻하고 인내심 있는 성격으로, 초보자도 절대 무시하지 않음
- 복잡한 개념을 일상적인 비유로 설명하는 것을 좋아함
- "천리길도 한 걸음부터"가 좌우명
- 코드 예시를 반드시 포함하되, 한 줄 한 줄 설명해줌
- 학습자가 실수하면 격려하면서 올바른 방향으로 안내

위 페르소나로 "JavaScript의 클로저(Closure)"를
프로그래밍을 처음 배우는 대학생에게 설명해주세요.`:`# Detailed Persona Setup
You are "Code Mentor Kim."

Persona settings:
- 20-year veteran software engineer turned programming instructor
- Warm and patient personality, never dismissive of beginners
- Loves explaining complex concepts with everyday analogies
- Motto: "Every journey begins with a single step"
- Always includes code examples with line-by-line explanations
- Encourages learners when they make mistakes

Using this persona, explain "JavaScript Closures"
to a college student who is learning programming for the first time.`}),e.jsx(r,{type:"important",title:t?"역할 부여 시 주의사항":"Role Assignment Tips",children:e.jsx("p",{children:t?"역할 부여를 할 때는 현실에 존재하는 특정 인물의 이름을 사용하기보다는, 해당 분야의 전문가 유형으로 역할을 정의하는 것이 더 효과적입니다. 또한, 너무 많은 역할을 동시에 부여하면 응답의 일관성이 떨어질 수 있으므로, 하나의 명확한 역할에 집중하세요.":"When assigning roles, defining the expert type rather than naming real individuals is more effective. Also, assigning too many roles simultaneously can reduce response consistency, so focus on one clear role."})}),e.jsx("h3",{children:t?"역할 부여 활용 시나리오":"Role Assignment Use Cases"}),e.jsx("p",{children:t?"역할 부여는 다양한 시나리오에서 활용할 수 있습니다. 코드 리뷰어, 기술 면접관, 보안 전문가, 데이터 분석가, 기술 문서 작성자 등 상황에 맞는 역할을 부여하면 해당 관점에서의 전문적인 피드백을 받을 수 있습니다.":"Role assignment can be used in various scenarios. Assigning roles like code reviewer, tech interviewer, security expert, data analyst, or technical writer provides specialized feedback from that perspective."}),e.jsx(i,{language:"text",code:t?`# 코드 리뷰어 역할
당신은 엄격하지만 건설적인 시니어 코드 리뷰어입니다.
코드의 품질, 성능, 보안, 유지보수성을 모두 평가합니다.

다음 코드를 리뷰해주세요:
[코드 붙여넣기]

리뷰 형식:
1. 전체 요약 (한 줄)
2. 잘한 점 (Good)
3. 개선 필요 (Needs Improvement)
4. 보안 이슈 (Security)
5. 제안 사항 (Suggestions)
6. 수정된 코드 예시`:`# Code Reviewer Role
You are a strict but constructive senior code reviewer.
You evaluate code quality, performance, security, and maintainability.

Review the following code:
[paste code here]

Review format:
1. Overall summary (one line)
2. Good points
3. Needs Improvement
4. Security Issues
5. Suggestions
6. Revised code example`})]}),a==="cot"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"단계별 사고 (Chain of Thought)":"Chain of Thought (CoT)"}),e.jsx("h3",{children:t?"Chain of Thought란?":"What is Chain of Thought?"}),e.jsx("p",{children:t?"Chain of Thought(CoT)는 AI에게 문제를 한 번에 답하지 말고, 단계별로 사고 과정을 거쳐 답변하도록 유도하는 기법입니다. 이 기법은 특히 수학 문제, 논리 추론, 복잡한 분석 등에서 답변의 정확도를 크게 향상시킵니다. 사람이 문제를 풀 때 중간 과정을 거치는 것처럼, AI에게도 중간 사고 단계를 명시하도록 요청하면 더 정확한 결과를 얻을 수 있습니다.":"Chain of Thought (CoT) is a technique that guides the AI to answer step by step rather than all at once. This technique significantly improves accuracy, especially for math problems, logical reasoning, and complex analysis. Just as humans work through intermediate steps, asking the AI to show its reasoning process produces more accurate results."}),e.jsx("h3",{children:t?"기본 CoT 패턴":"Basic CoT Pattern"}),e.jsx("p",{children:t?`가장 간단한 CoT 패턴은 "단계별로 생각해주세요"(Let's think step by step)를 프롬프트에 추가하는 것입니다. 이 한 문장만으로도 AI의 추론 능력이 크게 향상됩니다. 이를 "Zero-shot CoT"라고 부르며, 별도의 예시 없이 단계적 사고를 유도하는 방법입니다.`:`The simplest CoT pattern is adding "Let's think step by step" to your prompt. This single phrase significantly improves AI reasoning ability. This is called "Zero-shot CoT" - inducing step-by-step thinking without providing examples.`}),e.jsx(i,{language:"text",code:t?`# Zero-shot CoT 예시
문제: 한 상점에서 사과를 개당 800원에 구매하여
개당 1,200원에 판매합니다. 하루에 평균 150개를 판매하고,
월 임대료가 200만원, 직원 급여가 300만원,
기타 운영비가 100만원입니다.
이 상점의 월 순이익은 얼마인가요? (한 달 = 30일)

단계별로 생각해주세요.

--- ChatGPT의 사고 과정 ---
1단계: 개당 이익 계산
  판매가 - 구매가 = 1,200 - 800 = 400원/개

2단계: 일일 이익 계산
  400원 x 150개 = 60,000원/일

3단계: 월 매출 이익 계산
  60,000원 x 30일 = 1,800,000원/월

4단계: 월 총 비용 계산
  임대료 + 급여 + 운영비 = 200만 + 300만 + 100만 = 600만원

5단계: 월 순이익 계산
  매출 이익 - 총 비용 = 180만 - 600만 = -420만원

결론: 이 상점은 월 420만원의 적자를 보고 있습니다.`:`# Zero-shot CoT Example
Problem: A store buys apples at $0.80 each and sells at $1.20 each.
Average daily sales: 150 apples.
Monthly rent: $2,000, employee salary: $3,000,
other operating costs: $1,000.
What is the store's monthly net profit? (1 month = 30 days)

Let's think step by step.

--- ChatGPT's thinking process ---
Step 1: Profit per apple
  $1.20 - $0.80 = $0.40/apple

Step 2: Daily profit
  $0.40 x 150 = $60/day

Step 3: Monthly sales profit
  $60 x 30 = $1,800/month

Step 4: Monthly total costs
  Rent + Salary + Operations = $2,000 + $3,000 + $1,000 = $6,000

Step 5: Monthly net profit
  $1,800 - $6,000 = -$4,200

Conclusion: The store is running at a $4,200 monthly loss.`}),e.jsx("h3",{children:t?"구조화된 CoT":"Structured CoT"}),e.jsx("p",{children:t?"더 복잡한 문제에서는 사고의 단계를 미리 구조화하여 AI에게 제시하는 것이 효과적입니다. 각 단계에서 무엇을 분석하고 어떤 결론을 도출해야 하는지 명시하면, AI가 체계적으로 사고하여 더 정확한 결과를 만들어 냅니다.":"For more complex problems, it is effective to pre-structure the thinking steps and present them to the AI. Specifying what to analyze and what conclusions to draw at each step enables systematic thinking."}),e.jsx(i,{language:"text",code:t?`# 구조화된 CoT 프롬프트
다음 비즈니스 시나리오를 분석해주세요:

"우리 회사는 B2C 이커머스 플랫폼을 운영하고 있으며,
최근 3개월간 이탈률이 15%에서 25%로 증가했습니다."

다음 단계를 순서대로 따라 분석해주세요:

1단계 - 현상 파악: 주어진 데이터에서 핵심 문제를 정의하세요.
2단계 - 원인 분석: 가능한 원인을 최소 5가지 도출하고,
  각 원인의 가능성을 상/중/하로 평가하세요.
3단계 - 데이터 검증: 각 원인을 검증하기 위해
  어떤 데이터를 확인해야 하는지 제안하세요.
4단계 - 해결 방안: 상위 3가지 원인에 대한
  단기(1주) / 중기(1개월) / 장기(3개월) 해결 방안을 제시하세요.
5단계 - 우선순위: 영향도와 실행 용이성을 기준으로
  해결 방안의 우선순위를 매기세요.`:`# Structured CoT Prompt
Analyze the following business scenario:

"Our company operates a B2C e-commerce platform.
Churn rate increased from 15% to 25% over the past 3 months."

Follow these steps in order:

Step 1 - Identify the Issue: Define the core problem from the data.
Step 2 - Root Cause Analysis: Identify at least 5 possible causes
  and rate each as High/Medium/Low probability.
Step 3 - Data Verification: Suggest what data to check
  to verify each cause.
Step 4 - Solutions: For the top 3 causes, propose
  short-term (1 week) / mid-term (1 month) / long-term (3 month) solutions.
Step 5 - Prioritization: Rank solutions by impact and
  ease of implementation.`}),e.jsx("h3",{children:t?"복잡한 문제 분해":"Complex Problem Decomposition"}),e.jsx("p",{children:t?'매우 복잡한 문제는 하위 문제로 분해하여 각각을 CoT로 해결한 후 종합하는 방식이 효과적입니다. 이를 "문제 분해(Problem Decomposition)"라고 하며, CoT와 결합하면 강력한 문제 해결 도구가 됩니다.':'Very complex problems are effectively solved by decomposing them into sub-problems, solving each with CoT, then synthesizing. This "Problem Decomposition" combined with CoT becomes a powerful problem-solving approach.'}),e.jsx(i,{language:"text",code:t?`# 문제 분해 + CoT
다음 시스템 설계 문제를 풀어주세요:
"실시간 채팅 애플리케이션을 설계하세요."

이 문제를 다음 하위 문제로 분해하여
각각 단계별로 사고한 후 답변해주세요:

하위 문제 1: 메시지 전송 - WebSocket vs SSE 선택과 이유
하위 문제 2: 메시지 저장 - DB 선택과 스키마 설계
하위 문제 3: 읽음 확인 - 실시간 읽음 상태 동기화 방법
하위 문제 4: 그룹 채팅 - 1:1에서 N:N으로 확장하는 전략
하위 문제 5: 확장성 - 사용자 증가에 따른 수평 확장 방안

각 하위 문제를 해결한 후, 전체 아키텍처를 종합해주세요.`:`# Decomposition + CoT
Solve this system design problem:
"Design a real-time chat application."

Decompose into these sub-problems and
think through each step by step:

Sub-problem 1: Message delivery - WebSocket vs SSE choice and rationale
Sub-problem 2: Message storage - DB selection and schema design
Sub-problem 3: Read receipts - Real-time read status sync method
Sub-problem 4: Group chat - Strategy to scale from 1:1 to N:N
Sub-problem 5: Scalability - Horizontal scaling for user growth

After solving each sub-problem, synthesize the overall architecture.`}),e.jsx(r,{type:"tip",title:t?"CoT 활용 팁":"CoT Usage Tips",children:e.jsx("p",{children:t?'CoT는 답이 명확한 단순 질문보다는 추론이 필요한 복잡한 질문에서 더 효과적입니다. 또한 AI가 잘못된 답을 줄 때, "왜 그렇게 생각했는지 단계별로 설명해주세요"라고 요청하면 오류를 발견하고 수정하는 데 도움이 됩니다.':'CoT is more effective for complex questions requiring reasoning than simple factual queries. When the AI gives a wrong answer, asking "Explain your reasoning step by step" helps identify and correct errors.'})})]}),a==="fewshot"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"Few-shot 프롬프팅":"Few-shot Prompting"}),e.jsx("h3",{children:t?"Few-shot 프롬프팅이란?":"What is Few-shot Prompting?"}),e.jsx("p",{children:t?"Few-shot 프롬프팅은 원하는 응답의 예시를 몇 가지 제공하여 AI가 패턴을 학습하고 동일한 형식으로 응답하도록 유도하는 기법입니다. 예시의 개수에 따라 Zero-shot(예시 없음), One-shot(예시 1개), Few-shot(예시 2개 이상)으로 구분됩니다. 이 기법은 특히 특정 형식이나 스타일의 출력이 필요할 때 매우 효과적입니다.":"Few-shot prompting is a technique where you provide several examples of desired responses, guiding the AI to learn the pattern and respond in the same format. Classified by number of examples: Zero-shot (no examples), One-shot (1 example), Few-shot (2+ examples). This technique is especially effective when you need output in a specific format or style."}),e.jsx("h3",{children:t?"Zero-shot vs One-shot vs Few-shot 비교":"Zero-shot vs One-shot vs Few-shot"}),e.jsx("p",{children:t?"세 가지 방식의 차이를 실제 예시로 비교해보겠습니다. 동일한 작업(감성 분석)을 각 방식으로 수행했을 때 결과가 어떻게 달라지는지 확인할 수 있습니다. 일반적으로 예시가 많을수록 원하는 형식에 가까운 결과를 얻지만, 토큰 사용량이 증가하므로 적절한 균형이 필요합니다.":"Let's compare the three approaches with real examples. You can see how results differ when performing the same task (sentiment analysis) with each method. Generally, more examples lead to closer format matching, but token usage increases, so balance is needed."}),e.jsx(i,{language:"text",code:t?`# Zero-shot (예시 없음)
다음 리뷰의 감성을 분석해주세요:
"배송은 빨랐지만 포장이 엉망이었어요."

# One-shot (예시 1개)
다음 리뷰의 감성을 분석해주세요.

예시:
리뷰: "정말 훌륭한 제품입니다! 강력 추천합니다."
분석:
  - 감성: 긍정 (95%)
  - 키워드: 훌륭한, 강력 추천
  - 요약: 제품에 대한 높은 만족도 표현

분석할 리뷰: "배송은 빨랐지만 포장이 엉망이었어요."

# Few-shot (예시 여러 개)
다음 리뷰의 감성을 분석해주세요.

예시 1:
리뷰: "정말 훌륭한 제품입니다! 강력 추천합니다."
분석:
  - 감성: 긍정 (95%)
  - 키워드: 훌륭한, 강력 추천
  - 요약: 제품에 대한 높은 만족도 표현

예시 2:
리뷰: "최악의 경험이었습니다. 다시는 안 삽니다."
분석:
  - 감성: 부정 (98%)
  - 키워드: 최악, 다시는 안 삼
  - 요약: 강한 불만과 재구매 거부 의사

예시 3:
리뷰: "가격 대비 괜찮아요. 특별하진 않지만 쓸만합니다."
분석:
  - 감성: 중립 (60% 긍정)
  - 키워드: 가격 대비, 쓸만함
  - 요약: 보통 수준의 만족도, 가성비 인정

분석할 리뷰: "배송은 빨랐지만 포장이 엉망이었어요."`:`# Zero-shot (No examples)
Analyze the sentiment of this review:
"Shipping was fast but the packaging was terrible."

# One-shot (1 example)
Analyze the sentiment of the following review.

Example:
Review: "Absolutely amazing product! Highly recommend."
Analysis:
  - Sentiment: Positive (95%)
  - Keywords: amazing, highly recommend
  - Summary: High satisfaction with the product

Review to analyze: "Shipping was fast but the packaging was terrible."

# Few-shot (Multiple examples)
Analyze the sentiment of the following review.

Example 1:
Review: "Absolutely amazing product! Highly recommend."
Analysis:
  - Sentiment: Positive (95%)
  - Keywords: amazing, highly recommend
  - Summary: High satisfaction with the product

Example 2:
Review: "Worst experience ever. Never buying again."
Analysis:
  - Sentiment: Negative (98%)
  - Keywords: worst, never buying again
  - Summary: Strong dissatisfaction and refusal to repurchase

Example 3:
Review: "Decent for the price. Nothing special but usable."
Analysis:
  - Sentiment: Neutral (60% positive)
  - Keywords: decent, usable
  - Summary: Average satisfaction, value acknowledged

Review to analyze: "Shipping was fast but the packaging was terrible."`}),e.jsx("h3",{children:t?"Few-shot으로 일관된 형식 만들기":"Creating Consistent Formats with Few-shot"}),e.jsx("p",{children:t?'Few-shot의 가장 큰 장점은 복잡하거나 독특한 출력 형식을 정확하게 재현할 수 있다는 점입니다. 예시를 통해 원하는 형식의 "템플릿"을 AI에게 학습시킬 수 있으며, 이를 통해 매번 일관된 형식의 결과물을 얻을 수 있습니다.':'The biggest advantage of few-shot is the ability to precisely reproduce complex or unique output formats. Examples serve as "templates" for the AI to learn from, ensuring consistent format output every time.'}),e.jsx(i,{language:"text",code:t?`# 일관된 기술 블로그 요약 형식
다음 형식으로 기술 블로그 글을 요약해주세요.

예시 입력: "React 18에서 도입된 Concurrent Features..."
예시 출력:
---
제목: React 18 Concurrent Features 정리
난이도: 중급
읽는 시간: 5분
핵심 포인트:
  - Concurrent Mode가 자동 배칭을 지원
  - Suspense의 서버 사이드 지원 확대
  - useTransition으로 UX 개선 가능
한 줄 요약: React 18은 동시성 기능으로 사용자 경험을
  크게 개선하는 것에 초점을 맞춘 업데이트다.
추천 대상: React를 이미 사용 중인 프론트엔드 개발자
---

이제 다음 글을 위 형식으로 요약해주세요:
[블로그 글 붙여넣기]`:`# Consistent Tech Blog Summary Format
Summarize tech blog posts in this format.

Example input: "React 18 introduced Concurrent Features..."
Example output:
---
Title: React 18 Concurrent Features Summary
Difficulty: Intermediate
Read time: 5 min
Key points:
  - Concurrent Mode supports automatic batching
  - Expanded server-side Suspense support
  - useTransition enables UX improvements
One-line summary: React 18 focuses on improving user
  experience through concurrency features.
Recommended for: Frontend developers already using React
---

Now summarize this post in the format above:
[paste blog post here]`}),e.jsx("h3",{children:t?"효과적인 예시 작성법":"Writing Effective Examples"}),e.jsx("p",{children:t?"Few-shot 예시를 작성할 때는 몇 가지 원칙을 지키면 더 좋은 결과를 얻을 수 있습니다. 첫째, 예시는 다양한 케이스를 커버해야 합니다 (긍정/부정/중립 등). 둘째, 예시의 형식이 완전히 일관적이어야 합니다. 셋째, 예시의 품질이 원하는 응답 수준을 대표해야 합니다. 예시가 잘못되면 AI도 잘못된 패턴을 학습하게 됩니다.":"Following a few principles when writing few-shot examples yields better results. First, examples should cover diverse cases (positive/negative/neutral). Second, example format must be completely consistent. Third, example quality should represent the desired response level. Bad examples teach bad patterns."}),e.jsx(r,{type:"warning",title:t?"Few-shot 주의사항":"Few-shot Cautions",children:e.jsx("p",{children:t?"예시가 너무 많으면 토큰을 과도하게 소비하고, 오히려 AI가 예시에 과적합(overfitting)되어 유연성이 떨어질 수 있습니다. 보통 2-5개의 다양한 예시가 최적입니다. 또한 예시에 오류가 있으면 AI가 그 오류를 학습하므로, 예시의 품질을 반드시 검증하세요.":"Too many examples consume excessive tokens and can cause overfitting, reducing flexibility. Usually 2-5 diverse examples are optimal. Also, errors in examples will be learned by the AI, so always verify example quality."})}),e.jsx(i,{language:"text",code:t?`# 데이터 변환에 Few-shot 활용하기
다음 예시처럼 자연어 설명을 SQL 쿼리로 변환해주세요.

예시 1:
설명: "2024년에 가입한 사용자 중 서울에 사는 사람의 이름과 이메일"
SQL: SELECT name, email FROM users
     WHERE YEAR(created_at) = 2024 AND city = '서울';

예시 2:
설명: "각 카테고리별 판매량이 가장 높은 상품 3개"
SQL: SELECT category, product_name, sales_count
     FROM products
     WHERE (category, sales_count) IN (
       SELECT category, sales_count
       FROM products p2
       WHERE p2.category = products.category
       ORDER BY sales_count DESC LIMIT 3
     )
     ORDER BY category, sales_count DESC;

변환할 설명: "지난 30일간 주문이 없는 활성 사용자의
  이름과 마지막 로그인 날짜를 최근 로그인 순으로 정렬"`:`# Using Few-shot for Data Transformation
Convert natural language descriptions to SQL like these examples.

Example 1:
Description: "Names and emails of users in Seoul who signed up in 2024"
SQL: SELECT name, email FROM users
     WHERE YEAR(created_at) = 2024 AND city = 'Seoul';

Example 2:
Description: "Top 3 products by sales in each category"
SQL: SELECT category, product_name, sales_count
     FROM products p1
     WHERE (category, sales_count) IN (
       SELECT category, sales_count
       FROM products p2
       WHERE p2.category = p1.category
       ORDER BY sales_count DESC LIMIT 3
     )
     ORDER BY category, sales_count DESC;

Convert: "Names and last login dates of active users with
  no orders in the past 30 days, sorted by most recent login"`})]}),a==="chaining"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"프롬프트 체이닝":"Prompt Chaining"}),e.jsx("h3",{children:t?"프롬프트 체이닝이란?":"What is Prompt Chaining?"}),e.jsx("p",{children:t?'프롬프트 체이닝은 복잡한 작업을 여러 개의 작은 프롬프트로 분해하고, 이전 프롬프트의 출력을 다음 프롬프트의 입력으로 사용하는 기법입니다. 하나의 거대한 프롬프트로 모든 것을 처리하려 하면 AI의 성능이 떨어지지만, 단계별로 분해하면 각 단계에서 더 높은 품질의 결과를 얻을 수 있습니다. 이는 소프트웨어 개발에서의 "관심사의 분리(Separation of Concerns)" 원칙과 유사합니다.':'Prompt chaining is a technique where you break complex tasks into multiple smaller prompts, using the output of one as input for the next. Trying to handle everything in one massive prompt degrades AI performance, but decomposing step by step yields higher quality at each stage. This is similar to the "Separation of Concerns" principle in software development.'}),e.jsx("h3",{children:t?"체이닝의 기본 구조":"Basic Chaining Structure"}),e.jsx("p",{children:t?'체이닝의 기본 패턴은 "분석 → 계획 → 실행 → 검증"입니다. 각 단계의 프롬프트가 명확한 입력과 출력을 가지며, 다음 단계로 자연스럽게 연결됩니다. 아래에서 블로그 글 작성을 예시로 4단계 체이닝을 살펴보겠습니다.':`The basic chaining pattern is "Analyze -> Plan -> Execute -> Verify." Each step has clear inputs and outputs, naturally connecting to the next stage. Below we'll look at 4-step chaining for blog post writing.`}),e.jsx(i,{language:"text",code:t?`# 1단계: 주제 분석 및 키워드 리서치
주제: "2024년 프론트엔드 개발 트렌드"

이 주제에 대해 다음을 분석해주세요:
1. 핵심 키워드 10개
2. 예상 독자층과 그들의 관심사
3. 경쟁 콘텐츠 대비 차별화 포인트 3가지
4. SEO에 유리한 부제목 후보 5개

출력 형식: 구조화된 목록`:`# Step 1: Topic Analysis & Keyword Research
Topic: "Frontend Development Trends in 2024"

Analyze the following for this topic:
1. 10 core keywords
2. Expected audience and their interests
3. 3 differentiation points vs competing content
4. 5 SEO-friendly subtitle candidates

Output format: structured list`}),e.jsx(i,{language:"text",code:t?`# 2단계: 글 구조 및 아웃라인 작성
[1단계의 출력 결과를 붙여넣기]

위 분석 결과를 바탕으로 블로그 글의 상세 아웃라인을 작성해주세요:

- 도입부: 독자의 관심을 끄는 훅
- 각 섹션의 제목과 다룰 핵심 포인트 (3-5개)
- 각 섹션의 예상 분량 (단어 수)
- 포함할 코드 예시나 다이어그램 목록
- 결론부: CTA(Call to Action) 포함`:`# Step 2: Structure & Outline
[Paste Step 1 output here]

Based on the analysis above, create a detailed blog outline:

- Introduction: Hook to grab reader attention
- Each section's title and key points (3-5)
- Estimated length per section (word count)
- List of code examples or diagrams to include
- Conclusion: Include CTA (Call to Action)`}),e.jsx(i,{language:"text",code:t?`# 3단계: 본문 작성
[2단계의 아웃라인을 붙여넣기]

위 아웃라인에 따라 블로그 글을 작성해주세요.

작성 지침:
- 전문적이지만 읽기 쉬운 어조
- 각 섹션 사이에 자연스러운 전환문 포함
- 코드 예시는 실행 가능한 수준으로 작성
- 핵심 용어는 처음 등장할 때 간단히 설명
- SEO를 고려한 자연스러운 키워드 배치`:`# Step 3: Write Content
[Paste Step 2 outline here]

Write the blog post following the outline above.

Writing guidelines:
- Professional but easy-to-read tone
- Include natural transitions between sections
- Code examples should be runnable
- Briefly explain key terms on first appearance
- Natural keyword placement for SEO`}),e.jsx(i,{language:"text",code:t?`# 4단계: 검토 및 개선
[3단계의 본문을 붙여넣기]

위 블로그 글을 다음 기준으로 검토하고 개선해주세요:

1. 기술적 정확성 검증
2. 문장 가독성 향상 (긴 문장 분리, 수동태 → 능동태)
3. SEO 최적화 확인 (키워드 밀도, 메타 설명 추천)
4. 누락된 중요 내용 보완
5. 최종 수정본 출력

또한 다음을 함께 제공해주세요:
- 추천 썸네일 이미지 설명
- SNS 공유용 한 줄 소개
- 관련 글 추천 주제 3가지`:`# Step 4: Review & Improve
[Paste Step 3 content here]

Review and improve the blog post using these criteria:

1. Technical accuracy verification
2. Readability improvement (split long sentences, passive -> active)
3. SEO optimization check (keyword density, meta description)
4. Fill in any missing important content
5. Output final revised version

Also provide:
- Recommended thumbnail image description
- One-line intro for social media sharing
- 3 related article topic suggestions`}),e.jsx("h3",{children:t?"조건부 체이닝":"Conditional Chaining"}),e.jsx("p",{children:t?'체이닝에서는 이전 단계의 결과에 따라 다음 단계의 방향을 바꿀 수도 있습니다. 이를 조건부 체이닝이라 하며, 분기점을 미리 설계하면 더 유연한 워크플로우를 만들 수 있습니다. 예를 들어, 분석 결과가 "긍정"이면 A 경로로, "부정"이면 B 경로로 진행하는 식입니다.':"In chaining, you can change the direction of the next step based on previous results. This conditional chaining allows you to design branch points for more flexible workflows."}),e.jsx(i,{language:"text",code:t?`# 조건부 체이닝 예시: 코드 품질 파이프라인

1단계: 코드를 분석하고 다음 중 하나로 분류해주세요:
  A) 리팩토링 필요 - 구조적 문제가 있음
  B) 최적화 필요 - 성능 개선 여지가 있음
  C) 양호 - 코드 품질이 충분함

[코드 붙여넣기]

---

2단계 (분류 결과에 따라):

만약 A (리팩토링 필요):
→ "SOLID 원칙에 따라 코드를 리팩토링해주세요.
   변경 전/후를 대비하여 보여주세요."

만약 B (최적화 필요):
→ "시간 복잡도와 공간 복잡도를 분석하고,
   최적화된 버전을 제안해주세요."

만약 C (양호):
→ "테스트 코드를 작성하고 엣지 케이스를
   식별해주세요."`:`# Conditional Chaining: Code Quality Pipeline

Step 1: Analyze the code and classify it as:
  A) Needs refactoring - structural issues
  B) Needs optimization - performance improvement possible
  C) Good - sufficient code quality

[paste code here]

---

Step 2 (based on classification):

If A (Needs refactoring):
-> "Refactor the code following SOLID principles.
   Show before/after comparison."

If B (Needs optimization):
-> "Analyze time and space complexity,
   suggest an optimized version."

If C (Good):
-> "Write test code and identify edge cases."`}),e.jsx(r,{type:"tip",title:t?"체이닝 효율화 팁":"Chaining Efficiency Tips",children:e.jsx("p",{children:t?'체이닝할 때는 각 단계의 출력 형식을 미리 통일하면 다음 단계에서 바로 활용하기 쉽습니다. 또한 ChatGPT의 대화 기록을 활용하면 수동으로 출력을 복사-붙여넣기 하지 않아도 자연스럽게 체이닝이 이루어집니다. "위 결과를 바탕으로..."라고 시작하면 됩니다.':`When chaining, standardizing the output format of each step makes it easier to use in the next step. Also, leveraging ChatGPT's conversation history allows natural chaining without manual copy-pasting. Just start with "Based on the above results..."`})})]}),a==="advanced"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"고급 기법":"Advanced Techniques"}),e.jsx("h3",{children:t?"메타 프롬프트 (Meta Prompting)":"Meta Prompting"}),e.jsx("p",{children:t?'메타 프롬프트는 "프롬프트를 만드는 프롬프트"입니다. AI에게 특정 작업에 최적화된 프롬프트를 설계해달라고 요청하는 기법으로, 프롬프트 엔지니어링의 자동화라고 볼 수 있습니다. 이 기법은 반복적으로 사용할 고품질 프롬프트를 만들거나, 프롬프트 작성 경험이 부족할 때 특히 유용합니다.':`Meta prompting is "prompts that create prompts." It's a technique of asking the AI to design optimized prompts for specific tasks - essentially automating prompt engineering. Useful for creating reusable high-quality prompts or when you lack prompt writing experience.`}),e.jsx(i,{language:"text",code:t?`# 메타 프롬프트 예시
당신은 프롬프트 엔지니어링 전문가입니다.

다음 작업에 최적화된 프롬프트를 설계해주세요:
- 작업: 고객 문의 이메일을 자동 분류하고 답변 초안 생성
- 분류 카테고리: 불만, 문의, 제안, 칭찬, 환불 요청
- 답변 톤: 정중하고 전문적
- 필요 정보: 분류 결과, 긴급도, 답변 초안, 에스컬레이션 필요 여부

프롬프트 설계 시 포함할 것:
1. 시스템 프롬프트 (역할 정의)
2. 사용자 프롬프트 템플릿 (변수 포함)
3. Few-shot 예시 2개
4. 출력 형식 지정
5. 엣지 케이스 처리 방법

최종 프롬프트는 바로 복사하여 사용할 수 있는 형태로
제공해주세요.`:`# Meta Prompt Example
You are a prompt engineering expert.

Design an optimized prompt for this task:
- Task: Auto-classify customer inquiry emails and draft responses
- Categories: Complaint, Inquiry, Suggestion, Praise, Refund request
- Response tone: Polite and professional
- Required info: Classification, urgency, draft reply, escalation need

Include in prompt design:
1. System prompt (role definition)
2. User prompt template (with variables)
3. 2 few-shot examples
4. Output format specification
5. Edge case handling

Provide the final prompt in a ready-to-copy format.`}),e.jsx("h3",{children:t?"자기 비판 (Self-Critique)":"Self-Critique"}),e.jsx("p",{children:t?'자기 비판 기법은 AI가 생성한 응답을 스스로 평가하고 개선하도록 요청하는 방법입니다. 첫 번째 응답을 생성한 후 "이제 위 답변을 비판적으로 검토하고 개선해주세요"라고 요청하면, AI가 자신의 오류, 누락, 편향을 식별하고 수정합니다. 이 기법은 특히 정확성이 중요한 분석이나 의사결정 지원에서 효과적입니다.':'Self-critique is a technique where you ask the AI to evaluate and improve its own response. After generating an initial response, asking "Now critically review and improve the above" makes the AI identify its own errors, omissions, and biases. Especially effective for accuracy-critical analysis and decision support.'}),e.jsx(i,{language:"text",code:t?`# 자기 비판 기법 프롬프트
다음 질문에 답변한 후, 자기 비판을 수행해주세요.

질문: "스타트업이 첫 번째 제품을 React Native로
개발하는 것이 좋을까요?"

1차 응답을 작성하세요.

그 다음, 다음 관점에서 1차 응답을 비판해주세요:
- 누락된 고려사항은 없는가?
- 편향된 주장이 있는가?
- 특정 상황에서는 다른 결론이 나올 수 있는가?
- 근거가 불충분한 주장은 없는가?
- 대안적 관점을 충분히 다뤘는가?

비판을 반영하여 개선된 최종 답변을 작성해주세요.`:`# Self-Critique Prompt
Answer the following question, then perform self-critique.

Question: "Should a startup build its first product
with React Native?"

Write your initial response.

Then, critique the initial response from these angles:
- Any missing considerations?
- Any biased arguments?
- Could different conclusions apply in specific situations?
- Any claims with insufficient evidence?
- Were alternative perspectives adequately covered?

Write an improved final answer reflecting the critique.`}),e.jsx("h3",{children:t?"트리 오브 소트 (Tree of Thoughts)":"Tree of Thoughts (ToT)"}),e.jsx("p",{children:t?"Tree of Thoughts(ToT)는 Chain of Thought를 확장한 기법으로, 하나의 사고 경로만 따르지 않고 여러 가능한 사고 경로를 동시에 탐색합니다. 각 분기점에서 여러 선택지를 검토하고, 각 선택지의 잠재력을 평가한 후 가장 유망한 경로를 선택합니다. 이 기법은 창의적 문제 해결이나 최적의 전략을 찾아야 하는 상황에서 특히 유용합니다.":"Tree of Thoughts (ToT) extends Chain of Thought by exploring multiple possible thinking paths simultaneously rather than following just one. At each branch point, it reviews multiple options, evaluates their potential, and selects the most promising path. Especially useful for creative problem-solving and finding optimal strategies."}),e.jsx(i,{language:"text",code:t?`# Tree of Thoughts 예시
문제: 우리 팀의 생산성을 50% 향상시킬 방법을 찾아주세요.

다음과 같이 Tree of Thoughts 방식으로 접근해주세요:

분기 1: 프로세스 최적화
  - 가지 1A: 애자일 스프린트 개선
  - 가지 1B: 회의 시간 축소 전략
  - 가지 1C: 자동화 도구 도입
  → 각 가지의 실현 가능성과 예상 효과를 평가

분기 2: 도구 및 기술
  - 가지 2A: AI 코딩 어시스턴트 도입
  - 가지 2B: CI/CD 파이프라인 개선
  - 가지 2C: 모니터링 및 디버깅 도구 업그레이드
  → 각 가지의 실현 가능성과 예상 효과를 평가

분기 3: 팀 문화 및 역량
  - 가지 3A: 기술 역량 교육 프로그램
  - 가지 3B: 코드 리뷰 프로세스 개선
  - 가지 3C: 지식 공유 시스템 구축
  → 각 가지의 실현 가능성과 예상 효과를 평가

각 가지를 10점 만점으로 평가하고,
상위 3개 전략을 조합한 최종 실행 계획을 제시해주세요.`:`# Tree of Thoughts Example
Problem: Find ways to improve our team's productivity by 50%.

Use the Tree of Thoughts approach:

Branch 1: Process Optimization
  - Leaf 1A: Improve agile sprints
  - Leaf 1B: Meeting time reduction strategy
  - Leaf 1C: Automation tool adoption
  -> Evaluate feasibility and expected impact of each

Branch 2: Tools & Technology
  - Leaf 2A: AI coding assistant adoption
  - Leaf 2B: CI/CD pipeline improvement
  - Leaf 2C: Monitoring and debugging tool upgrades
  -> Evaluate feasibility and expected impact of each

Branch 3: Team Culture & Skills
  - Leaf 3A: Technical skills training program
  - Leaf 3B: Code review process improvement
  - Leaf 3C: Knowledge sharing system
  -> Evaluate feasibility and expected impact of each

Rate each leaf out of 10,
then present a final action plan combining the top 3 strategies.`}),e.jsx("h3",{children:t?"반복적 개선 (Iterative Refinement)":"Iterative Refinement"}),e.jsx("p",{children:t?"반복적 개선은 AI의 출력을 여러 차례에 걸쳐 점진적으로 개선해나가는 기법입니다. 첫 번째 결과에서 부족한 부분을 식별하고, 구체적인 피드백을 제공하여 다음 버전을 생성합니다. 이 과정을 원하는 품질에 도달할 때까지 반복합니다.":"Iterative refinement is a technique of gradually improving AI output over multiple rounds. Identify shortcomings in the first result, provide specific feedback to generate the next version, and repeat until desired quality is reached."}),e.jsx(i,{language:"text",code:t?`# 반복적 개선 프롬프트 패턴

[1차 요청]
회사 소개 이메일을 작성해줘. (대략적인 조건 제시)

[2차 개선 요청]
위 이메일에서 다음을 개선해줘:
- 첫 문단을 더 임팩트 있게 수정
- 기술적 전문 용어를 줄이고 비즈니스 가치 중심으로

[3차 개선 요청]
좋아졌어. 추가로:
- CTA 버튼 문구를 3가지 버전으로 제안
- P.S. 문단에 사회적 증거(social proof) 추가
- 전체 길이를 20% 줄여줘

[4차 최종 검토]
최종본을 A/B 테스트용으로 2가지 버전으로 만들어줘:
- 버전 A: 데이터 중심 (숫자와 통계 강조)
- 버전 B: 스토리 중심 (고객 성공 사례 강조)`:`# Iterative Refinement Pattern

[1st Request]
Write a company introduction email. (rough conditions)

[2nd Refinement]
Improve the email:
- Make the first paragraph more impactful
- Reduce technical jargon, focus on business value

[3rd Refinement]
Better. Additionally:
- Suggest 3 versions of CTA button text
- Add social proof in the P.S. paragraph
- Reduce overall length by 20%

[4th Final Review]
Create 2 versions for A/B testing:
- Version A: Data-driven (emphasize numbers and stats)
- Version B: Story-driven (emphasize customer success stories)`}),e.jsx(r,{type:"tip",title:t?"고급 기법 활용 가이드":"Advanced Techniques Guide",children:e.jsx("p",{children:t?'고급 기법들은 단독으로 사용하기보다 기본 원칙과 결합하여 사용할 때 더 효과적입니다. 예를 들어 "역할 부여 + CoT + 자기 비판"을 조합하면 매우 높은 품질의 응답을 얻을 수 있습니다. 상황에 맞는 기법을 선택하고 조합하는 것이 진정한 프롬프트 엔지니어링 실력입니다.':'Advanced techniques are more effective when combined with basic principles rather than used alone. For example, combining "Role Assignment + CoT + Self-Critique" yields very high-quality responses. Selecting and combining the right techniques for each situation is true prompt engineering skill.'})})]}),a==="templates"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"실전 템플릿":"Practical Templates"}),e.jsx("p",{children:t?"아래는 실제 업무에서 바로 복사하여 사용할 수 있는 프롬프트 템플릿들입니다. 각 템플릿의 [대괄호] 안의 내용을 자신의 상황에 맞게 수정하여 사용하세요. 이 템플릿들은 앞서 배운 기본 원칙, 역할 부여, CoT, Few-shot 등의 기법을 종합적으로 활용하고 있습니다.":"Below are prompt templates ready to copy and use in real work. Modify the content in [brackets] to fit your situation. These templates comprehensively apply the techniques covered: basic principles, role assignment, CoT, few-shot, and more."}),e.jsx("h3",{children:t?"1. 코드 리뷰 템플릿":"1. Code Review Template"}),e.jsx(i,{language:"text",code:t?`# 코드 리뷰 프롬프트 템플릿

당신은 [기술스택, 예: React/TypeScript] 전문 시니어 개발자입니다.
코드 리뷰를 수행할 때 다음 기준을 적용합니다:

검토 기준:
1. 코드 품질: 가독성, 명명 규칙, 중복 코드
2. 성능: 불필요한 렌더링, 메모리 누수, 알고리즘 효율성
3. 보안: XSS, CSRF, 인젝션 등 취약점
4. 테스트 가능성: 단위 테스트 작성 용이성
5. 유지보수성: 확장 가능한 구조인지

코드:
\`\`\`
[리뷰할 코드 붙여넣기]
\`\`\`

출력 형식:
## 요약
(전반적인 코드 품질 한 줄 평가)

## 잘한 점
- (목록)

## 개선 필요
- (문제점) → (개선 방안) [심각도: 높음/중간/낮음]

## 수정 제안 코드
\`\`\`
(개선된 코드)
\`\`\``:`# Code Review Prompt Template

You are a senior developer specializing in [tech stack, e.g., React/TypeScript].
Apply these criteria when reviewing code:

Review Criteria:
1. Code Quality: Readability, naming conventions, duplication
2. Performance: Unnecessary renders, memory leaks, algorithm efficiency
3. Security: XSS, CSRF, injection vulnerabilities
4. Testability: Ease of writing unit tests
5. Maintainability: Extensible structure

Code:
\`\`\`
[paste code to review]
\`\`\`

Output format:
## Summary
(One-line overall quality assessment)

## Good Points
- (list)

## Needs Improvement
- (issue) -> (solution) [Severity: High/Medium/Low]

## Suggested Code Fix
\`\`\`
(improved code)
\`\`\``}),e.jsx("h3",{children:t?"2. 기술 문서 작성 템플릿":"2. Technical Documentation Template"}),e.jsx(i,{language:"text",code:t?`# 기술 문서 작성 프롬프트 템플릿

당신은 기술 문서 작성 전문가입니다.
다음 정보를 바탕으로 기술 문서를 작성해주세요.

문서 유형: [API 문서 / 아키텍처 문서 / 사용자 가이드 / README]
대상 독자: [신입 개발자 / 시니어 개발자 / 비개발자]
프로젝트명: [프로젝트 이름]
기술 스택: [사용 기술 나열]

핵심 기능 설명:
[주요 기능을 간단히 설명]

문서에 포함할 섹션:
1. 개요 (프로젝트 목적과 범위)
2. 아키텍처 개요 (다이어그램 설명 포함)
3. 시작하기 (설치 및 설정 가이드)
4. 주요 기능 상세 설명
5. API 레퍼런스 (해당되는 경우)
6. 트러블슈팅 (자주 발생하는 문제와 해결법)
7. FAQ

작성 규칙:
- 기술 용어 처음 사용 시 간단한 설명 추가
- 코드 예시는 복사하여 바로 실행 가능한 수준
- 각 섹션에 실용적인 예시 포함`:`# Technical Documentation Prompt Template

You are a technical documentation expert.
Write technical documentation based on the following info.

Document type: [API docs / Architecture docs / User guide / README]
Target audience: [Junior devs / Senior devs / Non-developers]
Project name: [project name]
Tech stack: [list technologies]

Core functionality:
[briefly describe main features]

Sections to include:
1. Overview (project purpose and scope)
2. Architecture overview (with diagram descriptions)
3. Getting started (installation and setup guide)
4. Detailed feature descriptions
5. API reference (if applicable)
6. Troubleshooting (common issues and solutions)
7. FAQ

Writing rules:
- Add brief explanations for technical terms on first use
- Code examples should be copy-paste runnable
- Include practical examples in each section`}),e.jsx("h3",{children:t?"3. 데이터 분석 템플릿":"3. Data Analysis Template"}),e.jsx(i,{language:"text",code:t?`# 데이터 분석 프롬프트 템플릿

당신은 [산업, 예: 이커머스] 분야의 데이터 분석가입니다.
다음 데이터를 분석해주세요.

데이터 설명:
- 데이터 소스: [데이터 출처]
- 기간: [분석 기간]
- 주요 지표: [KPI 나열]

데이터:
[데이터 붙여넣기 또는 설명]

분석 요청:
1. 기술 통계 (Descriptive Statistics)
   - 주요 지표의 평균, 중앙값, 표준편차
   - 이상치(Outlier) 식별

2. 트렌드 분석
   - 시계열 추세 파악
   - 계절성 여부 확인
   - 전월/전년 대비 변화율

3. 세그먼트 분석
   - [기준, 예: 사용자 유형별] 주요 지표 비교
   - 성과 차이가 큰 세그먼트 식별

4. 인사이트 및 액션 아이템
   - 핵심 인사이트 3-5개
   - 각 인사이트에 대한 구체적 실행 방안
   - 우선순위 매트릭스 (영향도 x 실행 용이성)

출력 형식: 경영진 보고서 스타일 (핵심 요약 먼저)`:`# Data Analysis Prompt Template

You are a data analyst in [industry, e.g., e-commerce].
Analyze the following data.

Data description:
- Source: [data source]
- Period: [analysis period]
- Key metrics: [list KPIs]

Data:
[paste data or describe it]

Analysis request:
1. Descriptive Statistics
   - Mean, median, std dev of key metrics
   - Outlier identification

2. Trend Analysis
   - Time series trend identification
   - Seasonality check
   - Month-over-month / year-over-year change rates

3. Segment Analysis
   - Compare key metrics by [criteria, e.g., user type]
   - Identify segments with largest performance gaps

4. Insights & Action Items
   - 3-5 core insights
   - Specific action plans for each insight
   - Priority matrix (impact x ease of implementation)

Output format: Executive report style (key summary first)`}),e.jsx("h3",{children:t?"4. 학습 계획 수립 템플릿":"4. Learning Plan Template"}),e.jsx(i,{language:"text",code:t?`# 학습 계획 수립 프롬프트 템플릿

당신은 [분야, 예: 소프트웨어 개발] 분야의 교육 전문가입니다.
맞춤형 학습 로드맵을 설계해주세요.

학습자 정보:
- 현재 수준: [초급/중급/고급]
- 관련 경험: [기존 경험이나 지식]
- 학습 목표: [최종적으로 달성하고 싶은 것]
- 가용 시간: [주당 학습 가능 시간]
- 학습 기간: [목표 달성까지의 기간]
- 선호 학습 방식: [동영상/텍스트/실습/프로젝트]

로드맵 구성:
1. 단계별 학습 계획 (주 단위)
   - 각 주차의 학습 주제
   - 구체적인 학습 자료 (무료 우선)
   - 실습 과제 1개 이상
   - 자가 평가 기준

2. 마일스톤 (월 단위)
   - 각 월에 달성해야 할 목표
   - 포트폴리오 프로젝트 제안
   - 역량 체크리스트

3. 추가 자원
   - 추천 커뮤니티
   - 유용한 도구 및 환경 설정
   - 멘토링 받을 수 있는 곳`:`# Learning Plan Prompt Template

You are an education expert in [field, e.g., software development].
Design a personalized learning roadmap.

Learner info:
- Current level: [Beginner/Intermediate/Advanced]
- Related experience: [existing knowledge]
- Learning goal: [what to ultimately achieve]
- Available time: [hours per week]
- Duration: [target completion period]
- Preferred style: [video/text/hands-on/project-based]

Roadmap structure:
1. Weekly learning plan
   - Topics per week
   - Specific resources (free first)
   - 1+ practice exercises
   - Self-assessment criteria

2. Monthly milestones
   - Monthly goals
   - Portfolio project suggestions
   - Competency checklists

3. Additional resources
   - Recommended communities
   - Useful tools and setup
   - Mentorship opportunities`}),e.jsx("h3",{children:t?"5. 이메일/비즈니스 커뮤니케이션 템플릿":"5. Email/Business Communication Template"}),e.jsx(i,{language:"text",code:t?`# 비즈니스 이메일 작성 프롬프트 템플릿

당신은 비즈니스 커뮤니케이션 전문가입니다.
다음 상황에 맞는 이메일을 작성해주세요.

이메일 정보:
- 유형: [제안서/감사/사과/후속 조치/안내/요청]
- 수신자: [직급과 관계, 예: 거래처 부장님]
- 발신자: [본인의 직급과 소속]
- 목적: [이 이메일로 달성하고자 하는 것]
- 핵심 내용: [전달할 주요 메시지]
- 톤: [격식체/반격식체/친근한]
- 특이사항: [고려할 특별한 상황]

작성 규칙:
- 제목은 핵심 내용을 담되 15자 이내
- 본문은 3단락 이내로 간결하게
- 명확한 CTA(Call to Action) 포함
- 맞춤법과 존칭 정확하게 사용

추가 요청:
- 버전 2개 제공 (톤 약간 다르게)
- 각 버전의 적합한 상황 설명`:`# Business Email Prompt Template

You are a business communication expert.
Write an email for the following situation.

Email info:
- Type: [Proposal/Thank you/Apology/Follow-up/Notice/Request]
- Recipient: [title and relationship]
- Sender: [your title and org]
- Purpose: [what to achieve with this email]
- Key content: [main message to convey]
- Tone: [Formal/Semi-formal/Friendly]
- Special notes: [any special considerations]

Writing rules:
- Subject line: core message within 15 words
- Body: concise, max 3 paragraphs
- Include clear CTA
- Proper grammar and honorifics

Additional:
- Provide 2 versions (slightly different tone)
- Explain suitable situations for each version`}),e.jsx(r,{type:"important",title:t?"템플릿 활용 팁":"Template Usage Tips",children:e.jsx("p",{children:t?"이 템플릿들은 시작점으로 활용하세요. 자신의 업무 특성에 맞게 수정하고, 반복 사용하면서 점점 최적화해 나가는 것이 중요합니다. 효과적인 프롬프트를 발견하면 노션이나 메모 앱에 저장하여 나만의 프롬프트 라이브러리를 구축하세요. 또한, 동료들과 프롬프트를 공유하면 팀 전체의 AI 활용 능력이 향상됩니다.":"Use these templates as starting points. Modify them for your specific work needs and optimize through repeated use. When you find effective prompts, save them in Notion or a notes app to build your own prompt library. Sharing prompts with colleagues improves the whole team's AI proficiency."})})]}),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{onClick:d,disabled:s===0,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"}),s>0&&(t?n[s-1].ko:n[s-1].en)]}),e.jsxs("button",{onClick:h,disabled:s===n.length-1,children:[s<n.length-1&&(t?n[s+1].ko:n[s+1].en),e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]})})]})}export{S as default};
