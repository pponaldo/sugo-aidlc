# Build Instructions — 오늘 하루, 수고했어

## Prerequisites
- **Node.js**: v18+ 
- **npm**: v9+
- **AWS Credentials**: Bedrock 접근 권한 (AWS CLI 설정 또는 환경변수)
- **YouTube API Key**: Google Cloud Console에서 발급

## Environment Setup

```bash
# 1. 프로젝트 루트에서 전체 의존성 설치
npm install
npm run install:all

# 2. 서버 환경변수 설정
cp server/.env.example server/.env
# server/.env 파일을 편집하여 실제 값 입력:
#   YOUTUBE_API_KEY=your_actual_key
#   AWS_REGION=us-east-1
#   BEDROCK_MODEL_ID=us.anthropic.claude-opus-4-6-v1
```

## Build Steps

### Server Build
```bash
cd server
npm run build
```
- **Expected Output**: `dist/` 디렉토리에 컴파일된 JS 파일 생성
- **Success Indicator**: 에러 없이 완료

### Client Build
```bash
cd client
npm run build
```
- **Expected Output**: `dist/` 디렉토리에 번들된 정적 파일 생성
- **Success Indicator**: 에러 없이 완료, `dist/index.html` 존재

## Development Mode

```bash
# 루트에서 양쪽 동시 실행
npm run dev

# 또는 개별 실행
npm run dev:server   # http://localhost:3001
npm run dev:client   # http://localhost:5173 (API 프록시 → 3001)
```

## Troubleshooting

### AWS Credentials 에러
- `aws configure` 실행하여 credentials 설정
- 또는 `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` 환경변수 설정

### YouTube API 에러
- Google Cloud Console에서 YouTube Data API v3 활성화 확인
- API Key 할당량 확인
