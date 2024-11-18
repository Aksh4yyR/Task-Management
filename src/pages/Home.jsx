import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div>
     

      {/* Hero Section */}
      <section className="hero-section text-light text-center d-flex align-items-center" style={{ height: '100vh', backgroundColor: '#343a40' }}>
        <Container>
          <h1 className="display-4 fw-bold">Welcome to Task Management App</h1>
          <p className="lead">Organize, prioritize, and track your tasks effortlessly.</p>
          <Button variant="primary" size="lg" onClick={handleGetStarted}>
            Get Started
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">Why Choose Us?</h2>
              <p className="text-muted">Efficiently organize and stay on top of your tasks.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center">
              <i className="fas fa-tasks fa-3x text-primary mb-3"></i>
              <h5>Task Management</h5>
              <p>Track tasks with start/end dates, descriptions, and progress updates.</p>
            </Col>
            <Col md={4} className="text-center">
              <i className="fas fa-bell fa-3x text-primary mb-3"></i>
              <h5>Set Reminders</h5>
              <p>Never miss deadlines with timely reminders for your tasks.</p>
            </Col>
            <Col md={4} className="text-center">
              <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
              <h5>Track Progress</h5>
              <p>Monitor your productivity with percentage-based progress tracking.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 bg-primary text-light text-center">
        <Container>
          <h3 className="mb-3">Ready to take control of your tasks?</h3>
          <Button variant="light" size="lg" onClick={handleGetStarted}>
            Start Now
          </Button>
        </Container>
      </section>

      
    </div>
  );
};

export default Home;

