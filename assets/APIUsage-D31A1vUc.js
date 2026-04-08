import{u as m,j as e}from"./index-BZUNQMKg.js";import{b as u}from"./vendor-BdU1dAPY.js";import{S as g}from"./SEOHead-CZdXd5Rl.js";import{C as i}from"./CodeBlock-HWG0wygC.js";import{T as o}from"./TipBox-BPD8jwfG.js";import"./supabase-BiHzSKx7.js";const s=[{id:"setup",icon:"fa-key",ko:"API 시작하기",en:"Getting Started"},{id:"chat",icon:"fa-message",ko:"Chat Completions",en:"Chat Completions"},{id:"streaming",icon:"fa-stream",ko:"Streaming",en:"Streaming"},{id:"functions",icon:"fa-wrench",ko:"Function Calling",en:"Function Calling"},{id:"vision",icon:"fa-image",ko:"Vision (이미지)",en:"Vision (Images)"},{id:"assistants",icon:"fa-robot",ko:"Assistants API",en:"Assistants API"},{id:"pricing",icon:"fa-credit-card",ko:"요금제 & 최적화",en:"Pricing & Optimization"}];function _(){const{language:l}=m(),t=l==="ko",[r,c]=u.useState("setup"),n=s.findIndex(a=>a.id===r),d=()=>{n>0&&(c(s[n-1].id),window.scrollTo({top:0,behavior:"smooth"}))},h=()=>{n<s.length-1&&(c(s[n+1].id),window.scrollTo({top:0,behavior:"smooth"}))},p=a=>{c(a),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:t?"OpenAI API 사용법":"OpenAI API Usage",description:t?"OpenAI API를 활용한 개발 가이드. Chat Completions, Streaming, Function Calling, Vision, Assistants API까지 체계적으로 학습합니다.":"A comprehensive guide to OpenAI API development. Learn Chat Completions, Streaming, Function Calling, Vision, and Assistants API.",path:"/api-usage"}),e.jsx("div",{className:"guide-page",children:e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:t?"API 가이드":"API Guide"}),e.jsx("ul",{className:"guide-nav",children:s.map(a=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${r===a.id?"active":""}`,onClick:()=>p(a.id),children:[e.jsx("span",{className:"nav-icon",children:e.jsx("i",{className:`fa-solid ${a.icon}`})}),e.jsx("span",{children:t?a.ko:a.en})]})},a.id))})]}),e.jsxs("main",{className:"guide-content",children:[e.jsxs("div",{className:"guide-content-header",children:[e.jsxs("h1",{children:[e.jsx("i",{className:`fa-solid ${s[n].icon}`})," ",t?s[n].ko:s[n].en]}),e.jsxs("p",{children:[n+1," / ",s.length]})]}),r==="setup"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"1. API 키 발급받기":"1. Getting Your API Key"}),e.jsx("p",{children:t?"OpenAI API를 사용하려면 먼저 API 키가 필요합니다. platform.openai.com에서 계정을 만들고 API 키를 발급받으세요.":"To use the OpenAI API, you first need an API key. Create an account at platform.openai.com and generate your API key."}),e.jsxs("ol",{children:[e.jsx("li",{children:t?"platform.openai.com 에 접속하여 회원가입":"Sign up at platform.openai.com"}),e.jsx("li",{children:t?"Settings > API keys 메뉴로 이동":"Navigate to Settings > API keys"}),e.jsx("li",{children:t?'"Create new secret key" 클릭':'Click "Create new secret key"'}),e.jsx("li",{children:t?"생성된 키를 안전한 곳에 저장 (한 번만 표시됨!)":"Save the generated key securely (shown only once!)"})]}),e.jsx(o,{type:"warning",children:t?"API 키는 절대로 코드에 직접 하드코딩하지 마세요! 환경 변수나 시크릿 매니저를 사용하세요.":"Never hardcode API keys directly in your code! Use environment variables or a secret manager."}),e.jsx("h2",{children:t?"2. SDK 설치하기":"2. Installing the SDK"}),e.jsx("h3",{children:"Python"}),e.jsx(i,{language:"bash",code:"pip install openai"}),e.jsx("h3",{children:"Node.js"}),e.jsx(i,{language:"bash",code:"npm install openai"}),e.jsx("h2",{children:t?"3. 환경 변수 설정":"3. Setting Environment Variables"}),e.jsx("p",{children:t?"API 키를 환경 변수로 설정하면 코드에서 안전하게 사용할 수 있습니다.":"Setting the API key as an environment variable keeps your code secure."}),e.jsx(i,{language:"bash",code:`# .env 파일 생성
OPENAI_API_KEY=sk-your-api-key-here

# Linux/Mac 터미널에서 설정
export OPENAI_API_KEY="sk-your-api-key-here"

# Windows PowerShell에서 설정
$env:OPENAI_API_KEY="sk-your-api-key-here"`}),e.jsx("h2",{children:t?"4. 첫 번째 API 호출":"4. Your First API Call"}),e.jsx("h3",{children:"Python"}),e.jsx(i,{language:"python",code:`from openai import OpenAI

# 환경 변수에서 자동으로 OPENAI_API_KEY를 읽습니다
client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "당신은 친절한 AI 도우미입니다."},
        {"role": "user", "content": "안녕하세요! 자기소개 해주세요."}
    ]
)

