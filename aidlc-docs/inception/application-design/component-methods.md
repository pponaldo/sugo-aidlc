# Component Methods — 오늘 하루, 수고했어

## Backend Methods

### AnalyzeController
```typescript
// POST /api/analyze — 일기 분석 + 플레이리스트 생성
analyzeDiary(req: { body: { content: string } }): Promise<AnalyzeResponse>
```

### BedrockService
```typescript
// Claude에게 일기 분석 요청 (요약 + 위로 + 음악 파라미터)
analyzeWithClaude(diaryContent: string): Promise<AIAnalysisResult>
```

### YouTubeService
```typescript
// 검색 키워드로 YouTube 음악 검색
searchMusic(queries: string[]): Promise<YouTubeTrack[]>
```

### PromptBuilder
```typescript
// 일기 내용으로 Claude 프롬프트 구성
buildAnalysisPrompt(diaryContent: string): string
```

## Frontend Methods

### StorageService
```typescript
// 기록 저장
saveEntry(entry: DiaryEntry): void
// 전체 기록 조회 (최근순)
getAllEntries(): DiaryEntry[]
// 특정 기록 조회
getEntryById(id: string): DiaryEntry | null
// 특정 날짜 기록 조회
getEntriesByMonth(year: number, month: number): DiaryEntry[]
```

### ColorMapper
```typescript
// color 키워드 → CSS 그라데이션 반환
getGradient(colorKeyword: string): string
// color 키워드 → 파티클 설정 반환
getParticleConfig(colorKeyword: string, energy: number): ParticleConfig
```

## Shared Types
```typescript
interface AnalyzeResponse {
  summary: string
  comfort: string
  playlist: YouTubeTrack[]
  mood: MoodParams
}

interface MoodParams {
  energy: number
  valence: number
  vibe: string
  color: string
}

interface YouTubeTrack {
  videoId: string
  title: string
  channelName: string
  thumbnailUrl: string
}

interface DiaryEntry {
  id: string
  date: string
  content: string
  summary: string
  comfort: string
  playlist: YouTubeTrack[]
  mood: MoodParams
}
```

**Note**: 상세 비즈니스 로직(프롬프트 내용, 검색 전략 등)은 Functional Design에서 정의
