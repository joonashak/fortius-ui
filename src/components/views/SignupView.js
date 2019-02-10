/**
 * Display registration form for new users.
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import SignupForm from '../forms/SignupForm';


const SignupView = () => {
  return (
    <Container className="fortius-view" fluid>
      <Header title="Sign Up" />
      <Row className="content center pt-4">
        <Col xs={12}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignupView;
