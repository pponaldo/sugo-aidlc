import { describe, it, expect, vi } from 'vitest';

// Mock the services
vi.mock('../services/bedrockService', () => ({
  analyzeWithClaude: vi.fn(),
}));
vi.mock('../services/youtubeService', () => ({
  searchMusic: vi.fn(),
}));

describe('AnalyzeController - Input Validation', () => {
  it('should reject empty content', async () => {
    const { analyzeDiary } = await import('../controllers/analyzeController');
    const req = { body: { content: '' } } as any;
    const res = { status: vi.fn().mockReturnThis(), json: vi.fn() } as any;

    await analyzeDiary(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: '일기 내용을 입력해주세요' });
  });

  it('should reject content shorter than 10 chars', async () => {
    const { analyzeDiary } = await import('../controllers/analyzeController');
    const req = { body: { content: '짧은글' } } as any;
    const res = { status: vi.fn().mockReturnThis(), json: vi.fn() } as any;

    await analyzeDiary(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: '최소 10자 이상 입력해주세요' });
  });

  it('should reject content longer than 2000 chars', async () => {
    const { analyzeDiary } = await import('../controllers/analyzeController');
    const req = { body: { content: 'a'.repeat(2001) } } as any;
    const res = { status: vi.fn().mockReturnThis(), json: vi.fn() } as any;

    await analyzeDiary(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: '최대 2000자까지 입력 가능합니다' });
  });
});
