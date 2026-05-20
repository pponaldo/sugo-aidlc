export type ColorKeyword = 'warm-sunset' | 'cool-night' | 'fresh-morning' | 'rainy-day' | 'cozy-evening';

export interface MoodParams {
  energy: number;
  valence: number;
  vibe: string;
  color: ColorKeyword;
}

export interface AIAnalysisResult {
  summary: string;
  comfort: string;
  mood: MoodParams;
  searchQueries: string[];
}

export interface YouTubeTrack {
  videoId: string;
  title: string;
  channelName: string;
  thumbnailUrl: string;
}

export interface AnalyzeRequest {
  content: string;
}

export interface AnalyzeResponse {
  summary: string;
  comfort: string;
  mood: MoodParams;
  playlist: YouTubeTrack[];
}

export interface ErrorResponse {
  error: string;
}

const VALID_COLORS: ColorKeyword[] = ['warm-sunset', 'cool-night', 'fresh-morning', 'rainy-day', 'cozy-evening'];

export function isValidColor(color: string): color is ColorKeyword {
  return VALID_COLORS.includes(color as ColorKeyword);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
