# Services — 오늘 하루, 수고했어

## Service Architecture

단일 엔드포인트 오케스트레이션 패턴:

```
Client Request (POST /api/analyze)
    │
    v
AnalyzeController (오케스트레이터)
    │
    ├─ 1. PromptBuilder.buildAnalysisPrompt(content)
    │
    ├─ 2. BedrockService.analyzeWithClaude(content)
    │      └─ Returns: summary, comfort, mood params, searchQueries
    │
    ├─ 3. YouTubeService.searchMusic(searchQueries)
    │      └─ Returns: YouTubeTrack[]
    │
    └─ 4. Response Assembly → AnalyzeResponse
```

## Service Definitions

### AnalyzeController (Orchestrator)
- **Responsibility**: 요청 검증, 서비스 호출 조율, 응답 조합
- **Pattern**: Sequential orchestration (AI 분석 → YouTube 검색)
- **Error Handling**: 각 서비스 실패 시 적절한 에러 응답

### BedrockService
- **Responsibility**: Amazon Bedrock Claude API 통신
- **Pattern**: Request-Response with retry
- **Configuration**: Model ID, region, credentials (환경변수)

### YouTubeService
- **Responsibility**: YouTube Data API v3 검색 호출
- **Pattern**: Parallel search (3개 키워드 동시 검색) → 결과 병합 → 중복 제거
- **Configuration**: API Key (환경변수)

### PromptBuilder
- **Responsibility**: 구조화된 프롬프트 생성
- **Pattern**: Template-based prompt construction
- **Output Format**: JSON 응답을 강제하는 프롬프트

### StorageService (Client-side)
- **Responsibility**: localStorage 기반 CRUD
- **Pattern**: Repository pattern (in-memory with persistence)
- **Key**: `sugo-entries` (JSON array)
