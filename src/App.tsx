import './App.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function App() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const codingVideo = useRef<HTMLVideoElement>(null);
  const AWSVideo = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current && videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current && videoRef.current.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const handleCodingMouseEnter = () => {
   codingVideo.current && codingVideo.current.play();
  };

  const handleCodingMouseLeave = () => {
    codingVideo.current && codingVideo.current.pause();
    if (codingVideo.current) codingVideo.current.currentTime = 0;
  };

  const handleAWSMouseEnter = () => {
    AWSVideo.current && AWSVideo.current.play();
  };

  const handleAWSMouseLeave = () => {
    AWSVideo.current && AWSVideo.current.pause();
    if (AWSVideo.current) AWSVideo.current.currentTime = 0;
  };

  return (
    <div className="Container">
      <div className="Theheader">
        Welcome to Geyson Mejia Castro profile<br />Pick an industry to see my work 
      </div>
      <div className="ButtonRow">
        <div className="ITButtonWrapper">
          <video
            className="it-background-video"
            ref={videoRef}
            src="/public/ItBackGround.mp4"
            loop
            muted
            playsInline
          />
          <button
            onClick={() => navigate('/IT_Professional')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            IT Professional
          </button>
        </div>
        <div className="CodingButtonWrapper">
          <video 
            className="Coding-background-video"
            ref={codingVideo}
            src="/public/Coding.mp4"
            loop
            muted
            playsInline
          />
          <button
            onClick={() => navigate('/WebDeveloper')}
            onMouseEnter={handleCodingMouseEnter}
            onMouseLeave={handleCodingMouseLeave}
          >
            Web Developer
          </button>
        </div>
        <div className="AWSButtonWrapper">
          <video
            className="AWS-background-video"
            ref={AWSVideo}
            src="/public/AWS.mp4"
            loop
            muted
            playsInline
          />
          <button
            onClick={() => navigate('/AWS')}
            onMouseEnter={handleAWSMouseEnter}
            onMouseLeave={handleAWSMouseLeave}
          >
            AWS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
