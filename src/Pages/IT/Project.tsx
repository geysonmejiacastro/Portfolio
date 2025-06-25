import "./Project.css";

const Project: React.FC = () => {
  return (
    <div className="ProjectContainer">
      <div className="Header">PROJECTS</div>

      <div className="pill">
        <strong>Cross-Platform File Sharing Solution</strong><br />
        • Deployed a Samba (SMB) server on macOS to enable secure file access for Windows clients.<br />
        • Managed user permissions and authentication to enforce data security policies.<br />
        • Troubleshot network latency and protocol compatibility issues.<br />
        <div className="tech-stack">
          <span className="tech-pill">macOS</span>
          <span className="tech-pill">Samba</span>
          <span className="tech-pill">SMB</span>
          <span className="tech-pill">Networking</span>
        </div>
      </div>

      <div className="pill">
        <strong>Network Segmentation & QoS Configuration</strong><br />
        • Deployed a managed switch (NETGEAR GS305E) to explore VLANs and QoS in a controlled environment.<br />
        • Segmented IoT devices from workstations via VLANs to limit attack surfaces.<br />
        • Tested QoS policies to prioritize latency-sensitive traffic.<br />
        <div className="tech-stack">
          <span className="tech-pill">NETGEAR GS305E</span>
          <span className="tech-pill">QoS</span>
          <span className="tech-pill">VLAN</span>
          <span className="tech-pill">Networking</span>
        </div>
      </div>

      <div className="pill">
        <strong>Virtual Machine & Linux Lab Setup</strong><br />
        • Deployed Ubuntu virtual machines using VirtualBox.<br />
        • Developed skills in virtualization, multi-OS environments, and troubleshooting.<br />
        <div className="tech-stack">
          <span className="tech-pill">VirtualBox</span>
          <span className="tech-pill">Ubuntu</span>
          <span className="tech-pill">Linux</span>
          <span className="tech-pill">System Admin</span>
        </div>
      </div>

      <div className="pill">
        <strong>Pi-hole Network-Wide Ad Blocking & DNS Management</strong><br />
        • Deployed a Pi-hole DNS sinkhole on Raspberry Pi.<br />
        • Configured custom blocklists and monitored query logs.<br />
        • Set up as a local DNS server for better network performance.<br />
        <div className="tech-stack">
          <span className="tech-pill">Raspberry Pi</span>
          <span className="tech-pill">Pi-hole</span>
          <span className="tech-pill">DNS</span>
          <span className="tech-pill">Ad Blocking</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
