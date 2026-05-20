import { YouTubeTrack } from '../types/index.js';

const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const RESULTS_PER_QUERY = 4;
const MAX_TRACKS = 12;

async function searchByQuery(query: string, apiKey: string): Promise<YouTubeTrack[]> {
  const params = new URLSearchParams({
    part: 'snippet',
    type: 'video',
    videoCategoryId: '10',
    maxResults: String(RESULTS_PER_QUERY),
    q: query,
    key: apiKey,
  });

  const response = await fetch(`${YOUTUBE_SEARCH_URL}?${params}`);
  if (!response.ok) throw new Error(`YouTube search failed: ${response.status}`);

  const data = await response.json();
  return (data.items || []).map((item: any) => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    channelName: item.snippet.channelTitle,
    thumbnailUrl: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
  }));
}

export async function searchMusic(queries: string[]): Promise<YouTubeTrack[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) throw new Error('YOUTUBE_API_KEY is not configured');

  const results = await Promise.allSettled(
    queries.map((q) => searchByQuery(q, apiKey))
  );

  const tracks: YouTubeTrack[] = [];
  const seenIds = new Set<string>();

  for (const result of results) {
    if (result.status === 'fulfilled') {
      for (const track of result.value) {
        if (!seenIds.has(track.videoId)) {
          seenIds.add(track.videoId);
          tracks.push(track);
        }
      }
    }
  }

  if (tracks.length === 0) throw new Error('음악 검색에 실패했습니다.');
  return tracks.slice(0, MAX_TRACKS);
}
