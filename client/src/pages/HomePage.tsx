import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
    >
      <h1 className="text-4xl font-bold text-white mb-2">오늘 하루, 수고했어</h1>
      <p className="text-white/70 mb-12 text-lg">하루를 기록하고, 위로받고, 음악을 만나세요</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          data-testid="home-diary-button"
          onClick={() => navigate('/diary')}
          className="w-full py-4 rounded-2xl bg-white/20 backdrop-blur text-white text-lg font-medium hover:bg-white/30 transition"
        >
          ✏️ 오늘 일기
        </button>
        <button
          data-testid="home-history-button"
          onClick={() => navigate('/history')}
          className="w-full py-4 rounded-2xl bg-white/10 backdrop-blur text-white/90 text-lg font-medium hover:bg-white/20 transition"
        >
          📚 지난 기록
        </button>
      </div>
    </div>
  );
}
