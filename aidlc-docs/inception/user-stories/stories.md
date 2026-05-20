# User Stories — 오늘 하루, 수고했어

분류 방식: **User Journey-Based** (사용자 여정 순서)

---

## Journey 1: 앱 진입

### US-01: 메인 화면 진입
**As a** 사용자  
**I want to** 앱에 진입했을 때 오늘 일기 쓰기와 지난 기록 보기를 선택할 수 있다  
**So that** 원하는 활동을 바로 시작할 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given 사용자가 앱에 접속했을 때
- When 메인 화면이 로드되면
- Then "오늘 일기" 버튼과 "지난 기록" 버튼이 표시된다
- And 부드러운 기본 그라데이션 배경이 표시된다

---

## Journey 2: 일기 작성

### US-02: 일기 텍스트 입력
**As a** 민지 (기록 동기 부족자)  
**I want to** 가이드 문구를 보며 편하게 일기를 작성할 수 있다  
**So that** 뭘 써야 할지 고민 없이 하루를 기록할 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given 사용자가 일기 작성 화면에 진입했을 때
- When 텍스트 입력 영역이 표시되면
- Then 가이드 문구 "오늘 하루를 편하게 들려줘. 길어도, 짧아도 괜찮아."가 placeholder로 표시된다
- And 중앙 정렬된 텍스트 에어리어가 표시된다

### US-03: 입력 유효성 검증
**As a** 사용자  
**I want to** 최소/최대 글자 수 제한을 알 수 있다  
**So that** 적절한 분량의 일기를 작성할 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given 사용자가 일기를 작성 중일 때
- When 10자 미만을 입력하면
- Then 제출 버튼이 비활성화된다
- Given 사용자가 일기를 작성 중일 때
- When 2000자를 초과하면
- Then 더 이상 입력이 되지 않는다
- And 글자 수 카운터가 현재/최대 글자 수를 표시한다

### US-04: 일기 제출
**As a** 준혁 (음악 고민자)  
**I want to** "오늘의 음악 받기 🎵" 버튼을 눌러 AI 분석을 요청할 수 있다  
**So that** 내 하루에 맞는 음악을 받을 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given 사용자가 10자 이상의 일기를 작성했을 때
- When "오늘의 음악 받기 🎵" 버튼을 클릭하면
- Then AI 분석 요청이 서버로 전송된다
- And 감성 로딩 애니메이션이 표시된다

---

## Journey 3: AI 분석 결과

### US-05: 하루 요약 확인
**As a** 민지 (기록 동기 부족자)  
**I want to** AI가 내 하루를 2~3문장으로 요약해주는 것을 볼 수 있다  
**So that** 내 하루를 객관적으로 돌아볼 수 있다

**Personas**: 민지, 수현

**Acceptance Criteria:**
- Given AI 분석이 완료되었을 때
- When 결과 화면이 표시되면
- Then 상단에 2~3문장의 하루 요약 카드가 표시된다
- And 요약은 판단 없이 있는 그대로의 내용이다

### US-06: 위로/응원 메시지 확인
**As a** 수현 (위로 필요자)  
**I want to** AI가 따뜻하게 위로하고 응원해주는 메시지를 받을 수 있다  
**So that** 하루의 피로가 풀리고 위안을 얻을 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given AI 분석이 완료되었을 때
- When 결과 화면에서 위로 메시지 영역이 표시되면
- Then 2~3문장의 따뜻한 위로/응원 메시지가 표시된다
- And 메시지는 공감 먼저, 그 다음 응원 순서이다
- And 반말로 편하게 작성되어 있다
- And 강조된 타이포그래피로 표시된다

### US-07: 감성 비주얼 체험
**As a** 사용자  
**I want to** 내 하루의 감정에 맞는 배경 색상과 파티클 애니메이션을 볼 수 있다  
**So that** 시각적으로도 감정이 표현되는 경험을 할 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given AI가 color 키워드와 energy 값을 반환했을 때
- When 결과 화면이 표시되면
- Then color 키워드에 맞는 그라데이션 배경이 적용된다 (warm-sunset, cool-night, fresh-morning, rainy-day, cozy-evening)
- And energy 값에 따라 파티클 애니메이션의 속도와 밀도가 조절된다
- And 화면 진입 시 부드러운 fade-in 전환 효과가 적용된다

