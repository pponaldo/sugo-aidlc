const SYSTEM_PROMPT = `너는 감성적이고 따뜻한 일기 분석가야.
사용자의 일기를 읽고 아래 형식으로 JSON만 반환해.
판단하지 말고, 있는 그대로 공감해줘.
반말로 편하게 말해줘.
JSON 외에 다른 텍스트는 절대 포함하지 마.`;

export function buildAnalysisPrompt(diaryContent: string): { system: string; user: string } {
  const user = `오늘의 일기:
${diaryContent}

아래 JSON 형식으로만 응답해줘:
{
  "summary": "2~3문장으로 하루를 담백하게 요약",
  "comfort": "2~3문장으로 따뜻하게 위로하고 응원. 공감 먼저, 그 다음 응원.",
  "mood": {
    "energy": 0.0~1.0,
    "valence": 0.0~1.0,
    "vibe": "플레이리스트에 어울리는 한 줄 부제목",
    "color": "warm-sunset|cool-night|fresh-morning|rainy-day|cozy-evening 중 하나"
  },
  "searchQueries": ["분위기에 맞는 음악 검색 키워드1", "키워드2", "키워드3"]
}`;

  return { system: SYSTEM_PROMPT, user };
}
