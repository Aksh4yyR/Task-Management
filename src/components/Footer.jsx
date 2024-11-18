import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="fw-bold">Task Management App</h5>
            <p>Efficiently organize and track your tasks with ease.</p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/tasks" className="text-light text-decoration-none">My Tasks</a></li>
              <li><a href="/" className="text-light text-decoration-none">Profile</a></li>
              <li><a href="/" className="text-light text-decoration-none">Support</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@taskapp.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Task Management App. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
