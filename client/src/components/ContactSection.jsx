import { Form, Col, Row, Modal, Button } from "react-bootstrap";
import { AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/contactSection.css";
import axios from "axios";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/submitContactForm", {
        name,
        email,
        message,
      });
      setErrorMessage(response.data.message); // Handle successful submission
    } catch (error) {
      setErrorMessage(error.response.data.message); // Handle error
    }
  };

  const handleClose = () => setErrorMessage(null);
  return (
    <div className="container contact-container">
      <Row className="row-section">
        <Col md={6}>
          <p>If you want to work with me please fill form below.</p>

          <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="form-group">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formSubmit" className="form-group submit">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form.Group>
          </Form>
        </Col>

        <Col md={6} className="right-section">
          <div className="contact-details">
            <div className="contact-section">
              <AiOutlineMail className="contact-icon" />
              <div>
                <a href="mailto:advait25tumbre@gmail.com">
                  advait25tumbre@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-section">
              <AiOutlineEnvironment className="contact-icon" />
              <div>Kalyan</div>
            </div>

            <div className="contact-section social-icon-section">
              <a href="https://www.instagram.com/advait_tumbre/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/advait-tumbre-7b878716b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/DevAdvait" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Modal show={errorMessage !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactSection;
