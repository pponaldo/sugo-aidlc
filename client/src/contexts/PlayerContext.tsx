import { createContext, useContext, useState, ReactNode } from 'react';
import { YouTubeTrack } from '../types';

interface PlayerState {
  currentTrack: YouTubeTrack | null;
  isPlaying: boolean;
  play: (track: YouTubeTrack) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

const PlayerContext = createContext<PlayerState | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<YouTubeTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (track: YouTubeTrack) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };
  const pause = () => setIsPlaying(false);
  const resume = () => setIsPlaying(true);
  const stop = () => { setCurrentTrack(null); setIsPlaying(false); };

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, play, pause, resume, stop }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
