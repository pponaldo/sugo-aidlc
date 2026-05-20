import { YouTubeTrack } from '../types';
import { usePlayer } from '../contexts/PlayerContext';

interface Props {
  tracks: YouTubeTrack[];
  vibe: string;
}

export default function PlaylistSection({ tracks, vibe }: Props) {
  const { play, currentTrack } = usePlayer();

  return (
    <div className="mt-6">
      <h3 className="text-white/60 text-sm mb-1">오늘의 플레이리스트</h3>
      <p className="text-white font-medium mb-4">{vibe}</p>

      <div className="flex flex-col gap-2">
        {tracks.map((track) => (
          <button
            key={track.videoId}
            data-testid={`playlist-track-${track.videoId}`}
            onClick={() => play(track)}
            className={`flex items-center gap-3 p-2 rounded-xl transition ${
              currentTrack?.videoId === track.videoId ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            <img src={track.thumbnailUrl} alt="" className="w-12 h-12 rounded-lg object-cover" />
            <div className="text-left flex-1 min-w-0">
              <p className="text-white text-sm truncate">{track.title}</p>
              <p className="text-white/50 text-xs truncate">{track.channelName}</p>
            </div>
            {currentTrack?.videoId === track.videoId && (
              <span className="text-white/60 text-xs">♪</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
