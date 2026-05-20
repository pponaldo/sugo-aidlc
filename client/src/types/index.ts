export type ColorKeyword = 'warm-sunset' | 'cool-night' | 'fresh-morning' | 'rainy-day' | 'cozy-evening';

export interface MoodParams {
  energy: number;
  valence: number;
  vibe: string;
  color: ColorKeyword;
}

export interface YouTubeTrack {
  videoId: string;
  title: string;
  channelName: string;
  thumbnailUrl: string;
}

export interface AnalyzeResponse {
  summary: string;
  comfort: string;
  mood: MoodParams;
  playlist: YouTubeTrack[];
}

export interface DiaryEntry {
  id: string;
  date: string;
  content: string;
  summary: string;
  comfort: string;
  playlist: YouTubeTrack[];
  mood: MoodParams;
}
