import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEntries } from '../services/storageService';
import HistoryCard from '../components/HistoryCard';
import CalendarView from '../components/CalendarView';

export default function HistoryPage() {
  const [calendarOpen, setCalendarOpen] = useState(true);
  const entries = getAllEntries();
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen p-6"
      style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
    >
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="text-white/60 text-sm">← 홈</button>
          <h2 className="text-xl font-bold text-white">지난 기록</h2>
          <button onClick={() => setCalendarOpen(!calendarOpen)} className="text-white/60 text-sm">
            {calendarOpen ? '접기' : '캘린더'}
          </button>
        </div>

        {calendarOpen && (
          <CalendarView entries={entries} onDateClick={(id) => navigate(`/history/${id}`)} />
        )}

        {entries.length === 0 ? (
          <p className="text-white/50 text-center mt-12">아직 기록이 없어요. 오늘 첫 일기를 써볼까요?</p>
        ) : (
          <div className="flex flex-col gap-3">
            {entries.map((entry) => (
              <HistoryCard key={entry.id} entry={entry} onClick={() => navigate(`/history/${entry.id}`)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
