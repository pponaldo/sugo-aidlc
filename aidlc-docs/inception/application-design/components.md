# Components — 오늘 하루, 수고했어

## Frontend Components (React)

### Pages

| Component | Purpose | Route |
|-----------|---------|-------|
| `HomePage` | 메인 진입 화면 — 일기 쓰기/기록 보기 선택 | `/` |
| `DiaryPage` | 일기 작성 화면 | `/diary` |
| `ResultPage` | AI 분석 결과 + 플레이리스트 표시 | `/result` |
| `HistoryPage` | 과거 기록 리스트 + 캘린더 | `/history` |
| `DetailPage` | 기록 상세 보기 | `/history/:id` |

### UI Components

| Component | Purpose |
|-----------|---------|
| `DiaryInput` | 텍스트 에어리어 + 글자 수 카운터 + 제출 버튼 |
| `LoadingAnimation` | AI 분석 중 감성 로딩 애니메이션 |
| `SummaryCard` | 하루 요약 표시 카드 |
| `ComfortMessage` | 위로/응원 메시지 (강조 타이포그래피) |
| `PlaylistSection` | 플레이리스트 목록 (썸네일 + 제목 + 채널) |
| `YouTubePlayer` | YouTube iframe 임베드 플레이어 |
| `MoodBackground` | 감정 기반 그라데이션 배경 |
| `ParticleEffect` | tsparticles 기반 파티클 애니메이션 |
| `HistoryCard` | 기록 카드 (날짜, 요약, 색상 인디케이터) |
| `CalendarView` | 월별 캘린더 (감정 색상 점 표시) |
| `Navigation` | 하단/상단 네비게이션 |

## Backend Components (Express)

| Component | Purpose |
|-----------|---------|
| `AnalyzeController` | POST /api/analyze 요청 처리 |
| `BedrockService` | Amazon Bedrock Claude API 호출 |
| `YouTubeService` | YouTube Data API v3 검색 |
| `PromptBuilder` | AI 프롬프트 구성 |

## Shared/Utility

| Component | Purpose |
|-----------|---------|
| `StorageService` | localStorage CRUD 래퍼 |
| `ColorMapper` | color 키워드 → 그라데이션 CSS 매핑 |
| `types` | 공유 TypeScript 타입 정의 |
