# 🎵 오늘 하루, 수고했어

일기를 쓰면 AI가 하루를 요약하고, 따뜻하게 위로해주고, 그 하루에 어울리는 플레이리스트를 만들어주는 감성 웹앱.

## 주요 기능

- ✏️ **일기 작성** — 자유롭게 하루를 기록
- 🤖 **AI 분석** — Claude가 하루를 요약하고 위로 메시지 생성
- 🎵 **플레이리스트 추천** — 감정에 맞는 YouTube 음악 10~12곡 자동 추천
- 🎨 **감성 비주얼** — 기분에 따른 배경 그라데이션 + 파티클 애니메이션
- 📚 **기록 보기** — 캘린더 뷰 + 카드 리스트로 과거 기록 열람
- 🎧 **하단 재생 바** — 화면 전환해도 음악이 끊기지 않는 글로벌 플레이어

## 기술 스택

| 영역 | 기술 |
|------|------|
| Frontend | React, Vite, TypeScript, Tailwind CSS, tsparticles |
| Backend | Node.js, Express, TypeScript |
| AI | Amazon Bedrock (Claude) |
| Music | YouTube Data API v3 |
| Storage | localStorage (MVP) |

## 프로젝트 구조

```
sugo/
├── client/          # React SPA (Vite)
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── contexts/
│       ├── services/
│       └── utils/
├── server/          # Express API
│   └── src/
│       ├── controllers/
│       ├── services/
│       └── types/
└── package.json     # Monorepo scripts
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
npm run install:all
```

### 2. 환경변수 설정

```bash
cp server/.env.example server/.env
```

`server/.env` 파일을 편집하여 실제 값을 입력:

```
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
BEDROCK_MODEL_ID=us.anthropic.claude-opus-4-6-v1
YOUTUBE_API_KEY=your_youtube_api_key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## 사전 요구사항

- Node.js 18+
- AWS 계정 (Bedrock Claude 모델 접근 권한)
- YouTube Data API v3 키 ([Google Cloud Console](https://console.cloud.google.com/)에서 발급)

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 프론트엔드 + 백엔드 동시 실행 |
| `npm run dev:server` | 백엔드만 실행 |
| `npm run dev:client` | 프론트엔드만 실행 |
| `npm run install:all` | 양쪽 의존성 설치 |
| `npm run test:server` | 서버 유닛 테스트 |

## 라이선스

MIT
