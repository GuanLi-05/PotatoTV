"use client"
import { useEffect, useRef } from 'react';

export default function MinimalYouTubePlayer() {
  const playerRef = useRef(null);
  const videoId = 'dQw4w9WgXcQ'; // dQw4w9WgXcQ iirw0bThLmo UpF64xyNPrQ

  useEffect(() => {

    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.head.appendChild(script);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    function initPlayer() {
      new window.YT.Player(playerRef.current, {
        videoId: videoId,
        host: 'https://www.youtube-nocookie.com',
        width: '100%',
        height: '400'
      });
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div
        ref={playerRef}
        id="youtube-player"
        data-video={videoId}
        className="w-full h-96 bg-black rounded"
      />
    </div>
  );
}