print(response.choices[0].message.content)`}),e.jsx("h3",{children:"Node.js"}),e.jsx(i,{language:"javascript",code:`import OpenAI from 'openai';

// 환경 변수에서 자동으로 OPENAI_API_KEY를 읽습니다
const openai = new OpenAI();

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: '당신은 친절한 AI 도우미입니다.' },
      { role: 'user', content: '안녕하세요! 자기소개 해주세요.' },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();`}),e.jsx(o,{type:"tip",children:t?"Python SDK v1.0+에서는 OpenAI() 클라이언트를 생성할 때 환경 변수 OPENAI_API_KEY를 자동으로 읽습니다. 별도로 api_key를 전달할 필요가 없습니다.":"In Python SDK v1.0+, the OpenAI() client automatically reads the OPENAI_API_KEY environment variable. No need to pass api_key separately."})]}),r==="chat"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"Chat Completions API 구조":"Chat Completions API Structure"}),e.jsx("p",{children:t?"Chat Completions API는 OpenAI의 가장 핵심적인 API입니다. 대화형 메시지 배열을 입력으로 받아 AI의 응답을 생성합니다.":"The Chat Completions API is OpenAI's most fundamental API. It takes an array of conversational messages as input and generates AI responses."}),e.jsx("h2",{children:t?"Roles 이해하기":"Understanding Roles"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"system"})," -"," ",t?"AI의 행동 방식과 성격을 정의합니다. 대화의 맥락과 규칙을 설정하는 데 사용됩니다.":"Defines the AI's behavior and personality. Used to set context and rules for the conversation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"user"})," -"," ",t?"사용자의 입력 메시지입니다. 질문, 요청, 지시 등을 포함합니다.":"The user's input message. Includes questions, requests, instructions, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"assistant"})," -"," ",t?"AI의 이전 응답입니다. 대화 기록을 유지하여 문맥을 이해하는 데 사용됩니다.":"The AI's previous response. Used to maintain conversation history and context."]})]}),e.jsx("h2",{children:t?"주요 파라미터":"Key Parameters"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"temperature"})," (0~2) -"," ",t?"응답의 창의성을 조절합니다. 0에 가까울수록 결정적이고, 높을수록 다양한 응답을 생성합니다.":"Controls response creativity. Closer to 0 means more deterministic; higher values produce more varied responses."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"top_p"})," (0~1) -"," ",t?"nucleus sampling 파라미터. temperature와 함께 사용하지 않는 것이 권장됩니다.":"Nucleus sampling parameter. Not recommended to use together with temperature."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"max_tokens"})," -"," ",t?"응답의 최대 토큰 수를 제한합니다. 비용 관리와 응답 길이 제어에 유용합니다.":"Limits the maximum number of tokens in the response. Useful for cost management and controlling response length."]})]}),e.jsx(i,{language:"python",code:`from openai import OpenAI

client = OpenAI()

# 멀티턴 대화 예제
conversation = [
    {"role": "system", "content": "당신은 Python 프로그래밍 전문 튜터입니다. 초보자에게 친절하게 설명합니다."},
    {"role": "user", "content": "리스트 컴프리헨션이 뭔가요?"},
]