---

## Journey 4: 플레이리스트

### US-08: 플레이리스트 목록 확인
**As a** 준혁 (음악 고민자)  
**I want to** 내 하루에 어울리는 10~12곡의 플레이리스트를 볼 수 있다  
**So that** 고민 없이 기분에 맞는 음악을 들을 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given AI가 검색 키워드 3개를 생성했을 때
- When YouTube 검색이 완료되면
- Then 10~12곡의 플레이리스트가 표시된다
- And 각 곡은 썸네일, 영상 제목, 채널명을 포함한다
- And 플레이리스트 상단에 vibe 부제목이 표시된다

### US-09: 음악 재생
**As a** 준혁 (음악 고민자)  
**I want to** 플레이리스트에서 곡을 선택해 바로 재생할 수 있다  
**So that** 별도 앱 전환 없이 음악을 들을 수 있다

**Personas**: 준혁, 수현

**Acceptance Criteria:**
- Given 플레이리스트가 표시되었을 때
- When 사용자가 곡을 클릭하면
- Then YouTube iframe 임베드 플레이어가 표시된다
- And 해당 곡이 재생된다

---

## Journey 5: 과거 기록

### US-10: 기록 리스트 조회
**As a** 민지 (기록 동기 부족자)  
**I want to** 과거에 쓴 일기 목록을 카드 형태로 볼 수 있다  
**So that** 내가 꾸준히 기록해왔다는 성취감을 느낄 수 있다

**Personas**: 민지, 수현

**Acceptance Criteria:**
- Given 사용자가 "지난 기록" 화면에 진입했을 때
- When 기록 리스트가 로드되면
- Then 최근순으로 카드가 표시된다
- And 각 카드에 날짜, 요약 미리보기, 플레이리스트 부제목, 감정 색상 인디케이터가 표시된다

### US-11: 캘린더 뷰 조회
**As a** 민지 (기록 동기 부족자)  
**I want to** 월별 캘린더에서 일기를 쓴 날을 한눈에 볼 수 있다  
**So that** 기록 습관의 연속성을 시각적으로 확인할 수 있다

**Personas**: 민지

**Acceptance Criteria:**
- Given 사용자가 기록 화면에서 캘린더 뷰를 펼쳤을 때
- When 캘린더가 표시되면
- Then 일기를 쓴 날에 해당 날의 감정 색상 점이 표시된다
- And 날짜를 클릭하면 해당 기록 상세로 이동한다

### US-12: 기록 상세 보기
**As a** 수현 (위로 필요자)  
**I want to** 과거 기록의 상세 내용을 다시 볼 수 있다  
**So that** 예전에 받았던 위로를 다시 읽으며 힘을 얻을 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given 사용자가 기록 카드 또는 캘린더 날짜를 클릭했을 때
- When 기록 상세 화면이 표시되면
- Then 원본 일기, 하루 요약, 위로 메시지, 플레이리스트가 모두 표시된다
- And 그날의 감정 배경 비주얼이 재현된다
- And 상단에 날짜와 뒤로가기 버튼이 표시된다

---

## Journey 6: 부가 기능

### US-13: 다시 쓰기
**As a** 사용자  
**I want to** 결과 화면에서 "다시 쓰기" 버튼을 눌러 새 일기를 작성할 수 있다  
**So that** 다른 내용으로 다시 시도할 수 있다

**Personas**: 민지, 준혁, 수현

**Acceptance Criteria:**
- Given 결과 화면이 표시되었을 때
- When 사용자가 "다시 쓰기" 버튼을 클릭하면
- Then 일기 작성 화면으로 돌아간다
- And 이전 입력은 초기화된다

---

## INVEST 검증 요약

| 기준 | 충족 여부 | 설명 |
|------|-----------|------|
| **Independent** | ✅ | 각 스토리가 독립적으로 구현/테스트 가능 |
| **Negotiable** | ✅ | 구현 방식은 유연하게 조정 가능 |
| **Valuable** | ✅ | 각 스토리가 사용자에게 직접적 가치 제공 |
| **Estimable** | ✅ | 범위가 명확하여 추정 가능 |
| **Small** | ✅ | 단일 기능 단위로 분해됨 |
| **Testable** | ✅ | Given/When/Then으로 테스트 가능 |
