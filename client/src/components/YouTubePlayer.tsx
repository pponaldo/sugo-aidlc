export default function YouTubePlayer({ videoId }: { videoId: string }) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  );
}
