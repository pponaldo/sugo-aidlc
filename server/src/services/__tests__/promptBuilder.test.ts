import { describe, it, expect } from 'vitest';
import { buildAnalysisPrompt } from '../promptBuilder';

describe('PromptBuilder', () => {
  it('should return system and user prompts', () => {
    const result = buildAnalysisPrompt('오늘 하루 힘들었다');
    expect(result.system).toContain('감성적');
    expect(result.user).toContain('오늘 하루 힘들었다');
  });

  it('should include JSON format instructions', () => {
    const result = buildAnalysisPrompt('테스트 일기');
    expect(result.user).toContain('summary');
    expect(result.user).toContain('comfort');
    expect(result.user).toContain('searchQueries');
  });
});
