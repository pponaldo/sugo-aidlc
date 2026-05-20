# Requirements Verification Questions

아래 질문에 답변해 주세요. 각 질문의 [Answer]: 뒤에 선택한 알파벳을 입력해 주세요.

---

## Question 1
프론트엔드 프레임워크로 무엇을 사용할까요?

A) React (Vite + React)
B) Next.js (React 기반 풀스택)
C) Vue.js (Vite + Vue)
D) Svelte / SvelteKit
X) Other (please describe after [Answer]: tag below)

[Answer]: A 

---

## Question 2
AI 분석(하루 요약, 위로 메시지, 음악 파라미터 추출)에 사용할 LLM은 무엇인가요?

A) OpenAI GPT (gpt-4o / gpt-4o-mini)
B) Amazon Bedrock (Claude)
C) Google Gemini
D) 로컬 LLM (Ollama 등)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

---

## Question 3
백엔드 구조를 어떻게 구성할까요?

A) 프론트엔드에서 직접 AI API 호출 (서버리스, 백엔드 없음 — API 키는 환경변수)
B) Node.js/Express 백엔드 서버
C) AWS Lambda + API Gateway (서버리스)
D) Next.js API Routes (풀스택)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

---

## Question 4
MVP 단계에서 사용자 인증(로그인)이 필요한가요?

A) 필요 없음 — localStorage만 사용 (PRD에 명시된 MVP 방식)
B) 간단한 소셜 로그인 (Google OAuth)
C) 이메일/비밀번호 인증
X) Other (please describe after [Answer]: tag below)

[Answer]: A

---

## Question 5
배포 환경은 어디를 계획하고 있나요?

A) Vercel (프론트엔드 + 서버리스 함수)
B) AWS (S3 + CloudFront + Lambda)
C) Netlify
D) 로컬 개발 환경만 (배포는 나중에)
X) Other (please describe after [Answer]: tag below)

[Answer]: D

---

## Question 6
UI 스타일링 방식은 무엇을 선호하나요?

A) Tailwind CSS
B) CSS Modules
C) styled-components (CSS-in-JS)
D) shadcn/ui + Tailwind CSS
X) Other (please describe after [Answer]: tag below)

[Answer]: A

---

## Question 7
파티클 애니메이션 구현 방식은?

A) Canvas 기반 직접 구현 (가벼움)
B) tsparticles 라이브러리 사용
C) Three.js / React Three Fiber (3D)
D) CSS 애니메이션만 (간단한 효과)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

---

## Question 8
다국어 지원이 필요한가요?

A) 한국어만 지원
B) 한국어 + 영어
C) 추후 다국어 확장 고려하되 MVP는 한국어만
X) Other (please describe after [Answer]: tag below)

[Answer]: A

---

## Question 9: Security Extensions
이 프로젝트에 보안 확장 규칙을 적용할까요?

A) Yes — 모든 보안 규칙을 blocking constraint로 적용 (프로덕션 수준 앱에 권장)
B) No — 보안 규칙 건너뛰기 (PoC, 프로토타입, 실험적 프로젝트에 적합)
X) Other (please describe after [Answer]: tag below)

[Answer]: B

---

## Question 10: Property-Based Testing Extension
이 프로젝트에 Property-Based Testing(PBT) 규칙을 적용할까요?

A) Yes — 모든 PBT 규칙을 blocking constraint로 적용 (비즈니스 로직, 데이터 변환이 있는 프로젝트에 권장)
B) Partial — 순수 함수와 직렬화 round-trip에만 PBT 규칙 적용
C) No — PBT 규칙 건너뛰기 (단순 CRUD, UI 전용 프로젝트에 적합)
X) Other (please describe after [Answer]: tag below)

[Answer]: B
