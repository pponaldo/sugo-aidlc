import { Routes, Route } from 'react-router-dom';
import { PlayerProvider, usePlayer } from './contexts/PlayerContext';
import PlayerBar from './components/PlayerBar';
import HomePage from './pages/HomePage';
import DiaryPage from './pages/DiaryPage';
import ResultPage from './pages/ResultPage';
import HistoryPage from './pages/HistoryPage';
import DetailPage from './pages/DetailPage';

function AppContent() {
  const { currentTrack } = usePlayer();

  return (
    <>
      <div className={currentTrack ? 'pb-16' : ''}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/:id" element={<DetailPage />} />
        </Routes>
      </div>
      <PlayerBar />
    </>
  );
}

export default function App() {
  return (
    <PlayerProvider>
      <AppContent />
    </PlayerProvider>
  );
}
