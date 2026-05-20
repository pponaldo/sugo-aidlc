# Application Design — 오늘 하루, 수고했어

## Overview

감성 일기 웹앱의 전체 애플리케이션 설계. React SPA 프론트엔드 + Express 백엔드 + 외부 API 연동 구조.

## Architecture

```
+---------------------------------------------------+
|                  Frontend (React + Vite)           |
|                                                   |
|  Pages: Home, Diary, Result, History, Detail      |
|  State: useState / useContext                     |
|  Routing: React Router                            |
|  Storage: localStorage (StorageService)           |
|  Visual: Tailwind CSS + tsparticles              |
+---------------------------------------------------+
                        | HTTP POST /api/analyze
                        v
+---------------------------------------------------+
|                  Backend (Express)                 |
|                                                   |
|  AnalyzeController (orchestrator)                 |
|    ├── PromptBuilder                              |
|    ├── BedrockService → Amazon Bedrock (Claude)   |
|    └── YouTubeService → YouTube Data API v3       |
+---------------------------------------------------+
```

## Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | React Router | SPA 다중 페이지 지원, 기록 상세 URL 공유 가능 |
| API Structure | 단일 엔드포인트 | 클라이언트 단순화, 한 번의 호출로 전체 결과 |
| State Management | useState/useContext | MVP 규모에 적합, 추가 의존성 불필요 |
| Backend Pattern | Sequential Orchestration | AI 분석 결과가 YouTube 검색의 입력이므로 순차 필수 |

## Component Summary
- **Frontend Pages**: 5개 (Home, Diary, Result, History, Detail)
- **UI Components**: 11개 (DiaryInput, LoadingAnimation, SummaryCard 등)
- **Backend Services**: 4개 (Controller, Bedrock, YouTube, PromptBuilder)
- **Shared Utilities**: 3개 (StorageService, ColorMapper, types)

## References
- Components: `components.md`
- Methods: `component-methods.md`
- Services: `services.md`
- Dependencies: `component-dependency.md`
