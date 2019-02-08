/**
 * Public home page.
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import NavButton from '../utils/NavButton';


export default () => (
  <Container className="fortius-view" fluid>
    <Header />
    <Row className="content center pt-5">
      <Col xs={12}>
        <h4>
          Welcome to Fortius!
        </h4>
        <p className="pt-3 pb-5">
          You need an account to use this app.
        </p>
        <NavButton to="/login" text="Log In" accent />
        <NavButton to="/signup" text="Sign Up" />
      </Col>
    </Row>
    <footer>
      Created by Joonas Häkkinen. Source available <a href="https://github.com/joonashak/fortius">here</a>.
    </footer>
  </Container>
);
