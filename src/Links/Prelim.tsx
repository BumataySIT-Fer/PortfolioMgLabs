import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Collapse } from 'react-bootstrap';
import mg1 from '../assets/prelim lab1.png';
import mg2 from '../assets/mglab2.png';
import mg3 from '../assets/prelim3.png';
import mg4 from '../assets/prelimexam.png';

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
    label: 'Prelims',
    activities: [
      {
        title: 'Prelim MG LAB 1',
        description: 'Creating a simple Profile using HTML and REACT',
        reflection: 'I learned how to set up and use React properly during our first laboratory activity. The most exciting highlight for me was mastering how to publish a live URL on GitHub. It’s a very useful skill that makes it easy to showcase my projects online.',
        github: 'https://github.com/BumataySIT-Fer/UNIT1_LESSON1_A_Bumatay.git',
        live: 'https://bumataysit-fer.github.io/UNIT1_LESSON1_A_Bumatay/',
        image: mg1 // Example placeholder image URL
      },
      {
        title: ' Prelim MG LAB 2',
        description: ' Implementing TypeScript variables in JSX',
        reflection: 'What I have learned in this activity is how to properly organize my component structure, since I used to mix up where to place my constant values and return statements. It was tricky at first because putting them in the wrong place immediately causes errors. Now, I understand exactly where to write my logic before rendering the layout.',
        github: 'https://github.com/BumataySIT-Fer/fg_lab2_bumatay.git',
        live: 'https://bumataysit-fer.github.io/fg_lab2_bumatay/',
        image: mg2
      },
      {
        title: ' Prelim MG LAB 3',
        description: ' Creating reusable components',
        reflection: 'I learned that passing props simplifies component design by letting me dynamically change what a component displays without rewriting the core code. It makes the entire layout modular since a single component can look and behave differently just by receiving different data. This saves a lot of time and prevents repetitive code blocks.',
        github: 'https://github.com/BumataySIT-Fer/fg_lab3_bumatay.git',
        live: 'https://bumataysit-fer.github.io/fg_lab3_bumatay/',
        image: mg3
      },
      {
        title: ' Prelim EXAM',
        description: ' Exam',
        reflection: 'What I have learned is how to build a clean, structured dashboard layout by separating my data into dedicated sections like the Member List and Activities. It taught me the importance of visual hierarchy making sure headings, member info, and lists are easily readable and well-spaced so the interface doesnt look cluttered or confusing to the user.',
        github: 'https://github.com/BumataySIT-Fer/bumatay-exam-aptech.git',
        live: 'https://bumataysit-fer.github.io/bumatay-exam-aptech/',
        image: mg4
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