# Functional Design Plan — server

## Questions

---

### Question 1
Bedrock Claude 모델 선택은?

A) Claude 3.5 Sonnet (빠르고 비용 효율적, 충분한 한국어 성능)
B) Claude 3 Opus (최고 품질, 비용 높음)
C) Claude 3 Haiku (가장 빠르고 저렴, 품질 약간 낮음)
X) Other (please describe after [Answer]: tag below)

[Answer]: X, us.anthropic.claude-opus-4-6-v1

---

### Question 2
YouTube 검색 시 음악 카테고리 필터를 적용할까요?

A) videoCategoryId=10 (Music 카테고리) 필터 적용
B) 필터 없이 검색 (더 다양한 결과, 음악 아닌 영상 포함 가능)
C) 검색 키워드에 "music" 또는 "노래" 추가로 간접 필터링
X) Other (please describe after [Answer]: tag below)

[Answer]: A

---

### Question 3
AI 분석 실패 시 에러 처리 전략은?

A) 에러 메시지 반환 + 프론트에서 재시도 버튼 표시
B) 기본 응답 반환 (고정된 위로 메시지 + 랜덤 플레이리스트)
C) 재시도 로직 (최대 2회) 후 실패 시 에러 반환
X) Other (please describe after [Answer]: tag below)

[Answer]: C

---

## Generation Steps

- [x] Step 1: 비즈니스 로직 모델 (business-logic-model.md)
- [x] Step 2: 비즈니스 규칙 (business-rules.md)
- [x] Step 3: 도메인 엔티티 (domain-entities.md)
