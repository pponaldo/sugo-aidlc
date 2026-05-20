import { DiaryEntry } from '../types';
import { getGradient } from '../utils/colorMapper';

interface Props {
  entry: DiaryEntry;
  onClick: () => void;
}

export default function HistoryCard({ entry, onClick }: Props) {
  const date = new Date(entry.date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <button
      data-testid={`history-card-${entry.id}`}
      onClick={onClick}
      className="w-full flex items-stretch gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur hover:bg-white/15 transition text-left"
    >
      <div
        className="w-1.5 rounded-full flex-shrink-0"
        style={{ background: getGradient(entry.mood.color) }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-white/50 text-xs mb-1">{date}</p>
        <p className="text-white text-sm truncate">{entry.summary}</p>
        <p className="text-white/40 text-xs mt-1 truncate">🎵 {entry.mood.vibe}</p>
      </div>
    </button>
  );
}
