import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { AIAnalysisResult, clamp, isValidColor } from '../types/index.js';
import { buildAnalysisPrompt } from './promptBuilder.js';

const MAX_RETRIES = 2;

let client: BedrockRuntimeClient;

function getClient(): BedrockRuntimeClient {
  if (!client) {
    client = new BedrockRuntimeClient({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }
  return client;
}

function parseAIResponse(raw: string): AIAnalysisResult {
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('No JSON found in response');

  const parsed = JSON.parse(jsonMatch[0]);

  if (!parsed.summary || !parsed.comfort || !parsed.mood || !parsed.searchQueries) {
    throw new Error('Missing required fields');
  }

  return {
    summary: parsed.summary,
    comfort: parsed.comfort,
    mood: {
      energy: clamp(Number(parsed.mood.energy) || 0.5, 0, 1),
      valence: clamp(Number(parsed.mood.valence) || 0.5, 0, 1),
      vibe: parsed.mood.vibe || '오늘의 플레이리스트',
      color: isValidColor(parsed.mood.color) ? parsed.mood.color : 'cozy-evening',
    },
    searchQueries: Array.isArray(parsed.searchQueries) ? parsed.searchQueries.slice(0, 3) : [],
  };
}

export async function analyzeWithClaude(diaryContent: string): Promise<AIAnalysisResult> {
  const { system, user } = buildAnalysisPrompt(diaryContent);
  const modelId = process.env.BEDROCK_MODEL_ID || 'us.anthropic.claude-opus-4-6-v1';

  const body = JSON.stringify({
    anthropic_version: 'bedrock-2023-05-31',
    max_tokens: 1024,
    system,
    messages: [{ role: 'user', content: user }],
  });

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const command = new InvokeModelCommand({ modelId, body, contentType: 'application/json' });
      const response = await getClient().send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      const text = responseBody.content?.[0]?.text || '';
      return parseAIResponse(text);
    } catch (error) {
      if (attempt === MAX_RETRIES) throw error;
    }
  }

  throw new Error('AI 분석에 실패했습니다.');
}
