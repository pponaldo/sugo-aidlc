import { useLocation, useNavigate } from 'react-router-dom';
import MoodBackground from '../components/MoodBackground';
import ParticleEffect from '../components/ParticleEffect';
import SummaryCard from '../components/SummaryCard';
import ComfortMessage from '../components/ComfortMessage';
import PlaylistSection from '../components/PlaylistSection';
import { DiaryEntry } from '../types';

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = (location.state as { entry: DiaryEntry })?.entry;

  if (!entry) {
    navigate('/');
    return null;
  }

  return (
    <MoodBackground color={entry.mood.color}>
      <div className="relative min-h-screen p-6 max-w-lg mx-auto animate-[fadeIn_0.8s_ease-in]">
        <ParticleEffect energy={entry.mood.energy} />
        <div className="relative z-10 pt-8 pb-24">
          <SummaryCard summary={entry.summary} />
          <ComfortMessage message={entry.comfort} />
          <PlaylistSection tracks={entry.playlist} vibe={entry.mood.vibe} />
        </div>
        <div className="fixed bottom-16 left-0 right-0 p-4 flex gap-3 max-w-lg mx-auto z-40">
          <button
            data-testid="result-rewrite-button"
            onClick={() => navigate('/diary')}
            className="flex-1 py-3 rounded-xl bg-white/10 backdrop-blur text-white hover:bg-white/20 transition"
          >
            다시 쓰기
          </button>
          <button
            data-testid="result-home-button"
            onClick={() => navigate('/')}
            className="flex-1 py-3 rounded-xl bg-white/20 backdrop-blur text-white hover:bg-white/30 transition"
          >
            홈으로
          </button>
        </div>
      </div>
    </MoodBackground>
  );
}
