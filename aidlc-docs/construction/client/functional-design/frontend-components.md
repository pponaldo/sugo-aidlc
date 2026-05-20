# Frontend Components Functional Design — client

## Page Components

### HomePage (`/`)
- 두 개의 CTA 버튼: "✏️ 오늘 일기", "📚 지난 기록"
- 기본 그라데이션 배경
- 앱 타이틀 "오늘 하루, 수고했어" 표시

### DiaryPage (`/diary`)
- **State**: `content: string`, `isLoading: boolean`
- DiaryInput 컴포넌트 렌더링
- 제출 시 POST /api/analyze 호출 → 로딩 → ResultPage로 이동
- 결과를 localStorage에 저장 후 navigate

### ResultPage (`/result`)
- **State**: 최근 분석 결과 (context 또는 navigation state)
- 순서: SummaryCard → ComfortMessage → PlaylistSection
- MoodBackground + ParticleEffect 배경
- 하단: "다시 쓰기" 버튼 (→ /diary)

### HistoryPage (`/history`)
- **State**: `entries: DiaryEntry[]`, `calendarOpen: boolean`
- 상단: CalendarView (접기/펼치기)
- 하단: HistoryCard 리스트 (최근순)
- 카드 클릭 → `/history/:id`

### DetailPage (`/history/:id`)
- URL param에서 id 추출 → StorageService.getEntryById(id)
- ResultPage와 동일 레이아웃 + 날짜 + 뒤로가기 버튼
- 해당 기록의 배경 비주얼 재현

## UI Component Props

### DiaryInput
```typescript
Props: {
  onSubmit: (content: string) => void
  isLoading: boolean
}
State: { content: string }
Validation: 10자 이상 시 버튼 활성화, 2000자 제한
```

### SummaryCard
```typescript
Props: { summary: string }
```

### ComfortMessage
```typescript
Props: { message: string }
```

### PlaylistSection
```typescript
Props: { tracks: YouTubeTrack[], vibe: string }
State: { activeVideoId: string | null }
```

### YouTubePlayer
```typescript
Props: { videoId: string }
// YouTube iframe embed
```

### MoodBackground
```typescript
Props: { color: ColorKeyword }
// ColorMapper.getGradient(color) → CSS background
```

### ParticleEffect
```typescript
Props: { color: ColorKeyword, energy: number }
// tsparticles config based on energy level
```

### HistoryCard
```typescript
Props: { entry: DiaryEntry, onClick: () => void }
```

### CalendarView
```typescript
Props: { entries: DiaryEntry[], onDateClick: (id: string) => void }
```

## Color Mapping Logic

| Keyword | Gradient |
|---------|----------|
| warm-sunset | #FF6B35 → #FF1493 |
| cool-night | #1B1464 → #6B48FF |
| fresh-morning | #87CEEB → #98FB98 |
| rainy-day | #708090 → #4682B4 |
| cozy-evening | #8B4513 → #FF8C00 |

## Particle Configuration by Energy

| Energy Range | Speed | Density | Size |
|-------------|-------|---------|------|
| 0.0 ~ 0.3 | slow | low | large |
| 0.3 ~ 0.6 | medium | medium | medium |
| 0.6 ~ 1.0 | fast | high | small |
