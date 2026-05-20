import { ReactNode, useEffect } from 'react';
import { ColorKeyword } from '../types';
import { getGradient } from '../utils/colorMapper';

interface Props {
  color?: ColorKeyword;
  children: ReactNode;
}

const SOLID_COLORS: Record<ColorKeyword, string> = {
  'warm-sunset': '#FF6B35',
  'cool-night': '#1B1464',
  'fresh-morning': '#87CEEB',
  'rainy-day': '#708090',
  'cozy-evening': '#8B4513',
};

export default function MoodBackground({ color, children }: Props) {
  useEffect(() => {
    const bg = color ? SOLID_COLORS[color] : '#667eea';
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
    return () => {
      document.documentElement.style.backgroundColor = '#667eea';
      document.body.style.backgroundColor = '#667eea';
    };
  }, [color]);

  return (
    <div
      className="min-h-screen transition-all duration-1000 ease-in-out"
      style={{ background: getGradient(color) }}
    >
      {children}
    </div>
  );
}