response = client.chat.completions.create(
    model="gpt-4o",
    messages=conversation,
    temperature=0.7,      # 적당한 창의성
    max_tokens=1000,      # 최대 1000 토큰
    top_p=1.0,            # 기본값
    frequency_penalty=0,  # 반복 패널티 없음
    presence_penalty=0,   # 주제 다양성 패널티 없음
)

assistant_message = response.choices[0].message.content
print(assistant_message)

# 대화 기록에 AI 응답 추가 (멀티턴 유지)
conversation.append({"role": "assistant", "content": assistant_message})
conversation.append({"role": "user", "content": "예제 코드를 보여주세요."})

# 이어서 대화 계속
response2 = client.chat.completions.create(
    model="gpt-4o",
    messages=conversation,
    temperature=0.7,
    max_tokens=1000,
)

print(response2.choices[0].message.content)`}),e.jsx(o,{type:"important",children:t?"temperature와 top_p를 동시에 조절하는 것은 권장되지 않습니다. 하나만 수정하고 나머지는 기본값으로 두세요. 코딩/분석 작업에는 temperature=0, 창작/대화에는 0.7~1.0이 적합합니다.":"Adjusting both temperature and top_p simultaneously is not recommended. Modify only one and keep the other at its default. Use temperature=0 for coding/analysis tasks, and 0.7-1.0 for creative/conversational tasks."})]}),r==="streaming"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"SSE 기반 스트리밍":"SSE-Based Streaming"}),e.jsx("p",{children:t?"스트리밍을 사용하면 전체 응답이 완성될 때까지 기다리지 않고, 토큰이 생성되는 즉시 실시간으로 받아볼 수 있습니다. Server-Sent Events (SSE) 방식을 사용하며, ChatGPT처럼 글자가 하나씩 나타나는 효과를 구현할 수 있습니다.":"Streaming lets you receive tokens in real-time as they are generated, without waiting for the full response. It uses Server-Sent Events (SSE) and allows you to implement the typing effect seen in ChatGPT."}),e.jsx("h2",{children:t?"Python 스트리밍 구현":"Python Streaming Implementation"}),e.jsx(i,{language:"python",code:`from openai import OpenAI

client = OpenAI()

# stream=True로 스트리밍 활성화
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "당신은 도움이 되는 AI 어시스턴트입니다."},
        {"role": "user", "content": "양자컴퓨팅에 대해 간단히 설명해주세요."}
    ],
    stream=True,  # 스트리밍 활성화
)

# 실시간으로 토큰을 받아 출력
collected_content = ""
for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        token = chunk.choices[0].delta.content
        print(token, end="", flush=True)
        collected_content += token

print()  # 줄바꿈
print(f"\\n전체 응답: {collected_content}")`}),e.jsx("h2",{children:t?"Node.js 스트리밍 구현":"Node.js Streaming Implementation"}),e.jsx(i,{language:"javascript",code:`import OpenAI from 'openai';

const openai = new OpenAI();

async function streamChat() {
  const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: '당신은 도움이 되는 AI 어시스턴트입니다.' },
      { role: 'user', content: '양자컴퓨팅에 대해 간단히 설명해주세요.' },
    ],
    stream: true, // 스트리밍 활성화
  });

  let collectedContent = '';

  for await (const chunk of stream) {
    const token = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(token);
    collectedContent += token;
  }

  console.log('\\n\\n전체 응답:', collectedContent);
}

