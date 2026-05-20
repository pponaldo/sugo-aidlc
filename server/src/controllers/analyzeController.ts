import { Request, Response } from 'express';
import { analyzeWithClaude } from '../services/bedrockService.js';
import { searchMusic } from '../services/youtubeService.js';
import { AnalyzeRequest, AnalyzeResponse, ErrorResponse } from '../types/index.js';

function validateInput(content: unknown): string | null {
  if (!content || typeof content !== 'string') return '일기 내용을 입력해주세요';
  const trimmed = content.trim();
  if (trimmed.length < 10) return '최소 10자 이상 입력해주세요';
  if (trimmed.length > 2000) return '최대 2000자까지 입력 가능합니다';
  return null;
}

export async function analyzeDiary(req: Request<{}, {}, AnalyzeRequest>, res: Response<AnalyzeResponse | ErrorResponse>) {
  const error = validateInput(req.body.content);
  if (error) {
    res.status(400).json({ error });
    return;
  }

  try {
    const aiResult = await analyzeWithClaude(req.body.content.trim());
    const playlist = await searchMusic(aiResult.searchQueries);

    res.json({
      summary: aiResult.summary,
      comfort: aiResult.comfort,
      mood: aiResult.mood,
      playlist,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'AI 분석에 실패했습니다. 다시 시도해주세요.' });
  }
}
