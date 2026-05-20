# Unit of Work Dependencies — 오늘 하루, 수고했어

## Dependency Matrix

| From | To | Type | Description |
|------|----|------|-------------|
| client | server | HTTP | POST /api/analyze 호출 |
| server | Amazon Bedrock | HTTPS | Claude AI 분석 요청 |
| server | YouTube API | HTTPS | 음악 검색 요청 |
| client | localStorage | Direct | 기록 저장/조회 |

## Dependency Direction

```
client ──HTTP──> server ──HTTPS──> Amazon Bedrock (Claude)
                   │
                   └──HTTPS──> YouTube Data API v3
```

## Inter-Unit Contract

### POST /api/analyze

**Request:**
```json
{
  "content": "string (10~2000자 일기 텍스트)"
}
```

**Response:**
```json
{
  "summary": "string (하루 요약 2~3문장)",
  "comfort": "string (위로 메시지 2~3문장)",
  "mood": {
    "energy": 0.0-1.0,
    "valence": 0.0-1.0,
    "vibe": "string (플레이리스트 부제목)",
    "color": "warm-sunset|cool-night|fresh-morning|rainy-day|cozy-evening"
  },
  "playlist": [
    {
      "videoId": "string",
      "title": "string",
      "channelName": "string",
      "thumbnailUrl": "string"
    }
  ]
}
```

## Development Order & Rationale
1. **server** (먼저) — API가 준비되어야 프론트엔드에서 실제 데이터로 개발 가능
2. **client** (이후) — 완성된 API에 연결하여 전체 플로우 검증
