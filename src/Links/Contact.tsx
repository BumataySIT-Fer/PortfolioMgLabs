import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const PINK = 'rgb(255, 0, 170)';

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com",
    img: "https://img.icons8.com/ios/50/ffffff/instagram-new.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/public-profile/settings/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWqCYe%2Bu6TIetfs%2FeU44Gbw%3D%3D",
    img: "https://img.icons8.com/ios/50/ffffff/linkedin.png",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    img: "https://img.icons8.com/ios/50/ffffff/facebook.png",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return "Please fill in all fields.";
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.email)) {
      return "Invalid email format.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      setIsError(true);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      await fetch("https://portfoliofinals-production.up.railway.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      setStatus("Message sent successfully!");
      setIsError(false);
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("ERROR:", error);
      setStatus("Failed to send message. Please try again.");
      setIsError(true);
    }

    setLoading(false);
  };

  return (
    <section className="bg-dark text-white py-5" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <Container>

        {/* Header */}
        <Row className="mb-5 mt-5 text-center">
          <Col>
              <h1 className="fw-bold display-5">
               CONTACT <span style={{ color: 'rgb(255, 255, 255)' }}>ME</span>
              </h1>
          </Col>
        </Row>

        {/* Form */}
        <Row className="justify-content-center">
          <Col md={7}>
            <div
              className="rounded p-4 bg-black"
              style={{ border: '1px solid #444' }}
            >
              {status && (
                <Alert variant={isError ? "danger" : "success"}>
                  {status}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark text-white border-secondary"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark text-white border-secondary"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-secondary">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-dark text-white border-secondary"
                  />
                </Form.Group>

                <Button
                 variant="light"
                 type="submit"
                 className="w-100 fw-bold"
                disabled={loading}
                >
                 {loading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Social Links */}
        <Row className="justify-content-center mt-5">
          <Col md={7}>
            <div
              className="rounded p-4 bg-black text-center"
              style={{ border: '1px solid #444' }}
            >
              <p className="text-secondary mb-4" style={{ fontSize: '0.85rem', letterSpacing: '2px' }}>
                FIND ME ON
              </p>
              <div className="d-flex justify-content-center" style={{ gap: '32px' }}>
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="d-flex flex-column align-items-center"
                      style={{ gap: '8px', cursor: 'pointer' }}
                    >
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '50%',
                          border: `1px solid #444`,
                          backgroundColor: '#111',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'border-color 0.2s, background-color 0.2s',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = PINK;
                          (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1a001a';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = '#444';
                          (e.currentTarget as HTMLDivElement).style.backgroundColor = '#111';
                        }}
                      >
                        <img
                          src={social.img}
                          alt={social.name}
                          style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                        />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#aaa' }}>
                        {social.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Contact;