streamChat();`}),e.jsx(o,{type:"tip",children:t?"스트리밍은 사용자 경험을 크게 향상시킵니다. 긴 응답의 경우, 첫 토큰이 도착하기까지의 시간(Time to First Token, TTFT)이 매우 짧아져 체감 속도가 빨라집니다.":"Streaming significantly improves user experience. For long responses, the Time to First Token (TTFT) is much shorter, making the perceived speed faster."}),e.jsx(o,{type:"important",children:t?'스트리밍 응답에서는 usage 정보(토큰 수)가 기본적으로 포함되지 않습니다. 토큰 사용량을 추적하려면 stream_options={"include_usage": True} 파라미터를 추가하세요.':'Streaming responses do not include usage info (token counts) by default. To track token usage, add the stream_options={"include_usage": true} parameter.'})]}),r==="functions"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"Function Calling이란?":"What is Function Calling?"}),e.jsx("p",{children:t?"Function Calling은 AI가 외부 함수를 호출할 수 있게 해주는 기능입니다. AI가 직접 함수를 실행하는 것이 아니라, 어떤 함수를 어떤 인자로 호출해야 하는지를 JSON 형태로 알려줍니다. 실제 함수 실행은 개발자가 처리합니다.":"Function Calling allows AI to invoke external functions. The AI doesn't execute functions directly but tells you which function to call with what arguments in JSON format. The actual execution is handled by the developer."}),e.jsx("h2",{children:t?"tools 파라미터와 JSON Schema":"The tools Parameter and JSON Schema"}),e.jsx("p",{children:t?"tools 파라미터를 사용하여 사용 가능한 함수들을 정의합니다. 각 함수는 이름, 설명, 파라미터(JSON Schema)로 구성됩니다.":"Use the tools parameter to define available functions. Each function consists of a name, description, and parameters (JSON Schema)."}),e.jsx("h2",{children:t?"실전 예제: 날씨 API":"Practical Example: Weather API"}),e.jsx(i,{language:"python",code:`import json
from openai import OpenAI

client = OpenAI()

# 1. 사용할 함수(도구) 정의
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "지정된 도시의 현재 날씨 정보를 가져옵니다.",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "도시 이름 (예: 서울, 부산, Tokyo)"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "description": "온도 단위"
                    }
                },
                "required": ["city"]
            }
        }
    }
]

# 2. 실제 함수 구현 (여기서는 더미 데이터 반환)
def get_weather(city, unit="celsius"):
    weather_data = {
        "서울": {"temp": 22, "condition": "맑음", "humidity": 45},
        "부산": {"temp": 25, "condition": "구름 약간", "humidity": 60},
        "제주": {"temp": 27, "condition": "흐림", "humidity": 70},
    }
    data = weather_data.get(city, {"temp": 20, "condition": "정보 없음", "humidity": 50})
    return json.dumps(data, ensure_ascii=False)

# 3. AI에게 질문
messages = [
    {"role": "user", "content": "서울과 부산의 날씨를 비교해주세요."}
]

response = client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
    tool_choice="auto",  # AI가 자동으로 함수 호출 여부 결정
)

# 4. 함수 호출 처리
response_message = response.choices[0].message

if response_message.tool_calls:
    messages.append(response_message)

    for tool_call in response_message.tool_calls:
        function_name = tool_call.function.name
        function_args = json.loads(tool_call.function.arguments)

        # 함수 실행
        if function_name == "get_weather":
            result = get_weather(**function_args)

        # 결과를 메시지에 추가
        messages.append({
            "role": "tool",
            "tool_call_id": tool_call.id,
            "content": result,
        })

    # 5. 함수 결과를 포함하여 최종 응답 생성
    final_response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
    )
    print(final_response.choices[0].message.content)`}),e.jsx(o,{type:"tip",children:t?'tool_choice를 "auto"로 설정하면 AI가 함수 호출이 필요한지 자동으로 판단합니다. "required"로 설정하면 반드시 함수를 호출하고, {"type": "function", "function": {"name": "함수명"}}으로 특정 함수를 강제 호출할 수 있습니다.':'Setting tool_choice to "auto" lets the AI decide whether a function call is needed. Use "required" to force a function call, or {"type": "function", "function": {"name": "function_name"}} to force a specific function.'}),e.jsx(o,{type:"warning",children:t?"AI가 반환하는 함수 인자를 반드시 검증하세요! AI는 잘못된 인자를 생성할 수 있습니다. 프로덕션에서는 입력 유효성 검사를 철저히 수행해야 합니다.":"Always validate function arguments returned by the AI! The AI can generate incorrect arguments. In production, perform thorough input validation."})]}),r==="vision"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"이미지 입력 방식":"Image Input Methods"}),e.jsx("p",{children:t?"GPT-4o, GPT-4o-mini 등의 비전 모델은 이미지를 입력으로 받아 분석할 수 있습니다. URL 방식과 Base64 인코딩 방식 두 가지로 이미지를 전달할 수 있습니다.":"Vision models like GPT-4o and GPT-4o-mini can analyze images as input. You can provide images via URL or Base64 encoding."}),e.jsx("h2",{children:t?"URL 방식으로 이미지 분석":"Image Analysis via URL"}),e.jsx(i,{language:"python",code:`from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "이 이미지에 무엇이 보이나요? 자세히 설명해주세요."},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://example.com/image.jpg",
                        "detail": "high"  # "low", "high", "auto" 중 선택
                    }
                }
            ]
        }
    ],
    max_tokens=1000,
)

