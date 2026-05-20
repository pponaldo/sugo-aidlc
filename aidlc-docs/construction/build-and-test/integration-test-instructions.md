# Integration Test Instructions — 오늘 하루, 수고했어

## End-to-End Flow Test (수동)

### Prerequisites
- Server 실행 중 (`npm run dev:server`)
- 유효한 AWS credentials 및 YouTube API Key 설정

### Test Scenario 1: 정상 플로우
```bash
curl -X POST http://localhost:3001/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"content": "오늘 회사에서 프레젠테이션을 했는데 생각보다 잘 됐다. 동료들이 칭찬해줘서 기분이 좋았어."}'
```

**Expected Response:**
- HTTP 200
- JSON with `summary`, `comfort`, `mood`, `playlist` fields
- `mood.color`: 5가지 중 하나
- `mood.energy`, `mood.valence`: 0~1 범위
- `playlist`: 10~12개 YouTubeTrack 배열

### Test Scenario 2: 입력 검증 실패
```bash
# 빈 입력
curl -X POST http://localhost:3001/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"content": ""}'
# Expected: 400 + {"error": "일기 내용을 입력해주세요"}

# 10자 미만
curl -X POST http://localhost:3001/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"content": "짧은글"}'
# Expected: 400 + {"error": "최소 10자 이상 입력해주세요"}
```

### Test Scenario 3: Client-Server 통합
1. `npm run dev` 로 양쪽 실행
2. http://localhost:5173 접속
3. "오늘 일기" 클릭 → 일기 작성 (10자 이상) → "오늘의 음악 받기" 클릭
4. 결과 화면 확인: 요약, 위로 메시지, 플레이리스트, 배경 색상
5. "지난 기록" 에서 방금 쓴 기록 확인

## API Contract Validation

| Field | Type | Validation |
|-------|------|------------|
| `summary` | string | 비어있지 않음 |
| `comfort` | string | 비어있지 않음 |
| `mood.energy` | number | 0 ≤ x ≤ 1 |
| `mood.valence` | number | 0 ≤ x ≤ 1 |
| `mood.vibe` | string | 비어있지 않음 |
| `mood.color` | string | 5가지 허용값 중 하나 |
| `playlist` | array | 1~12개 항목 |
| `playlist[].videoId` | string | 비어있지 않음 |
