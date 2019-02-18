/**
 * User settings editing view.
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import DynamicMenu from '../Header/DynamicMenu';
import Settings from '../Settings';


export default () => (
  <Container className="fortius-view" fluid>
    <Header title="Settings">
      <DynamicMenu />
    </Header>
    <Row className="content center pt-4">
      <Col xs={12}>
        <Settings />
      </Col>
    </Row>
  </Container>
);
