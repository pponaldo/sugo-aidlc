export default function SummaryCard({ summary }: { summary: string }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4">
      <h3 className="text-white/60 text-sm mb-2">오늘의 하루</h3>
      <p className="text-white text-lg leading-relaxed">{summary}</p>
    </div>
  );
}
