import React, { useMemo } from "react";

interface YoutubeVideoProps {
  "youtube-id"?: string;
  list?: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({
  "youtube-id": youtubeID = "dQw4w9WgXcQ",
  list,
  title = "YouTube video player",
  width = "560",
  height = "315",
}) => {
  const src = useMemo(() => {
    const url = new URL(`https://www.youtube.com/embed/${youtubeID}`);
    if (list) {
      url.searchParams.set("list", list);
    }
    return url.toString();
  }, [youtubeID, list]);

  const allowlist = [
    "accelerometer",
    "autoplay",
    "clipboard-write",
    "encrypted-media",
    "gyroscope",
    "picture-in-picture",
    "web-share",
    "fullscreen",
  ].join("; ");

  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      frameBorder={0}
      allow={allowlist}
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
