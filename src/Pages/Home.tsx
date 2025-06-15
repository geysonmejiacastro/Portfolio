import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const itVideoRef = useRef<HTMLVideoElement | null>(null);
  const webVideoRef = useRef<HTMLVideoElement | null>(null);
  const awsVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleHover = (
    videoRef: React.RefObject<HTMLVideoElement | null>,
    play: boolean
  ) => {
    if (videoRef.current) {
      if (play) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Geyson Mejia Castro's Profile</h1>
        <p>Pick an industry to see my work</p>
      </div>

      <div className="button-row">
        {/* IT Button */}
        <div
          className="button-wrapper"
          onMouseEnter={() => handleHover(itVideoRef, true)}
          onMouseLeave={() => handleHover(itVideoRef, false)}
        >
          <video
            ref={itVideoRef}
            className="button-video"
            src="/ITBackGround.mp4"
            muted
            loop
            playsInline
            preload="auto"
          />
          <button onClick={() => navigate('/IT')}>IT Professional</button>
        </div>

        {/* Web Developer Button */}
        <div
          className="button-wrapper"
          onMouseEnter={() => handleHover(webVideoRef, true)}
          onMouseLeave={() => handleHover(webVideoRef, false)}
        >
          <video
            ref={webVideoRef}
            className="button-video"
            src="/Coding.mp4"
            muted
            loop
            playsInline
             preload="auto"
          />
          <button onClick={() => navigate('/WebDeveloper')}>Web Developer</button>
        </div>

        {/* AWS Button */}
        <div
          className="button-wrapper"
          onMouseEnter={() => handleHover(awsVideoRef, true)}
          onMouseLeave={() => handleHover(awsVideoRef, false)}
        >
          <video
            ref={awsVideoRef}
            className="button-video"
            src="/AWS.mp4"
            muted
            loop
            playsInline
             preload="auto"
          />
          <button onClick={() => navigate('/AWS')}>AWS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
