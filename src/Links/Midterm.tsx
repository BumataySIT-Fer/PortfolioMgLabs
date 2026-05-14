import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Collapse } from 'react-bootstrap';

import mmg1 from '../assets/midmg1.png';
import mmg2 from '../assets/mmg2.png';
import mmg3 from '../assets/mmg3.png';
import mexam from '../assets/mexam.png';

interface Activity {
  title: string;
  description: string;
  reflection?: string;
  github?: string;
  live?: string;
  image?: string; // Added optional property for adding a photo string/URL
}

interface Term {
  label: string;
  activities: Activity[];
}

const terms: Term[] = [
  {
    label: 'Midterms',
    activities: [
      {
        title: 'Midterms MG LAB 1 ',
        description: '',
        reflection: 'I learned that maintaining a clean folder organization is essential for managing a React project efficiently as it grows. By keeping my components, assets, and views in structured directories, I dont waste time searching for files when I need to make changes. This practice makes the overall development workflow much smoother and keeps the repository highly professional.',
        github: 'https://github.com/BumataySIT-Fer/MG_Lab4_Bumatay.git',
        live: 'https://bumataysit-fer.github.io/fg_lab5_bumatay/',
        image: mmg1
      },
      {
        title: 'Midterms MG LAB 2',
        description: '',
        reflection: 'What I have learned is how to properly configure a React project using React Router so that navigating between different sections happens instantly without any page reload errors. It taught me how crucial it is to set up a clean, correct path structure from the start. Mastering this ensures a seamless, modern single-page application (SPA) experience where transitions feel smooth and fast.',
        github: 'https://github.com/BumataySIT-Fer/fg_lab5_bumatay.git',
        live: 'https://bumataysit-fer.github.io/fg_lab5_bumatay/',
        image: mmg2
      },
      {
        title: 'Midterms MG LAB 3',
        description: '',
        reflection: 'What I have learned is how to implement both controlled and uncontrolled forms in React using proper TypeScript typing to capture user input securely. It also taught me the importance of form validation, ensuring that data is checked for errors before it gets processed. Mastering this means I can prevent users from submitting incomplete or incorrect data, making the application much more stable.',
        github: 'https://github.com/BumataySIT-Fer/MG_LAB6_BUMATAY1.git',
        live: 'https://bumataysit-fer.github.io/MG_LAB6_BUMATAY/',
        image: mmg3
      },
      {
        title: 'Midterms Exam',
        description: '',
        reflection: 'What I have learned from this step is how to break down an entire website into distinct page components like Home, About, Services, and Contact, and map them cleanly to their respective routes. It helped me practice writing clean React code by keeping each pages logic and design isolated in its own file. This structural practice makes the whole project incredibly organized and easy to maintain or expand in the future.',
        github: 'https://github.com/BumataySIT-Fer/Bumatay_Midterms_Exam.git',
        live: 'https://bumataysit-fer.github.io/Bumatay_Midterms_Exam/',
        image: mexam
      }

    ]
  },
];

const TERM_COLORS: Record<string, string> = {
  Prelims: '#6f42c1',
  Midterms: '#0d6efd',
  Finals: 'rgb(91, 4, 150)'
};

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className="bg-black border border-secondary h-100 overflow-hidden"
      style={{ transition: 'border-color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgb(91, 4, 150)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#6c757d')}
    >
      {/* Activity Image Container */}
      {activity.image && (
        <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderBottom: '1px solid #222' }}>
          <Card.Img 
            variant="top" 
            src={activity.image} 
            alt={`${activity.title} preview`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-white fw-bold">{activity.title}</Card.Title>
        <Card.Text className="text-secondary mb-3" style={{ fontSize: '0.9rem' }}>
          {activity.description}
        </Card.Text>

        {/* Reflection Button Block */}
        {activity.reflection && (
          <div className="mb-3">
            <Button
              variant="outline-light"
              size="sm"
              className="w-100 text-start d-flex justify-content-between align-items-center"
              style={{ 
                borderColor: '#333', 
                fontSize: '0.85rem', 
                backgroundColor: 'rgba(255,255,255,0.02)',
                color: '#ddd'
              }}
              onClick={() => setOpen(!open)}
            >
              <span> {open ? 'Hide Reflection' : 'View Reflection'}</span>
              <span style={{ fontSize: '0.75rem', color: 'rgb(91, 4, 150)' }}>{open ? '▲' : '▼'}</span>
            </Button>
            <Collapse in={open}>
              <div
                className="mt-2 p-3 rounded"
                style={{
                  backgroundColor: '#0a0a0a',
                  borderLeft: '3px solid rgb(91, 4, 150)',
                  fontSize: '0.85rem',
                  color: '#aaaaaa',
                  lineHeight: '1.7'
                }}
              >
                {activity.reflection}
              </div>
            </Collapse>
          </div>
        )}

        {/* Links pushed to bottom */}
        <div className="d-flex gap-2 mt-auto flex-wrap">
          {activity.github && (
            <Button
              variant="outline-secondary"
              size="sm"
              href={activity.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
          {activity.live && (
            <Button
              size="sm"
              href={activity.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: 'rgb(91, 4, 150)', border: 'none' }}
            >
              Live Site
            </Button>
          )}
          {!activity.github && !activity.live && (
            <span style={{ fontSize: '0.8rem', color: '#555' }}>No links yet</span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

const Project: React.FC = () => {
  return (
    <section className="bg-dark text-white py-5" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <Container>

        {/* Header */}
        <Row className="mb-5 mt-3">
          <Col>
            <h1 className="fw-bold display-5">
              MY <span style={{ color: 'rgb(91, 4, 150)' }}>ACTIVITIES</span>
            </h1>
            <hr style={{ borderColor: 'rgb(91, 4, 150)', borderWidth: '3px', opacity: 1, width: '60px' }} />
            <p className="text-secondary fs-5 mt-3">
              A collection of my school activities per term.
            </p>
          </Col>
        </Row>

        {/* Terms */}
        {terms.map((term) => (
          <div key={term.label} className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <Badge
                style={{
                  backgroundColor: TERM_COLORS[term.label] || 'rgb(91, 4, 150)',
                  fontSize: '0.85rem',
                  padding: '6px 16px'
                }}
              >
                {term.label}
              </Badge>
              <hr className="flex-grow-1 border-secondary m-0" />
              <span className="text-secondary" style={{ fontSize: '0.85rem' }}>
                {term.activities.length} {term.activities.length === 1 ? 'activity' : 'activities'}
              </span>
            </div>

            <Row>
              {term.activities.map((activity, index) => (
                <Col key={index} md={6} className="mb-4">
                  <ActivityCard activity={activity} />
                </Col>
              ))}
            </Row>
          </div>
        ))}

      </Container>
    </section>
  );
};

export default Project;