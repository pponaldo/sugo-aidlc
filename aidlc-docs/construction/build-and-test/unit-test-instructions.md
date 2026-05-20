# Unit Test Instructions — 오늘 하루, 수고했어

## Server Unit Tests

### 실행 방법
```bash
cd server
npm test           # 단일 실행
npm run test:watch # 감시 모드
```

### 테스트 범위
| 파일 | 테스트 내용 |
|------|-------------|
| `promptBuilder.test.ts` | 프롬프트 구조 검증, JSON 형식 포함 확인 |
| `analyzeController.test.ts` | 입력 검증 (빈 값, 10자 미만, 2000자 초과) |

### 테스트 프레임워크
- **Vitest** (Vite 네이티브 테스트 러너)
- Mock: `vi.mock()` 으로 외부 서비스 모킹

### 추가 테스트 작성 가이드
- BedrockService: AWS SDK 모킹 필요 (`vi.mock('@aws-sdk/client-bedrock-runtime')`)
- YouTubeService: fetch 모킹 필요 (`vi.stubGlobal('fetch', ...)`)

## Client Unit Tests (향후 추가)

### 권장 설정
```bash
cd client
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

### 테스트 대상 우선순위
1. `storageService.ts` — localStorage CRUD 로직
2. `colorMapper.ts` — 색상 매핑 로직
3. `DiaryInput.tsx` — 입력 검증 UI 동작
