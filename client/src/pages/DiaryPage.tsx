import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryInput from '../components/DiaryInput';
import LoadingAnimation from '../components/LoadingAnimation';
import { analyzeDiary } from '../services/apiService';
import { saveEntry } from '../services/storageService';

export default function DiaryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (content: string) => {
    setIsLoading(true);
    setError('');
    try {
      const result = await analyzeDiary(content);
      const entry = {
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        content,
        ...result,
      };
      saveEntry(entry);
      navigate('/result', { state: { entry } });
    } catch (err: any) {
      setError(err.message || '분석에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
    >
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-white mb-8">오늘 하루는 어땠어?</h2>
          <DiaryInput onSubmit={handleSubmit} isLoading={isLoading} />
          {error && <p className="mt-4 text-red-300 text-sm">{error}</p>}
        </>
      )}
    </div>
  );
}
