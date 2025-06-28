import './Home.css';
import { useEffect, useState } from 'react';

const titles = [
  'Cross-Platform File Sharing Solution',
  'Network Segmentation & QoS Configuration',
  'Virtual Machine & Linux Lab Setup',
  'Pi-hole Network-Wide Ad Blocking & DNS Management',
];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Container">
      <div className="Overlay" />

      <div className="Hero">
        <img className="Avatar" src="/MyPicture.png" alt="Geyson profile" />
        <h1 className="Name">Hi, I'm <span className="highlight">Geyson</span></h1>
        <p className="Statement">I'm passionate about learning and building with technology.</p>
        <p className="TypingEffect">
          Current Project: <strong>{titles[index]}</strong>
        </p>
        <a href="/IT/Project" className="home-button">Explore My IT Work</a>
      </div>

      <div className="Certifications">
        <h2>Certifications</h2>
        <div className="CertGrid">
          <img src="/ITF.png" alt="ITF Certification" />
          <img src="/A+.png" alt="A+ Certification" />
        </div>
      </div>
    </div>
  );
};

export default Home;
