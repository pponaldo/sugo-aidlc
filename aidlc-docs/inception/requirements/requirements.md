# Requirements Document — 오늘 하루, 수고했어

## Intent Analysis

| 항목 | 내용 |
|------|------|
| **User Request** | 일기를 쓰면 AI가 하루를 요약하고, 따뜻하게 위로해주고, 그 하루에 어울리는 플레이리스트를 만들어주는 감성 웹앱 |
| **Request Type** | New Project (Greenfield) |
| **Scope** | Multiple Components (Frontend + Backend + External APIs) |
| **Complexity** | Moderate |

---

## Functional Requirements

### FR-01: 일기 작성
- 자유 텍스트 입력 (최소 10자, 최대 2000자)
- 가이드 문구 표시: "오늘 하루를 편하게 들려줘. 길어도, 짧아도 괜찮아."
- 제출 버튼: "오늘의 음악 받기 🎵"
- AI 분석 중 감성 로딩 애니메이션 표시
- 글자 수 카운터 (선택)

### FR-02: AI 분석 (단일 API 호출로 3가지 동시 생성)
- **하루 요약**: 2~3문장, 담백하게, 판단 없이 있는 그대로
- **위로/응원 메시지**: 2~3문장, 따뜻한 톤, 공감 먼저 → 응원, 반말
- **음악 추천 파라미터**: energy(0~1), valence(0~1), vibe(부제목), color(배경 키워드), searchQueries(3개)

### FR-03: 플레이리스트 추천
- YouTube Data API v3 Search 엔드포인트 사용
- AI가 생성한 검색 키워드 3개로 각 4곡씩 검색
- 중복 제거 후 10~12곡 표시
- 표시 정보: 썸네일, 영상 제목, 채널명
- YouTube iframe 임베드 재생

### FR-04: 감성 비주얼
- AI 반환 color 키워드에 따른 배경 그라데이션 전환
- 색상 매핑: warm-sunset, cool-night, fresh-morning, rainy-day, cozy-evening
- energy 값에 따른 파티클 애니메이션 속도/밀도 조절 (tsparticles)
- 결과 화면 진입 시 fade-in 전환 효과

### FR-05: 과거 기록
- 최근순 카드 리스트 (날짜, 요약 미리보기, 플레이리스트 부제목, 감정 색상)
- 월별 캘린더 뷰 (일기 쓴 날 감정 색상 점 표시)
- 기록 상세: 원본 일기, 요약, 위로 메시지, 플레이리스트 재현
- 저장소: localStorage (MVP)

### FR-06: 사용자 플로우
- 앱 진입 → 오늘 일기 / 지난 기록 선택
- 일기 작성 → AI 분석 (로딩) → 결과 화면 (요약 + 위로 + 플레이리스트)
- 결과 화면에서 공유/다시쓰기 가능
- 지난 기록 → 카드/캘린더 → 상세 보기

---

## Non-Functional Requirements

### NFR-01: 성능
- AI 분석 응답 시간: 10초 이내
- 페이지 초기 로딩: 3초 이내
- YouTube 검색 결과 표시: 5초 이내

### NFR-02: 사용성
- 모바일 우선 반응형 디자인
- 한국어 전용 UI
- 직관적인 단일 페이지 플로우

### NFR-03: 데이터
- localStorage 기반 (인증 없음)
- 브라우저 간 데이터 공유 불가 (MVP 제약)

---

## Technical Decisions

| 영역 | 선택 | 근거 |
|------|------|------|
| Frontend | React + Vite | 빠른 개발, HMR, 경량 |
| Styling | Tailwind CSS | 유틸리티 기반, 빠른 UI 구현 |
| Backend | Node.js + Express | AI API 프록시, YouTube API 호출 |
| AI | Amazon Bedrock (Claude) | 한국어 성능 우수, AWS 생태계 |
| Animation | tsparticles | 풍부한 파티클 효과, React 지원 |
| Storage | localStorage | MVP 단순성, 인증 불필요 |
| Language | 한국어 전용 | 타겟 사용자 기반 |
| Deployment | 로컬 개발 환경 | MVP 단계, 추후 배포 결정 |

---

## Architecture Overview

```
+-------------------+       +-------------------+       +-------------------+
|                   |       |                   |       |                   |
|   React Frontend  | ----> |  Express Backend  | ----> | Amazon Bedrock    |
|   (Vite + TW)     |       |  (Node.js)        |       | (Claude)          |
|                   |       |                   |       |                   |
+-------------------+       +-------------------+       +-------------------+
        |                           |
        |                           v
        |                   +-------------------+
        |                   |                   |
        |                   | YouTube Data API  |
        |                   | (v3 Search)       |
        |                   |                   |
        |                   +-------------------+
        v
+-------------------+
|                   |
|   localStorage    |
|   (Client-side)   |
|                   |
+-------------------+
```

---

## Scope Boundaries (MVP)

**포함:**
- 일기 작성 및 AI 분석
- 플레이리스트 추천 (YouTube)
- 감성 비주얼 (그라데이션 + 파티클)
- 과거 기록 (localStorage)
- 캘린더 뷰

**제외 (향후 확장):**
- 사용자 인증/로그인
- 클라우드 데이터 동기화
- 다국어 지원
- 프로덕션 배포
- 소셜 공유 기능 (UI만 표시, 실제 공유 미구현)
