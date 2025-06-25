import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h1 className="section-title">Geyson Mejia Castro</h1>
      <p className="contact-info">
        geysonmejiacastro@gmail.com • 917-349-4673
      </p>

      <section>
        <h2 className="section-heading">Experience</h2>
        <div className="entry">
          <h3>Web Developer Intern – EverGreen Investment (Mar 2025 – May 2025)</h3>
          <ul>
            <li>Built a full-stack website using React and PostgreSQL.</li>
            <li>Used AWS for deployment, gaining experience with cloud hosting.</li>
            <li>Worked with REST APIs, UI components, and DevOps fundamentals.</li>
            <li>Implemented user authentication with JWT and OAuth protocols.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-heading">Projects</h2>
        <div className="entry">
          <h3>Cross-Platform File Sharing Solution</h3>
          <ul>
            <li>Deployed a Samba (SMB) server on macOS for secure Windows access.</li>
            <li>Managed user permissions and network transfer performance.</li>
          </ul>
        </div>

        <div className="entry">
          <h3>Network Segmentation & QoS Configuration</h3>
          <ul>
            <li>Configured VLANs and QoS using a NETGEAR GS305E switch.</li>
            <li>Simulated enterprise zero-trust architecture for security and traffic shaping.</li>
          </ul>
        </div>

        <div className="entry">
          <h3>Virtual Machine & Linux Lab Setup</h3>
          <ul>
            <li>Created Ubuntu virtual machines using VirtualBox.</li>
            <li>Practiced troubleshooting in multi-OS environments.</li>
          </ul>
        </div>

        <div className="entry">
          <h3>Pi-hole Ad Blocking & DNS Management</h3>
          <ul>
            <li>Set up a Raspberry Pi running Pi-hole for network-wide DNS filtering.</li>
            <li>Improved security and speed by blocking ads and trackers locally.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-heading">Education</h2>
        <p>Associate of Science, Computer Science – Bronx Community College (2022–2024) – GPA: 3.2</p>
        <p>Bachelor of Science, Computer Science – Lehman College (2025–2026) – GPA: 3.5</p>
      </section>

      <section>
        <h2 className="section-heading">Certifications</h2>
        <ul className="pill-list">
          <li className="pill">CompTIA A+</li>
          <li className="pill">CompTIA ITF+</li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">Skills</h2>
        <ul className="pill-list">
          <li className="pill">Windows 10/11</li>
          <li className="pill">Linux (Ubuntu)</li>
          <li className="pill">Troubleshooting (Hardware, Software, Network)</li>
          <li className="pill">VLANs, QoS, DNS/DHCP</li>
          <li className="pill">VirtualBox, VMware</li>
          <li className="pill">Wireshark</li>
          <li className="pill">PuTTY</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