print(response.choices[0].message.content)`}),e.jsx("h2",{children:t?"Base64 인코딩 방식":"Base64 Encoding Method"}),e.jsx(i,{language:"python",code:`import base64
from openai import OpenAI

client = OpenAI()

# 로컬 이미지를 Base64로 인코딩
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

base64_image = encode_image("screenshot.png")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "이 스크린샷의 UI를 분석해주세요."},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/png;base64,{base64_image}"
                    }
                }
            ]
        }
    ],
    max_tokens=1000,
)

print(response.choices[0].message.content)`}),e.jsx(o,{type:"tip",children:t?'detail 파라미터로 이미지 분석 정밀도를 조절할 수 있습니다. "low"는 빠르고 저렴하며, "high"는 더 정밀하지만 더 많은 토큰을 사용합니다. 대부분의 경우 "auto"가 적합합니다.':'Use the detail parameter to control image analysis precision. "low" is fast and cheap, "high" is more precise but uses more tokens. "auto" works well in most cases.'}),e.jsx("h2",{children:t?"실전 활용 예시":"Practical Use Cases"}),e.jsxs("ul",{children:[e.jsx("li",{children:t?"OCR - 이미지에서 텍스트 추출":"OCR - Extract text from images"}),e.jsx("li",{children:t?"UI/UX 분석 - 스크린샷 분석 및 피드백":"UI/UX Analysis - Screenshot analysis and feedback"}),e.jsx("li",{children:t?"상품 인식 - 사진 속 상품 식별 및 분류":"Product Recognition - Identify and classify products in photos"}),e.jsx("li",{children:t?"차트/그래프 분석 - 데이터 시각화 해석":"Chart/Graph Analysis - Data visualization interpretation"}),e.jsx("li",{children:t?"의료 이미지 보조 분석 (진단 목적 아님)":"Medical image auxiliary analysis (not for diagnosis)"})]}),e.jsx(o,{type:"warning",children:t?"이미지 크기가 클수록 더 많은 토큰을 소비합니다. 비용 최적화를 위해 불필요하게 큰 이미지는 리사이즈한 후 전달하세요.":"Larger images consume more tokens. For cost optimization, resize unnecessarily large images before sending."})]}),r==="assistants"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"Assistants API란?":"What is the Assistants API?"}),e.jsx("p",{children:t?"Assistants API는 상태를 유지하는 AI 어시스턴트를 만들 수 있는 API입니다. 대화 기록 관리, 파일 처리, 코드 실행 등의 기능을 내장하고 있어 복잡한 AI 애플리케이션을 쉽게 구축할 수 있습니다.":"The Assistants API lets you create stateful AI assistants. It has built-in conversation history management, file handling, and code execution, making it easy to build complex AI applications."}),e.jsx("h2",{children:t?"핵심 개념":"Core Concepts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assistant"})," -"," ",t?"특정 목적을 위해 설정된 AI 어시스턴트. 모델, 지시사항, 도구 등을 정의합니다.":"An AI assistant configured for a specific purpose. Defines model, instructions, tools, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Thread"})," -"," ",t?"대화 세션을 나타냅니다. 메시지 기록이 자동으로 관리됩니다.":"Represents a conversation session. Message history is managed automatically."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Message"})," -"," ",t?"Thread 내의 개별 메시지입니다. 텍스트, 이미지, 파일 등을 포함할 수 있습니다.":"An individual message in a Thread. Can contain text, images, files, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Run"})," -"," ",t?"Assistant가 Thread의 메시지를 처리하는 실행 단위입니다.":"An execution unit where the Assistant processes messages in a Thread."]})]}),e.jsx("h2",{children:t?"내장 도구":"Built-in Tools"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Code Interpreter"})," -"," ",t?"샌드박스 환경에서 Python 코드를 실행할 수 있습니다. 데이터 분석, 차트 생성, 파일 변환 등에 활용됩니다.":"Runs Python code in a sandbox environment. Used for data analysis, chart generation, file conversion, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"File Search"})," -"," ",t?"업로드된 파일에서 관련 정보를 검색합니다. RAG(검색 증강 생성)를 자동으로 구현합니다.":"Searches uploaded files for relevant information. Automatically implements RAG (Retrieval Augmented Generation)."]})]}),e.jsx(i,{language:"python",code:`from openai import OpenAI

