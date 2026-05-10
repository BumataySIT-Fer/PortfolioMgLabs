import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pro from '../assets/pro.png';

const Home: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#111111', minHeight: '100vh', color: 'white' }}>
      <Container>

        {/* Hero */}
        <Row className="align-items-center" style={{ paddingTop: '130px', paddingBottom: '80px' }}>
          <Col md={7}>
            <p style={{ color: 'rgb(255, 255, 255)', letterSpacing: '3px', fontSize: '0.85rem' }}>
              BSIT STUDENT · UNIVERSITY OF BAGUIO
            </p>
            <h1 style={{ fontWeight: 'bold', fontSize: '3rem', lineHeight: '1.2' }}>
              Hi, I'm <br />
              <span style={{ color: 'white' }}>Bumatay Fernando</span>
            </h1>
            <p style={{ fontSize: '1.1rem', marginTop: '20px', color: '#aaaaaa', lineHeight: '1.8' }}>
              I am a 1st year BSIT student at the University of Baguio.
              I am interested in coding and learning how computer systems work.
              This is my personal portfolio where I show my school projects and skills.
            </p>
            <div className="mt-4 d-flex gap-3">
              <Button
                as={Link as any}
                to="/about"
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  color: 'black',
                  border: 'none',
                  fontWeight: 'bold',
                  padding: '10px 24px'
                }}
              >
                About Me
              </Button>
              <Button
                as={Link as any}
                to="/contact"
                variant="outline-light"
                style={{ padding: '10px 24px' }}
              >
                Contact Me
              </Button>
            </div>
          </Col>

          <Col md={5} className="text-center mt-5 mt-md-0">
            <div style={{
              width: '280px',
              height: '280px',
              border: '3px solid rgb(255, 255, 255)',
              borderRadius: '50%',
              margin: '0 auto',
              overflow: 'hidden'
            }}>
              <img
                src={pro}
                alt="Bumatay Fernando"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ borderColor: '#222' }} />

        {/* Career History */}
        <Row className="py-5">
          <Col xs={12} className="mb-4">
            <h5 style={{ color: 'rgb(255, 255, 255)', letterSpacing: '3px', fontSize: '0.85rem' }}>
              CAREER HISTORY
            </h5>
          </Col>
          <Col xs={12}>
            <Row className="align-items-start">
              <Col md={2} className="mb-2">
                <span style={{ color: '#555', fontSize: '0.9rem' }}>FreeLancer</span>
              </Col>
              <Col md={3} className="mb-2">
                <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '4px' }}>FIVERR</p>
                <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '0' }}>2021 — 2024</p>
              </Col>
              <Col md={7}>
                <p style={{ color: '#aaaaaa', lineHeight: '1.8', marginBottom: '0' }}>
                  Managed end to end software procurement and installation for diverse clients,
                  ensuring all applications were properly configured and optimized for performance.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ borderColor: '#222' }} />

        {/* Education */}
        <Row className="py-5">
          <Col xs={12} className="mb-4">
            <h5 style={{ color: 'rgb(255, 255, 255)', letterSpacing: '3px', fontSize: '0.85rem' }}>
              EDUCATION
            </h5>
          </Col>

          <Col md={4} className="mb-4">
            <div style={{ borderLeft: '2px solid #222', paddingLeft: '20px' }}>
              <p style={{ color: '#555', fontSize: '0.8rem', marginBottom: '4px' }}>2012 — 2018</p>
              <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '4px' }}>Pacday Elementary School</p>
              <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '0' }}>Primary Education</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div style={{ borderLeft: '2px solid #222', paddingLeft: '20px' }}>
              <p style={{ color: '#555', fontSize: '0.8rem', marginBottom: '4px' }}>2019 — 2025</p>
              <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '4px' }}>Joaquin Smith National High School</p>
              <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '0' }}>TVL — Tourism</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div style={{ borderLeft: '2px solid rgb(255, 255, 255)', paddingLeft: '20px' }}>
              <p style={{ color: '#555', fontSize: '0.8rem', marginBottom: '4px' }}>2025 — Present</p>
              <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '4px' }}>University of Baguio</p>
              <p style={{ color: '#aaaaaa', fontSize: '0.85rem', marginBottom: '0' }}>BS Information Technology</p>
            </div>
          </Col>
        </Row>

        <div style={{ paddingBottom: '60px' }} />

      </Container>
    </section>
  );
};

export default Home;