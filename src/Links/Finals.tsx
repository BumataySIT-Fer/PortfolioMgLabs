import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Collapse } from 'react-bootstrap';
import finals1 from '../assets/finals1.png';
import finals2 from '../assets/finals2.png';
import finals3 from '../assets/finals3.png';



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
    label: 'Finals',
    activities: [
      {
        title: 'Finals MG LAB 1',
        description: '',
        reflection: 'What I have learned is how to successfully configure and run both a frontend application and a backend server simultaneously without any errors. It taught me how crucial proper integration is, making sure that the frontend can talk to the backend smoothly over the network. Getting the entire full-stack ecosystem to run without crashes gave me a much clearer understanding of how real-world applications operate.',
        github: 'https://github.com/BumataySIT-Fer/bumats_finals1.git',
        live: 'https://bumataysit-fer.github.io/finals1_bumatay/',
        image: finals1// Example placeholder image URL
      },
      {
        title: 'Finals MG LAB 2',
        description: 'EmailJS Implementation',
        reflection: 'What I have learned from this activity is how to properly implement EmailJS to add a fully working contact form to my website. It taught me how to connect my front-end inputs to an external mail service, allowing users to send real emails directly to my inbox without needing a complex backend setup.',
        github: 'https://drive.google.com/drive/folders/1dDs2M0Ig3nMW01b1th7Rm-ylnySHzy_4',
        live: '',
        image: finals2 
      },
      {
        title: 'Finals MG LAB 3',
        description: '',
        reflection: 'What I have learned from this activity is how to properly implement CRUD operations—Create, Read, Update, and Delete—to manage data dynamically within my projects. It taught me how to connect my user interface directly to a database, allowing users to add new entries, view existing information, modify records, and remove data in real-time. Mastering this workflow is a major milestone because CRUD is the core foundation behind almost every modern, functional web application.',
        github: 'https://github.com/BumataySIT-Fer/Bumatay_FinalProj.git',
        live: 'https://bumataysit-fer.github.io/Bumatay_FinalProj/',
        image: finals3
      },
      {
        title: 'Finals EXAM',
        description: '',
        reflection: 'What I have learned from this final step is how to apply everything I learned in this subject into a single, fully functional portfolio. It taught me how to combine separate concepts like React component structures, routing, state management, and API integrations into one cohesive, professional website. Seeing all of my prelim, midterm, and final activities come together in one place makes me realize how much progress Ive made in building real-world web applications.',
        github: 'https://github.com/BumataySIT-Fer/FinalsLab_Exam.git',
        live: 'https://bumataysit-fer.github.io/FinalsLab_Exam/',
        image: finals3
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