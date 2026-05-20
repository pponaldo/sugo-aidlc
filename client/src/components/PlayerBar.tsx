import { usePlayer } from '../contexts/PlayerContext';

export default function PlayerBar() {
  const { currentTrack, isPlaying, pause, resume, stop } = usePlayer();

  if (!currentTrack) return null;

  return (
    <>
      {/* Hidden YouTube iframe for audio-only playback */}
      <iframe
        src={`https://www.youtube.com/embed/${currentTrack.videoId}?autoplay=1&enablejsapi=1${!isPlaying ? '&pause=1' : ''}`}
        allow="autoplay"
        className="absolute w-0 h-0 overflow-hidden"
        style={{ position: 'absolute', top: -9999, left: -9999 }}
        title="Audio player"
        key={currentTrack.videoId}
      />

      {/* Visible player bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-t border-white/10 px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <img
            src={currentTrack.thumbnailUrl}
            alt=""
            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm truncate">{currentTrack.title}</p>
            <p className="text-white/50 text-xs truncate">{currentTrack.channelName}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              data-testid="player-play-pause"
              onClick={() => isPlaying ? pause() : resume()}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              data-testid="player-stop"
              onClick={stop}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 transition"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
