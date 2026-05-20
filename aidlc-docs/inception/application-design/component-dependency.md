# Component Dependencies — 오늘 하루, 수고했어

## Dependency Matrix

```
+------------------+     +------------------+     +------------------+
|   Frontend       |     |   Backend        |     |   External       |
+------------------+     +------------------+     +------------------+
| HomePage         |     | AnalyzeController|---->| Amazon Bedrock   |
| DiaryPage -------+---->| PromptBuilder    |     | (Claude)         |
| ResultPage       |     | BedrockService   |     +------------------+
| HistoryPage      |     | YouTubeService --+---->| YouTube Data API |
| DetailPage       |     +------------------+     | (v3 Search)      |
+------------------+                              +------------------+
        |
        v
+------------------+
| localStorage     |
| (StorageService) |
+------------------+
```

## Communication Patterns

| From | To | Pattern | Protocol |
|------|----|---------|----------|
| Frontend (DiaryPage) | Backend (AnalyzeController) | HTTP POST | REST JSON |
| AnalyzeController | BedrockService | Internal call | In-process |
| AnalyzeController | YouTubeService | Internal call | In-process |
| BedrockService | Amazon Bedrock | HTTPS | AWS SDK |
| YouTubeService | YouTube API | HTTPS | REST JSON |
| Frontend (all pages) | StorageService | Direct call | In-process |

## Data Flow

```
1. User writes diary → DiaryPage
2. DiaryPage → POST /api/analyze { content }
3. AnalyzeController → BedrockService.analyzeWithClaude(content)
4. BedrockService → Bedrock Claude → { summary, comfort, mood, searchQueries }
5. AnalyzeController → YouTubeService.searchMusic(searchQueries)
6. YouTubeService → YouTube API → YouTubeTrack[]
7. AnalyzeController → Response { summary, comfort, playlist, mood }
8. ResultPage renders response + MoodBackground + ParticleEffect
9. StorageService saves DiaryEntry to localStorage
```

## Dependency Direction
- Frontend → Backend: 단방향 (HTTP)
- Backend → External APIs: 단방향 (HTTPS)
- Frontend → localStorage: 직접 접근 (StorageService 래퍼)
- Backend 내부: Controller → Services (의존성 주입)
