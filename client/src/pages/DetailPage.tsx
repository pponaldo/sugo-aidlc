import { useParams, useNavigate } from 'react-router-dom';
import { getEntryById } from '../services/storageService';
import MoodBackground from '../components/MoodBackground';
import ParticleEffect from '../components/ParticleEffect';
import SummaryCard from '../components/SummaryCard';
import ComfortMessage from '../components/ComfortMessage';
import PlaylistSection from '../components/PlaylistSection';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const entry = id ? getEntryById(id) : null;

  if (!entry) {
    navigate('/history');
    return null;
  }

  const date = new Date(entry.date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <MoodBackground color={entry.mood.color}>
      <div className="relative min-h-screen p-6 max-w-lg mx-auto">
        <ParticleEffect energy={entry.mood.energy} />
        <div className="relative z-10 pt-4 pb-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => navigate('/history')} className="text-white/60 text-sm">← 뒤로</button>
            <span className="text-white/60 text-sm">{date}</span>
          </div>
          <SummaryCard summary={entry.summary} />
          <ComfortMessage message={entry.comfort} />
          <div className="bg-white/5 rounded-2xl p-4 mb-4">
            <h3 className="text-white/60 text-sm mb-2">원본 일기</h3>
            <p className="text-white/80 text-sm leading-relaxed">{entry.content}</p>
          </div>
          <PlaylistSection tracks={entry.playlist} vibe={entry.mood.vibe} />
        </div>
      </div>
    </MoodBackground>
  );
}
