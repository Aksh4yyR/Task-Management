import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI, loginAPI } from '../services/allAPI';

const Auth = ({ insideRegister = false }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' });

  // Handle register form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    if (userDetails.username && userDetails.email && userDetails.password) {
      try {
        const result = await registerAPI(userDetails);
        if (result.status === 200) {
          alert('Registration Successful');
          navigate('/login');
          setUserDetails({ username: '', email: '', password: '' });
        } else {
          if (result.response.status === 401) {
            alert(result.response.data);
            setUserDetails({ username: '', email: '', password: '' });
          }
        }
      } catch (err) {
        console.error(err);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Please fill all the fields');
    }
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const { email, password } = userDetails;
  
    if (email && password) {
      const reqBody = { email, password };
      try {
        // Call the login API with the request body
        const response = await loginAPI(reqBody);
        console.log('Login Response:', response);  // Log the entire response to check its structure
  
        // Access token and user data from response.data
        const { token, user } = response.data;  // Extract token and user from response.data
  
        // Check if token and user object are available
        if (token && user && user._id) {
          // If login is successful, store user data in sessionStorage
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('userId', user._id);  // Use response.user._id
  
          // Redirect to tasks page after successful login
          navigate(`/${user._id}/tasks`);
        } else {
          alert('Invalid credentials or missing user data in the response.');
        }
      } catch (error) {
        console.error('Login Error:', error);
        alert('An error occurred while logging in. Please try again.');
      }
    } else {
      alert('Please fill in both email and password');
    }
  };
  
  
  
  

  return (
    <>
      
      <Container className="my-5">
        <Row style={{ marginTop: '100px' }} className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">{insideRegister ? 'Register' : 'Login'}</h2>
            <Form>
              {/* Username Field */}
              {insideRegister && (
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                    type="text"
                    placeholder="Enter your username"
                    value={userDetails.username}
                  />
                </Form.Group>
              )}

              {/* Email Field */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  type="email"
                  placeholder="Enter your email"
                  value={userDetails.email}
                />
              </Form.Group>

              {/* Password Field */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                  type="password"
                  placeholder="Enter your password"
                  value={userDetails.password}
                />
              </Form.Group>

              {/* Submit Button */}
              {insideRegister ? (
                <Button onClick={handleRegister} variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              ) : (
                <Button onClick={handleLogin} variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              )}

              {/* Link to switch between Register and Login */}
              {insideRegister ? (
                <p>
                  Already a user? Please <Link to="/login">login</Link>
                </p>
              ) : (
                <p>
                  New user? Please <Link to="/register">register</Link>
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Auth;
