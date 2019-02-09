/**
 * Login form.
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Text } from 'react-form';
import Header from '../Header';
import NavButton from '../utils/NavButton';


export default ({ onSubmit }) => (
  <Container className="fortius-view" fluid>
    <Header title="Log In" />
    <Row className="content center pt-4">
      <Col xs={12}>
        <Form onSubmit={onSubmit}>
          {
            formApi => (
              <form onSubmit={formApi.submitForm}>
                <div className="fields">
                  <label htmlFor="username">
                    <Text field="username" id="username" />
                    Username
                  </label>
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
