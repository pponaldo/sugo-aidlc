import { ColorKeyword } from '../types';

const GRADIENTS: Record<ColorKeyword, string> = {
  'warm-sunset': 'linear-gradient(135deg, #FF6B35, #FF1493)',
  'cool-night': 'linear-gradient(135deg, #1B1464, #6B48FF)',
  'fresh-morning': 'linear-gradient(135deg, #87CEEB, #98FB98)',
  'rainy-day': 'linear-gradient(135deg, #708090, #4682B4)',
  'cozy-evening': 'linear-gradient(135deg, #8B4513, #FF8C00)',
};

const DEFAULT_GRADIENT = 'linear-gradient(135deg, #667eea, #764ba2)';

export function getGradient(color?: ColorKeyword): string {
  return color ? GRADIENTS[color] || DEFAULT_GRADIENT : DEFAULT_GRADIENT;
}
