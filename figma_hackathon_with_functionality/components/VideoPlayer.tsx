'use client'

import React, { useState, useRef, useEffect } from 'react';

const VideoSequence: React.FC = () => {
  // List of video sources; make sure these files exist in the public directory.
  const videoSources: string[] = ['/video/video1.webm', '/video/video2.webm'];

  // State to track the current video index.
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  // Reference to the video element.
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handler that is called when the video ends.
  const handleVideoEnded = () => {
    // Loop back to the first video after the last video finishes.
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  // When the currentVideoIndex changes, load and play the new video.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((error) => console.error('Error playing video:', error));
    }
  }, [currentVideoIndex]);

  return (
    <div className='max-w-[1440px] mx-auto my-10'>
      <video
        preload='auto'
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        style={{ width: '97%', height: 'auto', borderRadius: '10px', margin: '0 auto' }}
      >
        <source src={videoSources[currentVideoIndex]} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSequence;
