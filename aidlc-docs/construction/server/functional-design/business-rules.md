# Business Rules — server

## Input Validation Rules

| Rule | Condition | Action |
|------|-----------|--------|
| BR-01 | content가 없거나 빈 문자열 | 400 에러: "일기 내용을 입력해주세요" |
| BR-02 | content 길이 < 10자 | 400 에러: "최소 10자 이상 입력해주세요" |
| BR-03 | content 길이 > 2000자 | 400 에러: "최대 2000자까지 입력 가능합니다" |
| BR-04 | content가 string 타입이 아님 | 400 에러: "올바른 형식이 아닙니다" |

## AI Analysis Rules

| Rule | Condition | Action |
|------|-----------|--------|
| BR-05 | Bedrock 호출 실패 (1차) | 즉시 재시도 |
| BR-06 | Bedrock 호출 실패 (2차) | 500 에러 반환 |
| BR-07 | AI 응답이 유효한 JSON이 아님 | 재시도 (BR-05/06 적용) |
| BR-08 | AI 응답에 필수 필드 누락 | 재시도 (BR-05/06 적용) |
| BR-09 | energy/valence 값이 0~1 범위 밖 | 0~1로 클램핑 |
| BR-10 | color 값이 허용 목록에 없음 | "cozy-evening"으로 기본값 |

## YouTube Search Rules

| Rule | Condition | Action |
|------|-----------|--------|
| BR-11 | searchQueries가 3개 미만 | 있는 키워드만으로 검색 |
| BR-12 | 개별 키워드 검색 실패 | 나머지 결과로 진행 |
| BR-13 | 전체 검색 실패 | 500 에러 반환 |
| BR-14 | 중복 videoId 발견 | 첫 번째 결과만 유지 |
| BR-15 | 최종 결과 < 10곡 | 있는 만큼만 반환 (최소 1곡) |
| BR-16 | 최종 결과 > 12곡 | 12곡으로 자르기 |

## Response Assembly Rules

| Rule | Condition | Action |
|------|-----------|--------|
| BR-17 | AI 분석 + YouTube 모두 성공 | 200 + 전체 응답 반환 |
| BR-18 | AI 분석 성공 + YouTube 부분 실패 | 200 + 있는 곡만 반환 |
| BR-19 | AI 분석 실패 | 500 에러 (YouTube 검색 시도 안 함) |

## Allowed Color Values
- `warm-sunset`
- `cool-night`
- `fresh-morning`
- `rainy-day`
- `cozy-evening`
