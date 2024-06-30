import { cn } from "@/lib/utils";
import { FC, useEffect, useRef } from "react";

interface VideoProps {
  video: string;
  active: boolean;
}

const Video: FC<VideoProps> = ({ video, active }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [active]);

  const isYouTubeVideo =
    video.includes("youtube.com") || video.includes("youtu.be");

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl">
      {isYouTubeVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${getYouTubeVideoId(
            video
          )}?autoplay=${active ? 1 : 1}&mute=1&loop=1`}
          className={cn(
            "h-full w-full object-cover rounded-3xl",
            active ? "" : "grayscale"
          )}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <video
          src={video}
          ref={videoRef}
          muted
          loop
          className={cn(
            "h-full w-full object-cover rounded-3xl",
            active ? "" : "grayscale"
          )}
          onPlay={() => {
            if (!active && videoRef.current) {
              videoRef.current.pause();
            }
          }}
        />
      )}
    </div>
  );
};

const getYouTubeVideoId = (url: string) => {
  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};

export default Video;
