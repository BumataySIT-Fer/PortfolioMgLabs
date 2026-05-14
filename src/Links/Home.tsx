import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
              Welcome to my portfolio! This is where I compile all of my laboratory activities, projects, and coursework throughout the semesters. Explore the tabs above to see my progress from Prelims to Finals.
            </p>
           
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

  

      </Container>
    </section>
  );
};

export default Home;