client = OpenAI()

# 1. Assistant 생성
assistant = client.beta.assistants.create(
    name="데이터 분석가",
    instructions="당신은 전문 데이터 분석가입니다. 데이터를 분석하고 인사이트를 제공합니다.",
    model="gpt-4o",
    tools=[
        {"type": "code_interpreter"},  # 코드 실행 도구
        {"type": "file_search"},       # 파일 검색 도구
    ]
)

# 2. Thread 생성 (대화 세션)
thread = client.beta.threads.create()

# 3. 메시지 추가
message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="1부터 100까지의 소수를 구하고, 그 분포를 분석해주세요."
)

# 4. Run 생성 및 실행 (스트리밍)
from openai import AssistantEventHandler

class EventHandler(AssistantEventHandler):
    def on_text_created(self, text):
        print("\\nassistant > ", end="", flush=True)

    def on_text_delta(self, delta, snapshot):
        print(delta.value, end="", flush=True)

    def on_tool_call_created(self, tool_call):
        print(f"\\n\\n도구 실행: {tool_call.type}\\n", flush=True)

with client.beta.threads.runs.stream(
    thread_id=thread.id,
    assistant_id=assistant.id,
    event_handler=EventHandler(),
) as stream:
    stream.until_done()

# 5. 대화 계속하기
client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="결과를 차트로 시각화해주세요."
)

