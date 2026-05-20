interface DiaryInputProps {
  onSubmit: (content: string) => void;
  isLoading: boolean;
}

import { useState } from 'react';

export default function DiaryInput({ onSubmit, isLoading }: DiaryInputProps) {
  const [content, setContent] = useState('');
  const isValid = content.trim().length >= 10;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-4">
      <textarea
        data-testid="diary-input-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value.slice(0, 2000))}
        placeholder="오늘 하루를 편하게 들려줘. 길어도, 짧아도 괜찮아."
        className="w-full h-48 p-4 rounded-2xl bg-white/10 backdrop-blur text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
      />
      <div className="flex justify-between text-sm text-white/50">
        <span>{content.length < 10 ? `최소 10자 (현재 ${content.length}자)` : ''}</span>
        <span>{content.length}/2000</span>
      </div>
      <button
        data-testid="diary-submit-button"
        onClick={() => onSubmit(content.trim())}
        disabled={!isValid || isLoading}
        className="w-full py-4 rounded-2xl bg-white/20 backdrop-blur text-white text-lg font-medium disabled:opacity-40 hover:bg-white/30 transition"
      >
        {isLoading ? '분석 중...' : '오늘의 음악 받기 🎵'}
      </button>
    </div>
  );
}
