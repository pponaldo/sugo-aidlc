export default function ComfortMessage({ message }: { message: string }) {
  return (
    <div className="py-6 px-4 text-center mb-4">
      <p className="text-white text-xl font-medium leading-relaxed italic">"{message}"</p>
    </div>
  );
}
