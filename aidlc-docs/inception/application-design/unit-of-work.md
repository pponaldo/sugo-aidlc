# Units of Work — 오늘 하루, 수고했어

## Project Structure (Monorepo)

```
sugo/
├── client/                  # Unit 1: Frontend
│   ├── package.json
│   ├── vite.config.ts
│   ├── index.html
│   ├── tailwind.config.js
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── pages/
│       ├── components/
│       ├── services/
│       ├── types/
│       └── utils/
├── server/                  # Unit 2: Backend
│   ├── package.json
│   └── src/
│       ├── index.ts
│       ├── controllers/
│       ├── services/
│       └── types/
└── package.json             # Root (scripts for both)
```

---

## Unit 1: Backend (server/)

| 항목 | 내용 |
|------|------|
| **Name** | server |
| **Type** | Express REST API |
| **Responsibility** | AI 분석 오케스트레이션, YouTube 검색, API 제공 |
| **Tech Stack** | Node.js, Express, TypeScript, AWS SDK (Bedrock) |
| **Development Order** | 1st (먼저 개발) |

### Components
- AnalyzeController — POST /api/analyze 엔드포인트
- BedrockService — Amazon Bedrock Claude 호출
- YouTubeService — YouTube Data API v3 검색
- PromptBuilder — 프롬프트 구성

---

## Unit 2: Frontend (client/)

| 항목 | 내용 |
|------|------|
| **Name** | client |
| **Type** | React SPA |
| **Responsibility** | UI 렌더링, 사용자 상호작용, 로컬 저장소 관리 |
| **Tech Stack** | React, Vite, TypeScript, Tailwind CSS, tsparticles, React Router |
| **Development Order** | 2nd (Backend API 완성 후) |

### Components
- Pages: Home, Diary, Result, History, Detail
- UI: DiaryInput, LoadingAnimation, SummaryCard, ComfortMessage, PlaylistSection, YouTubePlayer, MoodBackground, ParticleEffect, HistoryCard, CalendarView, Navigation
- Services: StorageService, ColorMapper