with client.beta.threads.runs.stream(
    thread_id=thread.id,
    assistant_id=assistant.id,
    event_handler=EventHandler(),
) as stream:
    stream.until_done()`}),e.jsx(o,{type:"important",children:t?"Assistants API는 베타 버전이므로 client.beta 네임스페이스를 사용합니다. API가 안정화되면 변경될 수 있으니 공식 문서를 주기적으로 확인하세요.":"The Assistants API is in beta, so it uses the client.beta namespace. As the API stabilizes, it may change, so check the official documentation regularly."})]}),r==="pricing"&&e.jsxs("section",{className:"guide-section",children:[e.jsx("h2",{children:t?"모델별 가격 비교":"Model Pricing Comparison"}),e.jsx("p",{children:t?"OpenAI API는 사용한 토큰 수에 따라 과금됩니다. 모델마다 가격이 다르며, 입력(Input)과 출력(Output) 토큰의 단가도 다릅니다.":"OpenAI API charges based on token usage. Pricing varies by model, and input and output tokens have different unit prices."}),e.jsx("h3",{children:t?"모델 사양 비교":"Model Specifications"}),e.jsx("div",{className:"comparison-table-wrapper",children:e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t?"모델":"Model"}),e.jsx("th",{children:t?"컨텍스트":"Context"}),e.jsx("th",{children:t?"최대 출력":"Max Output"}),e.jsx("th",{children:t?"입력 비용":"Input Cost"}),e.jsx("th",{children:t?"출력 비용":"Output Cost"}),e.jsx("th",{children:t?"속도":"Speed"}),e.jsx("th",{children:t?"멀티모달":"Multimodal"}),e.jsx("th",{children:t?"추론 능력":"Reasoning"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GPT-4o"})}),e.jsx("td",{children:"128K"}),e.jsx("td",{children:"16K"}),e.jsx("td",{children:"$2.50/1M"}),e.jsx("td",{children:"$10.00/1M"}),e.jsx("td",{children:t?"빠름":"Fast"}),e.jsx("td",{children:t?"텍스트, 이미지, 오디오":"Text, Image, Audio"}),e.jsx("td",{children:t?"높음":"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GPT-4 Turbo"})}),e.jsx("td",{children:"128K"}),e.jsx("td",{children:"4K"}),e.jsx("td",{children:"$10.00/1M"}),e.jsx("td",{children:"$30.00/1M"}),e.jsx("td",{children:t?"보통":"Medium"}),e.jsx("td",{children:t?"텍스트, 이미지":"Text, Image"}),e.jsx("td",{children:t?"높음":"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GPT-4"})}),e.jsx("td",{children:"8K"}),e.jsx("td",{children:"8K"}),e.jsx("td",{children:"$30.00/1M"}),e.jsx("td",{children:"$60.00/1M"}),e.jsx("td",{children:t?"느림":"Slow"}),e.jsx("td",{children:t?"텍스트":"Text"}),e.jsx("td",{children:t?"높음":"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"o1"})}),e.jsx("td",{children:"200K"}),e.jsx("td",{children:"100K"}),e.jsx("td",{children:"$15.00/1M"}),e.jsx("td",{children:"$60.00/1M"}),e.jsx("td",{children:t?"느림 (추론)":"Slow (Reasoning)"}),e.jsx("td",{children:t?"텍스트, 이미지":"Text, Image"}),e.jsx("td",{children:t?"매우 높음":"Very High"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"o3-mini"})}),e.jsx("td",{children:"200K"}),e.jsx("td",{children:"100K"}),e.jsx("td",{children:"$1.10/1M"}),e.jsx("td",{children:"$4.40/1M"}),e.jsx("td",{children:t?"보통 (추론)":"Medium (Reasoning)"}),e.jsx("td",{children:t?"텍스트":"Text"}),e.jsx("td",{children:t?"높음":"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GPT-4o mini"})}),e.jsx("td",{children:"128K"}),e.jsx("td",{children:"16K"}),e.jsx("td",{children:"$0.15/1M"}),e.jsx("td",{children:"$0.60/1M"}),e.jsx("td",{children:t?"매우 빠름":"Very Fast"}),e.jsx("td",{children:t?"텍스트, 이미지":"Text, Image"}),e.jsx("td",{children:t?"보통":"Medium"})]})]})]})}),e.jsx("h3",{children:t?"벤치마크 성능 비교":"Benchmark Performance"}),e.jsx("div",{className:"comparison-table-wrapper",children:e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t?"벤치마크":"Benchmark"}),e.jsx("th",{children:"GPT-4o"}),e.jsx("th",{children:"GPT-4 Turbo"}),e.jsx("th",{children:"o1"}),e.jsx("th",{children:"GPT-4o mini"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"MMLU"})}),e.jsx("td",{children:"88.7%"}),e.jsx("td",{children:"86.4%"}),e.jsx("td",{children:"92.3%"}),e.jsx("td",{children:"82.0%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["HumanEval (",t?"코딩":"Coding",")"]})}),e.jsx("td",{children:"90.2%"}),e.jsx("td",{children:"86.6%"}),e.jsx("td",{children:"92.4%"}),e.jsx("td",{children:"87.0%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"MATH"})}),e.jsx("td",{children:"76.6%"}),e.jsx("td",{children:"72.2%"}),e.jsx("td",{children:"94.8%"}),e.jsx("td",{children:"70.2%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GPQA Diamond"})}),e.jsx("td",{children:"53.6%"}),e.jsx("td",{children:"49.1%"}),e.jsx("td",{children:"78.0%"}),e.jsx("td",{children:"40.2%"})]})]})]})}),e.jsx(o,{type:"important",children:t?"가격은 수시로 변경될 수 있습니다. 최신 가격은 openai.com/pricing에서 확인하세요.":"Pricing may change at any time. Check openai.com/pricing for the latest rates."}),e.jsx("h2",{children:t?"토큰 계산법":"Token Counting"}),e.jsx("p",{children:t?"토큰은 텍스트의 조각입니다. 영어는 약 1단어 = 1.3토큰, 한국어는 약 1글자 = 2~3토큰으로 계산됩니다. tiktoken 라이브러리로 정확한 토큰 수를 계산할 수 있습니다.":"Tokens are pieces of text. English averages about 1 word = 1.3 tokens, while Korean averages about 1 character = 2-3 tokens. Use the tiktoken library for precise token counting."}),e.jsx(i,{language:"python",code:`import tiktoken

