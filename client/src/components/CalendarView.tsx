import { useState } from 'react';
import { DiaryEntry } from '../types';
import { getGradient } from '../utils/colorMapper';

interface Props {
  entries: DiaryEntry[];
  onDateClick: (id: string) => void;
}

export default function CalendarView({ entries, onDateClick }: Props) {
  const [current, setCurrent] = useState(new Date());
  const year = current.getFullYear();
  const month = current.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const entryMap = new Map<number, DiaryEntry>();
  entries.forEach((e) => {
    const d = new Date(e.date);
    if (d.getFullYear() === year && d.getMonth() === month) {
      entryMap.set(d.getDate(), e);
    }
  });

  const days = Array.from({ length: firstDay + daysInMonth }, (_, i) => {
    if (i < firstDay) return null;
    return i - firstDay + 1;
  });

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-4">
      <div className="flex justify-between items-center mb-3">
        <button onClick={() => setCurrent(new Date(year, month - 1))} className="text-white/60 px-2">◀</button>
        <span className="text-white font-medium">{year}년 {month + 1}월</span>
        <button onClick={() => setCurrent(new Date(year, month + 1))} className="text-white/60 px-2">▶</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/40 mb-2">
        {['일','월','화','수','목','금','토'].map((d) => <span key={d}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          if (!day) return <div key={i} />;
          const entry = entryMap.get(day);
          return (
            <button
              key={i}
              onClick={() => entry && onDateClick(entry.id)}
              className="aspect-square flex items-center justify-center rounded-lg text-sm text-white/70 hover:bg-white/10 relative"
            >
              {day}
              {entry && (
                <span
                  className="absolute bottom-0.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: getGradient(entry.mood.color) }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
