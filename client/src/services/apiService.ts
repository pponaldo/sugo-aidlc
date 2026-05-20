import { AnalyzeResponse } from '../types';

export async function analyzeDiary(content: string): Promise<AnalyzeResponse> {
  const res = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: '요청에 실패했습니다.' }));
    throw new Error(err.error || '요청에 실패했습니다.');
  }

  return res.json();
}