# GPT-4o 모델의 토크나이저 로드
encoding = tiktoken.encoding_for_model("gpt-4o")

# 토큰 수 계산
text_en = "Hello, how are you today?"
text_ko = "안녕하세요, 오늘 어떠세요?"

tokens_en = encoding.encode(text_en)
tokens_ko = encoding.encode(text_ko)

print(f"영어: '{text_en}'")
print(f"  -> {len(tokens_en)} 토큰: {tokens_en}")

print(f"한국어: '{text_ko}'")
print(f"  -> {len(tokens_ko)} 토큰: {tokens_ko}")

# 비용 계산 함수
def estimate_cost(input_tokens, output_tokens, model="gpt-4o"):
    pricing = {
        "gpt-4o":      {"input": 2.50, "output": 10.00},
        "gpt-4o-mini": {"input": 0.15, "output": 0.60},
    }
    p = pricing[model]
    input_cost = (input_tokens / 1_000_000) * p["input"]
    output_cost = (output_tokens / 1_000_000) * p["output"]
    return input_cost + output_cost

cost = estimate_cost(1000, 500, "gpt-4o")
print(f"\\nGPT-4o 예상 비용 (입력 1000 + 출력 500 토큰): $" + f"{cost:.6f}")`}),e.jsx("h2",{children:t?"비용 최적화 전략":"Cost Optimization Strategies"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:t?"적절한 모델 선택":"Choose the Right Model"})," -"," ",t?"간단한 작업에는 gpt-4o-mini를, 복잡한 작업에만 gpt-4o를 사용하세요.":"Use gpt-4o-mini for simple tasks and gpt-4o only for complex ones."]}),e.jsxs("li",{children:[e.jsx("strong",{children:t?"시스템 프롬프트 최적화":"Optimize System Prompts"})," -"," ",t?"시스템 프롬프트를 간결하게 유지하세요. 불필요한 지시는 토큰을 낭비합니다.":"Keep system prompts concise. Unnecessary instructions waste tokens."]}),e.jsxs("li",{children:[e.jsx("strong",{children:t?"max_tokens 설정":"Set max_tokens"})," -"," ",t?"응답 길이를 제한하여 불필요한 토큰 생성을 방지하세요.":"Limit response length to prevent unnecessary token generation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:t?"대화 기록 관리":"Manage Conversation History"})," -"," ",t?"오래된 대화 기록은 요약하거나 삭제하여 입력 토큰을 절약하세요.":"Summarize or remove old conversation history to save input tokens."]}),e.jsxs("li",{children:[e.jsx("strong",{children:t?"캐싱 활용":"Use Caching"})," -"," ",t?"동일한 요청에 대한 응답을 캐싱하여 중복 API 호출을 방지하세요.":"Cache responses for identical requests to avoid duplicate API calls."]}),e.jsxs("li",{children:[e.jsx("strong",{children:t?"Batch API 활용":"Use Batch API"})," -"," ",t?"실시간 응답이 필요 없는 대량 요청은 Batch API를 사용하면 50% 할인됩니다.":"For bulk requests that don't need real-time responses, the Batch API offers a 50% discount."]})]}),e.jsx(o,{type:"tip",children:t?"OpenAI 대시보드에서 Usage 페이지를 통해 일별/월별 API 사용량과 비용을 실시간으로 모니터링할 수 있습니다. 예산 한도를 설정하여 예상치 못한 과금을 방지하세요.":"Monitor daily/monthly API usage and costs in real-time through the Usage page on the OpenAI dashboard. Set budget limits to prevent unexpected charges."})]}),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{className:"guide-nav-btn prev",onClick:d,disabled:n===0,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"}),e.jsx("span",{children:n>0?t?s[n-1].ko:s[n-1].en:t?"이전":"Previous"})]}),e.jsxs("button",{className:"guide-nav-btn next",onClick:h,disabled:n===s.length-1,children:[e.jsx("span",{children:n<s.length-1?t?s[n+1].ko:s[n+1].en:t?"다음":"Next"}),e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]})})]})}export{_ as default};
