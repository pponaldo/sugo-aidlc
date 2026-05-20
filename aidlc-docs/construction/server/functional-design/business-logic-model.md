# Business Logic Model — server

## Core Flow: Diary Analysis Pipeline

```
POST /api/analyze { content }
    │
    ├─ 1. Input Validation
    │     └─ content: string, 10~2000자
    │
    ├─ 2. AI Analysis (with retry)
    │     ├─ PromptBuilder.buildAnalysisPrompt(content)
    │     ├─ BedrockService.analyzeWithClaude(prompt)
    │     │     Model: us.anthropic.claude-opus-4-6-v1
    │     │     Retry: max 2 attempts on failure
    │     └─ Parse JSON response → AIAnalysisResult
    │
    ├─ 3. YouTube Search
    │     ├─ Extract searchQueries[3] from AI result
    │     ├─ Parallel search: 3 queries × 4 results each
    │     │     Filter: videoCategoryId=10 (Music)
    │     ├─ Merge results
    │     └─ Deduplicate by videoId → 10~12 tracks
    │
    └─ 4. Response Assembly
          └─ { summary, comfort, mood, playlist }
```

## Prompt Design

### System Prompt
```
너는 감성적이고 따뜻한 일기 분석가야.
사용자의 일기를 읽고 아래 형식으로 JSON을 반환해.
판단하지 말고, 있는 그대로 공감해줘.
반말로 편하게 말해줘.
```

### User Prompt Template
```
오늘의 일기:
{diaryContent}

아래 JSON 형식으로 응답해줘:
{
  "summary": "2~3문장으로 하루를 담백하게 요약",
  "comfort": "2~3문장으로 따뜻하게 위로하고 응원. 공감 먼저, 그 다음 응원.",
  "mood": {
    "energy": 0.0~1.0 (활력 수준),
    "valence": 0.0~1.0 (긍정 수준),
    "vibe": "플레이리스트에 어울리는 한 줄 부제목",
    "color": "warm-sunset|cool-night|fresh-morning|rainy-day|cozy-evening 중 하나"
  },
  "searchQueries": ["분위기에 맞는 음악 검색 키워드1", "키워드2", "키워드3"]
}
```

## YouTube Search Strategy

1. AI가 생성한 `searchQueries[3]` 사용
2. 각 키워드로 YouTube Data API v3 Search 호출:
   - `part=snippet`
   - `type=video`
   - `videoCategoryId=10`
   - `maxResults=4`
   - `q={keyword}`
3. 3개 검색 결과를 병합 (최대 12곡)
4. `videoId` 기준 중복 제거
5. 최종 10~12곡 반환

## Error Handling Strategy

### Bedrock 호출 실패
- 1차 실패: 즉시 재시도 (동일 요청)
- 2차 실패: 에러 응답 반환 `{ error: "AI 분석에 실패했습니다. 다시 시도해주세요." }`

### YouTube 검색 실패
- 개별 키워드 실패: 나머지 결과로 진행 (부분 성공 허용)
- 전체 실패: 에러 응답 반환 `{ error: "음악 검색에 실패했습니다." }`

### Input Validation 실패
- 400 Bad Request + 에러 메시지
