import "./About.css";

const About: React.FC = () => {
  return (
    <div className="Container">
      <div className="Section">
        <h2 className="Heading">My Journey into Tech</h2>
        <p className="TextBlock">
          My journey into tech began when I built my first PC. It didn’t go smoothly — I ran into a lot of issues, but that sparked my curiosity. 
          I became fascinated with both the hardware and the possibilities of what I could do with a computer.
          That experience drove me to
          <span className="SpanLine"> start learning how things work and how to fix them.</span>
        </p>
      </div>

      <div className="Section">
        <h2 className="Heading">Academic Background</h2>
        <p className="TextBlock">
          I graduated with my Associate in Computer Science from BCC College.
        </p>
        <img className="ResponsiveImage" src="/bcc.webp" alt="Bronx Community College" />
      </div>

      <div className="Section">
        <p className="TextBlock">
          I am currently a student at Lehman College, majoring in Computer Science.
        </p>
        <img className="ResponsiveImage" src="/Lehman.jpg" alt="Lehman College" />
      </div>
    </div>
  );
};

export default About;
