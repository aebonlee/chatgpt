import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
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
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState('intro');

  const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);

  function renderSection() {
    switch (activeSection) {
      case 'intro':
        return (
          <div className="guide-section">
            <h2>ChatGPT란 무엇인가?</h2>
            <p>ChatGPT는 OpenAI가 개발한 <strong>대규모 언어 모델(LLM) 기반의 대화형 AI</strong>입니다. 2022년 11월 출시 이후 전 세계적으로 가장 빠르게 성장한 AI 서비스로, 출시 2개월 만에 1억 명의 사용자를 돌파했습니다.</p>

            <h3>ChatGPT의 발전 역사</h3>
            <ul>
              <li><strong>GPT-1 (2018)</strong> — 1.17억 개의 파라미터로 시작된 첫 번째 생성형 사전훈련 트랜스포머 모델</li>
              <li><strong>GPT-2 (2019)</strong> — 15억 개의 파라미터, 텍스트 생성 능력이 크게 향상</li>
              <li><strong>GPT-3 (2020)</strong> — 1,750억 개의 파라미터, Few-shot 학습 능력 확보</li>
              <li><strong>GPT-3.5 (2022)</strong> — ChatGPT의 기반 모델, RLHF(인간 피드백 강화학습) 적용</li>
              <li><strong>GPT-4 (2023)</strong> — 멀티모달 지원, 대폭 향상된 추론 능력</li>
              <li><strong>GPT-4o (2024)</strong> — 옴니모달 모델, 텍스트/이미지/음성 통합 처리</li>
              <li><strong>o1/o3 (2024-2025)</strong> — 추론 특화 모델, 수학/과학/코딩에서 전문가 수준 성능</li>
            </ul>

            <h3>ChatGPT의 핵심 특징</h3>
            <ul>
              <li><strong>자연어 이해 & 생성</strong> — 인간과 유사한 자연스러운 대화가 가능합니다</li>
              <li><strong>멀티모달 지원</strong> — 텍스트, 이미지, 음성, 파일을 모두 처리합니다</li>
              <li><strong>컨텍스트 유지</strong> — 대화의 맥락을 기억하고 연속적인 대화가 가능합니다</li>
              <li><strong>다국어 지원</strong> — 한국어를 포함한 수십 개 언어를 지원합니다</li>
              <li><strong>플러그인 & GPTs</strong> — 기능을 확장하고 맞춤형 AI를 만들 수 있습니다</li>
            </ul>

            <TipBox type="important">
              ChatGPT는 훈련 데이터를 기반으로 응답을 생성하므로, 최신 정보나 사실 확인이 필요한 경우 반드시 교차 검증을 해야 합니다.
            </TipBox>

            <h3>ChatGPT의 작동 원리</h3>
            <p>ChatGPT는 <strong>트랜스포머(Transformer) 아키텍처</strong>를 기반으로 합니다. 대규모 텍스트 데이터로 사전 훈련(Pre-training)을 거친 후, 인간 피드백을 통한 강화학습(RLHF)으로 미세조정됩니다.</p>
            <ul>
              <li><strong>사전 훈련</strong> — 인터넷의 방대한 텍스트 데이터로 언어 패턴을 학습</li>
              <li><strong>지도 미세조정 (SFT)</strong> — 인간이 작성한 고품질 대화 데이터로 미세조정</li>
              <li><strong>RLHF</strong> — 인간 피드백을 통해 응답 품질을 지속적으로 개선</li>
            </ul>
          </div>
        );

      case 'account':
        return (
          <div className="guide-section">
            <h2>계정 생성 & 요금제</h2>
            <h3>계정 생성 방법</h3>
            <p>ChatGPT를 사용하려면 OpenAI 계정이 필요합니다. 다음 단계를 따라 계정을 생성하세요:</p>
            <ol>
              <li><strong>chat.openai.com</strong> 또는 <strong>chatgpt.com</strong>에 접속합니다</li>
              <li><strong>"Sign up"</strong> 버튼을 클릭합니다</li>
              <li>이메일, Google, Microsoft, Apple 계정 중 하나로 가입합니다</li>
              <li>이메일 인증을 완료합니다</li>
              <li>이름과 생년월일을 입력합니다</li>
            </ol>

            <h3>요금제 비교</h3>
            <ul>
              <li><strong>Free (무료)</strong> — GPT-4o mini 무제한, GPT-4o 제한적 사용, 기본 기능</li>
              <li><strong>Plus ($20/월)</strong> — GPT-4o 확장 사용, DALL-E, 고급 음성 모드, GPTs 제작</li>
              <li><strong>Pro ($200/월)</strong> — 무제한 사용, o1 pro 모드, 최고 성능</li>
              <li><strong>Team ($25/인/월)</strong> — Plus 기능 + 팀 관리, 더 높은 사용량</li>
              <li><strong>Enterprise (문의)</strong> — 무제한 사용, 보안 강화, 관리자 콘솔, SSO</li>
            </ul>

            <TipBox type="tip">
              처음 시작하는 분은 무료 요금제로 ChatGPT의 기본 기능을 충분히 경험한 후, 필요에 따라 Plus로 업그레이드하는 것을 추천합니다.
            </TipBox>

            <h3>Plus 요금제의 주요 혜택</h3>
            <ul>
              <li>GPT-4o 모델 확장 사용량</li>
              <li>DALL-E 3 이미지 생성</li>
              <li>Advanced Voice Mode (고급 음성 대화)</li>
              <li>Code Interpreter (데이터 분석 & 코드 실행)</li>
              <li>웹 브라우징 (실시간 정보 검색)</li>
              <li>GPTs 제작 및 공유</li>
              <li>Canvas (글쓰기 & 코딩 협업)</li>
            </ul>
          </div>
        );

      case 'interface':
        return (
          <div className="guide-section">
            <h2>인터페이스 이해</h2>
            <h3>메인 화면 구성</h3>
            <p>ChatGPT의 인터페이스는 크게 <strong>사이드바</strong>, <strong>대화 영역</strong>, <strong>입력 영역</strong>으로 구분됩니다.</p>

            <h3>사이드바 (왼쪽 패널)</h3>
            <ul>
              <li><strong>새 대화</strong> — "New chat" 버튼으로 새로운 대화를 시작합니다</li>
              <li><strong>대화 목록</strong> — 이전 대화들이 시간순으로 정리됩니다</li>
              <li><strong>검색</strong> — 이전 대화를 키워드로 검색할 수 있습니다</li>
              <li><strong>GPTs 탐색</strong> — GPT Store에서 다양한 GPTs를 찾을 수 있습니다</li>
              <li><strong>프로필 & 설정</strong> — 계정 설정, 요금제 관리 등</li>
            </ul>

            <h3>대화 영역 (중앙)</h3>
            <ul>
              <li><strong>모델 선택</strong> — 상단에서 사용할 모델(GPT-4o, o1 등)을 선택합니다</li>
              <li><strong>메시지 표시</strong> — 사용자와 AI의 대화가 순서대로 표시됩니다</li>
              <li><strong>코드 블록</strong> — 코드는 구문 강조와 함께 별도 블록으로 표시됩니다</li>
              <li><strong>복사/재생성</strong> — 각 응답에 복사, 재생성, 좋아요/싫어요 버튼이 있습니다</li>
            </ul>

            <h3>입력 영역 (하단)</h3>
            <ul>
              <li><strong>텍스트 입력</strong> — 메시지를 입력하는 텍스트 박스</li>
              <li><strong>파일 첨부</strong> — 클립 아이콘으로 파일을 업로드합니다</li>
              <li><strong>이미지 첨부</strong> — 이미지를 드래그 앤 드롭하거나 업로드합니다</li>
              <li><strong>음성 입력</strong> — 마이크 아이콘으로 음성 입력이 가능합니다</li>
              <li><strong>전송</strong> — Enter 키 또는 전송 버튼으로 메시지를 보냅니다</li>
            </ul>

            <TipBox type="tip">
              Shift + Enter를 누르면 메시지를 보내지 않고 줄바꿈을 할 수 있습니다. 긴 프롬프트를 작성할 때 유용합니다.
            </TipBox>
          </div>
        );

      case 'conversation':
        return (
          <div className="guide-section">
            <h2>효과적인 대화법</h2>

            <h3>1. 명확하고 구체적으로 질문하기</h3>
            <p>모호한 질문보다는 <strong>구체적이고 명확한 질문</strong>이 더 좋은 답변을 이끌어냅니다.</p>
            <ul>
              <li><strong>나쁜 예:</strong> "마케팅에 대해 알려줘"</li>
              <li><strong>좋은 예:</strong> "B2B SaaS 스타트업의 콘텐츠 마케팅 전략을 3가지 제안해줘. 각 전략마다 구체적인 실행 계획과 예상 KPI를 포함해줘."</li>
            </ul>

            <h3>2. 맥락과 배경 정보 제공하기</h3>
            <p>ChatGPT에게 <strong>충분한 맥락</strong>을 제공하면 더 관련성 높은 답변을 받을 수 있습니다.</p>
            <ul>
              <li>자신의 역할/직업 설명</li>
              <li>대상 독자/청중 명시</li>
              <li>원하는 톤/스타일 지정</li>
              <li>관련 제약 조건 설명</li>
            </ul>

            <h3>3. 단계별로 나누어 질문하기</h3>
            <p>복잡한 작업은 한 번에 요청하기보다 <strong>단계별로 나누어 요청</strong>하는 것이 효과적입니다.</p>

            <h3>4. 출력 형식 지정하기</h3>
            <p>원하는 응답 형식을 미리 지정하면 정리된 결과를 받을 수 있습니다.</p>
            <ul>
              <li>"표 형식으로 정리해줘"</li>
              <li>"bullet point로 요약해줘"</li>
              <li>"JSON 형식으로 출력해줘"</li>
              <li>"마크다운 형식으로 작성해줘"</li>
            </ul>

            <h3>5. 피드백으로 개선하기</h3>
            <p>첫 번째 응답이 완벽하지 않을 수 있습니다. <strong>구체적인 피드백</strong>을 통해 응답을 개선하세요.</p>
            <ul>
              <li>"더 간결하게 요약해줘"</li>
              <li>"전문 용어를 줄이고 쉽게 설명해줘"</li>
              <li>"2번째 항목을 더 자세히 설명해줘"</li>
              <li>"예시를 추가해줘"</li>
            </ul>

            <TipBox type="warning">
              ChatGPT는 자신감 있게 잘못된 정보를 제공할 수 있습니다(Hallucination). 중요한 사실은 반드시 별도로 확인하세요.
            </TipBox>
          </div>
        );

      case 'settings':
        return (
          <div className="guide-section">
            <h2>설정 & 커스텀</h2>

            <h3>Custom Instructions (맞춤 지시)</h3>
            <p>Custom Instructions를 설정하면 매번 같은 설명을 반복하지 않아도 됩니다. 두 가지 영역으로 나뉩니다:</p>
            <ul>
              <li><strong>"What would you like ChatGPT to know about you?"</strong> — 자신에 대한 정보 (직업, 관심사, 전문 분야 등)</li>
              <li><strong>"How would you like ChatGPT to respond?"</strong> — 원하는 응답 스타일 (톤, 길이, 형식 등)</li>
            </ul>

            <TipBox type="tip" title="Custom Instructions 예시">
              "나는 한국의 소프트웨어 개발자입니다. 주로 Python과 React를 사용합니다."<br/>
              "코드 예시를 포함해서 답변해주세요. 한국어로 설명하되, 기술 용어는 영어를 그대로 사용해주세요."
            </TipBox>

            <h3>Memory (기억) 기능</h3>
            <p>ChatGPT의 Memory 기능은 대화에서 중요한 정보를 기억하고 이후 대화에서 활용합니다.</p>
            <ul>
              <li>설정에서 Memory 활성화/비활성화 가능</li>
              <li>저장된 기억 목록 확인 및 개별 삭제 가능</li>
              <li>"이것을 기억해줘" 또는 "이것을 잊어줘"로 직접 관리 가능</li>
            </ul>

            <h3>Data Controls (데이터 관리)</h3>
            <ul>
              <li><strong>Chat History & Training</strong> — 대화 기록 저장 및 모델 학습 참여 여부 선택</li>
              <li><strong>Shared Links</strong> — 공유한 대화 링크 관리</li>
              <li><strong>Export Data</strong> — 모든 대화 데이터를 다운로드할 수 있습니다</li>
              <li><strong>Delete Account</strong> — 계정 및 모든 데이터 삭제</li>
            </ul>

            <TipBox type="warning">
              민감한 정보(개인정보, 기업 기밀 등)는 ChatGPT에 입력하지 않는 것이 좋습니다. 특히 Chat History & Training이 활성화된 경우 대화 내용이 모델 학습에 사용될 수 있습니다.
            </TipBox>
          </div>
        );

      case 'tips':
        return (
          <div className="guide-section">
            <h2>팁 & 단축키</h2>

            <h3>키보드 단축키</h3>
            <ul>
              <li><strong>Enter</strong> — 메시지 전송</li>
              <li><strong>Shift + Enter</strong> — 줄바꿈 (메시지 전송 없이)</li>
              <li><strong>Ctrl/Cmd + Shift + C</strong> — 코드 블록 복사</li>
              <li><strong>Ctrl/Cmd + Shift + ;</strong> — 마지막 응답 복사</li>
              <li><strong>Ctrl/Cmd + /</strong> — 단축키 목록 보기</li>
            </ul>

            <h3>생산성 팁</h3>
            <ul>
              <li><strong>대화 이름 변경</strong> — 대화 제목을 의미 있게 바꾸면 나중에 찾기 쉽습니다</li>
              <li><strong>대화 공유</strong> — 유용한 대화를 링크로 공유할 수 있습니다</li>
              <li><strong>대화 고정</strong> — 자주 사용하는 대화를 상단에 고정하세요</li>
              <li><strong>검색 활용</strong> — 사이드바 검색으로 이전 대화를 빠르게 찾을 수 있습니다</li>
              <li><strong>모바일 앱</strong> — iOS/Android 앱으로 이동 중에도 사용하세요</li>
            </ul>

            <h3>흔한 실수와 해결법</h3>
            <ul>
              <li><strong>너무 짧은 프롬프트</strong> → 맥락과 조건을 추가하세요</li>
              <li><strong>한 번에 너무 많은 요청</strong> → 단계별로 나누어 요청하세요</li>
              <li><strong>사실 확인 없이 신뢰</strong> → 중요한 정보는 반드시 검증하세요</li>
              <li><strong>대화가 길어질수록 품질 저하</strong> → 새 대화를 시작하세요</li>
              <li><strong>영어로만 질문</strong> → 한국어로도 충분히 좋은 결과를 얻을 수 있습니다</li>
            </ul>

            <TipBox type="tip">
              ChatGPT에게 "이 대화를 요약해줘"라고 요청하면, 긴 대화의 핵심을 정리해줍니다. 새 대화를 시작할 때 이 요약을 붙여넣으면 맥락을 유지할 수 있습니다.
            </TipBox>
          </div>
        );

      case 'usecases':
        return (
          <div className="guide-section">
            <h2>활용 사례</h2>

            <h3>글쓰기 & 콘텐츠</h3>
            <ul>
              <li>블로그 글, 소셜 미디어 포스트, 뉴스레터 작성</li>
              <li>이메일 초안 작성 및 교정</li>
              <li>보고서, 제안서, 프레젠테이션 자료 작성</li>
              <li>번역 및 다국어 콘텐츠 제작</li>
              <li>카피라이팅, 광고 문구 작성</li>
            </ul>

            <h3>코딩 & 개발</h3>
            <ul>
              <li>코드 작성, 디버깅, 리팩토링</li>
              <li>코드 리뷰 및 최적화 제안</li>
              <li>기술 문서 및 README 작성</li>
              <li>알고리즘 설명 및 학습</li>
              <li>데이터베이스 쿼리 작성 (SQL)</li>
            </ul>

            <h3>학습 & 교육</h3>
            <ul>
              <li>개념 설명 및 튜터링</li>
              <li>외국어 학습 (대화 연습, 문법 교정)</li>
              <li>퀴즈 및 연습 문제 생성</li>
              <li>논문/자료 요약</li>
              <li>학습 계획 수립</li>
            </ul>

            <h3>비즈니스 & 업무</h3>
            <ul>
              <li>시장 조사 및 경쟁 분석</li>
              <li>비즈니스 전략 브레인스토밍</li>
              <li>데이터 분석 및 인사이트 추출</li>
              <li>회의록 정리 및 액션 아이템 추출</li>
              <li>고객 응대 스크립트 작성</li>
            </ul>

            <h3>창작 & 아이디어</h3>
            <ul>
              <li>소설, 시, 가사 작성</li>
              <li>아이디어 브레인스토밍</li>
              <li>DALL-E를 활용한 이미지 생성</li>
              <li>게임 시나리오 및 캐릭터 설정</li>
              <li>유튜브 스크립트, 팟캐스트 대본 작성</li>
            </ul>

            <TipBox type="important">
              ChatGPT를 활용할 때는 AI가 생성한 콘텐츠임을 명시하는 것이 좋은 관행입니다. 특히 학술적 또는 전문적 맥락에서는 AI 사용 정책을 확인하세요.
            </TipBox>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <>
      <SEOHead title={isKo ? 'ChatGPT 기초' : 'ChatGPT Basics'} path="/chatgpt-basics" />
      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? 'ChatGPT 기초' : 'ChatGPT Basics'}</div>
            <ul className="guide-nav">
              {SECTIONS.map(section => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="nav-icon"><i className={`fa-solid ${section.icon}`} /></span>
                    {isKo ? section.ko : section.en}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="guide-content">
            <div className="guide-content-header">
              <h1>{isKo ? 'ChatGPT 기초 가이드' : 'ChatGPT Basics Guide'}</h1>
              <p>{isKo
                ? 'ChatGPT의 기본 사용법부터 효과적인 활용법까지 체계적으로 학습합니다.'
                : 'Learn ChatGPT from basic usage to effective utilization systematically.'}</p>
            </div>

            {renderSection()}

            <div className="guide-section-nav">
              <button
                disabled={currentIndex === 0}
                onClick={() => setActiveSection(SECTIONS[currentIndex - 1]?.id)}
              >
                <i className="fa-solid fa-arrow-left" />
                {isKo ? '이전' : 'Prev'}
              </button>
              <button
                disabled={currentIndex === SECTIONS.length - 1}
                onClick={() => setActiveSection(SECTIONS[currentIndex + 1]?.id)}
              >
                {isKo ? '다음' : 'Next'}
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
