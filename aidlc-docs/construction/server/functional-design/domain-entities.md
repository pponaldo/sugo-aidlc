# Domain Entities — server

## Request/Response Models

### AnalyzeRequest
```typescript
interface AnalyzeRequest {
  content: string  // 10~2000자 일기 텍스트
}
```

### AnalyzeResponse
```typescript
interface AnalyzeResponse {
  summary: string         // 하루 요약 (2~3문장)
  comfort: string         // 위로/응원 메시지 (2~3문장)
  mood: MoodParams        // 감정 파라미터
  playlist: YouTubeTrack[] // 10~12곡
}
```

### ErrorResponse
```typescript
interface ErrorResponse {
  error: string  // 사용자 친화적 에러 메시지
}
```

## Internal Models

### MoodParams
```typescript
interface MoodParams {
  energy: number   // 0.0~1.0 (활력)
  valence: number  // 0.0~1.0 (긍정)
  vibe: string     // 플레이리스트 부제목
  color: ColorKeyword
}

type ColorKeyword = 'warm-sunset' | 'cool-night' | 'fresh-morning' | 'rainy-day' | 'cozy-evening'
```

### AIAnalysisResult (Bedrock 응답 파싱 결과)
```typescript
interface AIAnalysisResult {
  summary: string
  comfort: string
  mood: MoodParams
  searchQueries: string[]  // 3개 검색 키워드
}
```

### YouTubeTrack
```typescript
interface YouTubeTrack {
  videoId: string
  title: string
  channelName: string
  thumbnailUrl: string
}
```

## Configuration

### Environment Variables
```typescript
interface ServerConfig {
  PORT: number                    // 서버 포트 (default: 3001)
  AWS_REGION: string             // Bedrock 리전 (default: us-east-1)
  BEDROCK_MODEL_ID: string       // us.anthropic.claude-opus-4-6-v1
  YOUTUBE_API_KEY: string        // YouTube Data API v3 키
}
```
