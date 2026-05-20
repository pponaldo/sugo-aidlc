# Story-Unit Mapping — 오늘 하루, 수고했어

## Unit 1: Backend (server/)

| Story | Description | Relevance |
|-------|-------------|-----------|
| US-04 | 일기 제출 (API 호출) | API 엔드포인트 구현 |
| US-05 | 하루 요약 (AI 생성) | Bedrock 호출, 프롬프트 설계 |
| US-06 | 위로 메시지 (AI 생성) | Bedrock 호출, 프롬프트 설계 |
| US-07 | 감성 비주얼 파라미터 (AI 생성) | Bedrock 응답에 mood 포함 |
| US-08 | 플레이리스트 (YouTube 검색) | YouTube API 호출 |

## Unit 2: Frontend (client/)

| Story | Description | Relevance |
|-------|-------------|-----------|
| US-01 | 메인 화면 진입 | HomePage 라우팅 |
| US-02 | 일기 텍스트 입력 | DiaryPage, DiaryInput |
| US-03 | 입력 유효성 검증 | DiaryInput 글자 수 제한 |
| US-04 | 일기 제출 | DiaryPage → API 호출 + LoadingAnimation |
| US-05 | 하루 요약 확인 | ResultPage, SummaryCard |
| US-06 | 위로 메시지 확인 | ResultPage, ComfortMessage |
| US-07 | 감성 비주얼 체험 | MoodBackground, ParticleEffect |
| US-08 | 플레이리스트 목록 | PlaylistSection |
| US-09 | 음악 재생 | YouTubePlayer |
| US-10 | 기록 리스트 조회 | HistoryPage, HistoryCard |
| US-11 | 캘린더 뷰 조회 | CalendarView |
| US-12 | 기록 상세 보기 | DetailPage |
| US-13 | 다시 쓰기 | ResultPage 버튼 |

## Coverage Summary

| Unit | Stories | Coverage |
|------|---------|----------|
| server | US-04, US-05, US-06, US-07, US-08 | 5/13 (백엔드 관련) |
| client | US-01~US-13 | 13/13 (전체 UI) |

**Note**: US-04~US-08은 양쪽 유닛에 걸쳐 있음 (프론트에서 호출, 백엔드에서 처리)
