import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Pogi from '../assets/Pogi.png';
import efset from '../assets/efset.png';
import wiw from '../assets/wiwiw.png';
import ccna from '../assets/ccna.png';
import getting from '../assets/getting.png';
import asean from '../assets/asean.png';

const About: React.FC = () => {

  const certificates = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "November 14, 2025",
      image: Pogi,
      link: "https://www.credly.com/badges/beafe4ce-c92d-4958-81a7-c67cc963f98f"
    },
    {
      title: "EF SET English Certificate",
      issuer: "EF SET",
      date: "22 NOV 2025",
      image: efset,
      link: "https://cert.efset.org/XV5uuk"
    },
    {
      title: "AI Agents for Beginners",
      issuer: "Simplilearn",
      date: "2nd DECEMBER 2025",
      image: wiw,
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODY4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTUxMzA4N185NzkzMDIyMTc2NDY3MjE0MTkxMC5wbmciLCJ1c2VybmFtZSI6IkZlcm5hbmRvIEJ1bWF0YXkifQ%3D%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7834%2FAI-Agents-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true"
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "May 06 2026",
      image: ccna,
      link: "https://www.credly.com/badges/6b4c31bf-e69d-489e-80a9-d3f0b04911e4"
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco",
      date: "Jan 23 2026",
      image: getting,
      link: ""
    },
    {
      title: "AI Class Asean",
      issuer: "AIClassAsean.org ",
      date: "February 27 2026",
      image: asean,
      link: ""
    }
  ];

  return (
    <section className="bg-dark text-white py-5" style={{ minHeight: '100vh' }}>
      <Container>


        <Row className="mb-5 mt-5">
          <Col>
            <h1 className="fw-bold display-5">
               ABOUT <span style={{ color: 'rgb(255, 255, 255)' }}>ME</span>
            </h1>
            
          </Col>
        </Row>


        <Row className="mb-5">
          <Col>
            <p className="text-secondary fs-5 lh-lg">
               I'm a BSIT student still in the middle of figuring it all out, exploring different tracks, 
              trying new things, and slowly piecing together what I actually want to pursue for the rest of my life. 
              Whether it's cybersecurity, web development, or something I haven't discovered yet, 
              I'm keeping my options open and making the most out of every project, certificate, and late night debugging session along the way.
            </p>
          </Col>
        </Row>

   
        <Row>
          <Col xs={12}>
            <h2 className="fw-bold mb-4">CERTIFICATIONS</h2>
          </Col>

          {certificates.map((cert, index) => (
            <Col key={index} md={4} className="mb-4">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Card
                  className="bg-black border border-secondary h-100"
                  style={{ cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'purple')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
                >
                  <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#000' }}>
                    <Card.Img
                      variant="top"
                      src={cert.image}
                      alt={cert.title}
                      style={{ objectFit: 'contain', height: '100%', opacity: 0.85 }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ color: 'rgb(255, 255, 255)' }}>{cert.title}</Card.Title>
                    <Card.Text className="text-secondary mb-1">
                      Issued by: {cert.issuer}
                    </Card.Text>
                    <Badge bg="secondary">{cert.date}</Badge>
                    <div className="mt-2" style={{ fontSize: '0.8rem', color: 'rgb(255, 255, 255)' }}>
                      View Certificate
                    </div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>

        
        <Row className="mt-4">
  <Col xs={12}>
    <h2 className="fw-bold mb-4"> SKILLS</h2>
  </Col>

  {/* Hard Skills Table */}
  <Col md={6} className="mb-4">
    <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">HARD SKILLS</h5>
    <div className="border border-secondary rounded p-4 bg-black h-100">
      {[
        {
          name: "Java OOP Foundations",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "C# Razor Pages",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "React & TypeScript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "MySQL & MongoDB",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Networking (CCNA)",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        },
        {
          name: "Bootstrap & UI Design",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Basic Cybersecurity Knowledge ",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
      ].map((skill, index) => (
        <div
          key={index}
          className="d-flex align-items-center mb-3"
          style={{
            gap: '12px',
            padding: '6px 8px',
            borderRadius: '6px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <img
            src={skill.img}
            alt={skill.name}
            style={{
              width: '28px',
              height: '28px',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
          <span className="text-white" style={{ fontSize: '0.95rem' }}>
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </Col>

  {/* Soft Skills Table */}
  <Col md={6} className="mb-4">
    <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">SOFT SKILLS</h5>
    <div className="border border-secondary rounded p-4 bg-black h-100">
      {[
        {
          name: "Problem Solving",
          img: "https://img.icons8.com/ios/50/ffffff/puzzle.png",
        },
        {
          name: "Communication",
          img: "https://img.icons8.com/ios/50/ffffff/chat.png",
        },
        {
          name: "Team Collaboration",
          img: "https://img.icons8.com/ios/50/ffffff/conference-call.png",
        },
        {
          name: "Adaptability",
          img: "https://img.icons8.com/ios/50/ffffff/synchronize.png",
        },
        {
          name: "Time Management",
          img: "https://img.icons8.com/ios/50/ffffff/time-management.png",
        },
        {
          name: "Critical Thinking",
          img: "https://img.icons8.com/ios/50/ffffff/brain.png",
        },
        {
          name: "Attention to Detail",
          img: "https://img.icons8.com/ios/50/ffffff/zoom-in.png",
        },
        {
          name: "AI Proficiency (Claude, Chat GPT, Gemini , Perplexity )",
          img: "https://img.icons8.com/ios/50/ffffff/artificial-intelligence.png",
        },
      ].map((skill, index) => (
        <div
          key={index}
          className="d-flex align-items-center mb-3"
          style={{
            gap: '12px',
            padding: '6px 8px',
            borderRadius: '6px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <img
            src={skill.img}
            alt={skill.name}
            style={{
              width: '28px',
              height: '28px',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'invert(0)',
            }}
          />
          <span className="text-white" style={{ fontSize: '0.95rem' }}>
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </Col>
</Row>
{/* Tools & Technologies Table */}
<Col xs={12} className="mt-5">
  <h2 className="fw-bold mb-4">TOOLS & TECHNOLOGIES</h2>
</Col>

<Col md={6} className="mb-4">
  <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">DEVELOPMENT TOOLS</h5>
  <div className="border border-secondary rounded p-4 bg-black h-100">
    {[
      {
        name: "Visual Studio Code",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Visual Studio",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      },
      {
        name: "IntelliJ IDEA",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
      {
        name: "Cisco Packet Tracer",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
      },
      {
        name: "MySQL Workbench",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ].map((tool, index) => (
      <div
        key={index}
        className="d-flex align-items-center mb-3"
        style={{
          gap: '12px',
          padding: '6px 8px',
          borderRadius: '6px',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        <img
          src={tool.img}
          alt={tool.name}
          style={{
            width: '28px',
            height: '28px',
            objectFit: 'contain',
            flexShrink: 0,
          }}
        />
        <span className="text-white" style={{ fontSize: '0.95rem' }}>
          {tool.name}
        </span>
      </div>
    ))}
  </div>
</Col>

<Col md={6} className="mb-4">
  <h5 style={{ color: 'rgb(255, 255, 255)' }} className="mb-3">DESIGN & FRAMEWORKS</h5>
  <div className="border border-secondary rounded p-4 bg-black h-100">
    {[
      {
        name: "Adobe Photoshop",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      },
      {
        name: "Razor Pages (ASP.NET)",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      },
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Bootstrap",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Git & GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ].map((tool, index) => (
      <div
        key={index}
        className="d-flex align-items-center mb-3"
        style={{
          gap: '12px',
          padding: '6px 8px',
          borderRadius: '6px',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        <img
          src={tool.img}
          alt={tool.name}
          style={{
            width: '28px',
            height: '28px',
            objectFit: 'contain',
            flexShrink: 0,
            filter: tool.name === 'Git & GitHub' ? 'invert(1)' : 'none',
          }}
        />
        <span className="text-white" style={{ fontSize: '0.95rem' }}>
          {tool.name}
        </span>
      </div>
    ))}
  </div>
</Col>

      </Container>
    </section>
  );
};

export default About;