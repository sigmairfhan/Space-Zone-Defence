
import { useEffect, useRef, useState } from 'react';
import '../styles/videohero.css';

export default function VideoHero({
  src = '/images/videos/hero.mp4',
  children,
}) {
  const videoRef = useRef(null);

  const [videoError, setVideoError] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let isMounted = true;

    // Configure background video
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;

    const playVideo = async () => {
      if (!isMounted || document.hidden) return;

      try {
        await video.play();

        if (isMounted) {
          setIsPlaying(true);
          setVideoError('');
          console.log('SUCCESS: Home background video is playing');
        }
      } catch (error) {
        if (!isMounted) return;

        setIsPlaying(false);

        if (error.name === 'NotAllowedError') {
          setVideoError(
            'Your browser blocked automatic playback. Click Play Video.'
          );
        } else {
          setVideoError(
            `Video playback failed: ${error.name} - ${error.message}`
          );
        }

        console.error('[VideoHero] Playback error:', error);
      }
    };

    const handleLoaded = () => {
      console.log('Home video loaded successfully');
      playVideo();
    };

    const handleError = () => {
      if (!isMounted) return;

      const errorCode = video.error?.code;

      const errorMessages = {
        1: 'Video loading was aborted.',
        2: 'Network error while loading the video.',
        3: 'Video decoding failed. Check the MP4 encoding.',
        4: 'Video format or source is not supported.',
      };

      const message =
        errorMessages[errorCode] || 'Unknown video loading error.';

      setVideoError(message);
      setIsPlaying(false);

      console.error('[VideoHero] Video error:', {
        code: errorCode,
        message,
        source: video.currentSrc,
      });
    };

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
        setIsPlaying(false);
      } else {
        playVideo();
      }
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('canplay', playVideo);
    video.addEventListener('error', handleError);

    document.addEventListener('visibilitychange', handleVisibility);

    // Load and start video
    video.load();
    playVideo();

    return () => {
      isMounted = false;

      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('error', handleError);

      document.removeEventListener(
        'visibilitychange',
        handleVisibility
      );

      video.pause();
    };
  }, [src]);

  const handleManualPlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = true;
      await video.play();

      setIsPlaying(true);
      setVideoError('');

      console.log('SUCCESS: Manual video playback started');
    } catch (error) {
      setIsPlaying(false);
      setVideoError(`${error.name}: ${error.message}`);

      console.error('[VideoHero] Manual playback failed:', error);
    }
  };

  return (
    <section className="vh-hero">

      {/* Background video */}
      <video
        ref={videoRef}
        className="vh-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Dark overlay */}
      <div className="vh-shade" />

      {/* Hero content */}
      <div className="container vh-inner">
        <div className="vh-copy">
          {children}

          {/* Playback fallback */}
          {(!isPlaying || videoError) && (
            <div className="vh-video-controls">
              <button
                type="button"
                className="vh-play-button"
                onClick={handleManualPlay}
              >
                Play Background Video
              </button>

              {videoError && (
                <p className="vh-video-error" role="alert">
                  {videoError}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
