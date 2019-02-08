/**
 * A view for the user to log in.
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Text } from 'react-form';
import Header from '../Header';
import NavButton from '../utils/NavButton';


export default () => (
  <Container className="fortius-view" fluid>
    <Header />
    <Row className="content center pt-4">
      <Col xs={12}>
        <Form onSubmit={data => console.log(data)}>
          {
            formApi => (
              <form onSubmit={formApi.submitForm}>
                <div className="fields">
                  <Text field="username" id="username" />
                  <label htmlFor="username">Username</label>
                  <Text field="password" type="password" id="password" />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="button-accent mt-5">
                  Log In
                </button>
                <NavButton to="/" text="Back" />
              </form>
            )
          }
        </Form>
      </Col>
    </Row>
  </Container>
);
