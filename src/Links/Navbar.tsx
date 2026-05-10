import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";

const PURPLE = '#a855f7';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <style>{`
        .nav-logo {
          font-weight: 800;
          font-size: 1.2rem;
          color: white !important;
          text-decoration: none;
          letter-spacing: 1px;
          transition: color 0.2s;
        }
        .nav-logo:hover {
          color: ${PURPLE} !important;
        }
        .nav-custom-link {
          color: #aaa !important;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-custom-link:hover {
          color: ${PURPLE} !important;
          background: rgba(168, 85, 247, 0.1);
        }
        .nav-custom-link.active {
          color: ${PURPLE} !important;
        }
        .hire-btn {
          background: transparent;
          border: 1px solid ${PURPLE};
          color: ${PURPLE} !important;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 6px 18px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .hire-btn:hover {
          background: ${PURPLE};
          color: #fff !important;
        }
        .navbar-toggler {
          border-color: ${PURPLE} !important;
        }
        .navbar-toggler-icon {
          filter: invert(1);
        }
      `}</style>

      <Navbar
        expand="md"
        expanded={expanded}
        onToggle={setExpanded}
        fixed="top"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #222',
          padding: '14px 0',
        }}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="nav-logo">
            Bumatay F.
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle
            aria-controls="main-nav"
            onClick={() => setExpanded(!expanded)}
          />

          {/* Links */}
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center gap-1">
              <Nav.Link
                as={NavLink}
                to="/"
                className="nav-custom-link"
                onClick={() => setExpanded(false)}
                end
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className="nav-custom-link"
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/project"
                className="nav-custom-link"
                onClick={() => setExpanded(false)}
              >
                Projects
              </Nav.Link>

              {/* Hire Me Button */}
              <NavLink
                to="/contact"
                className="hire-btn ms-2"
                onClick={() => setExpanded(false)}
              >
                Hire Me?
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;