import React from 'react';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import DynamicMenu from '../Header/DynamicMenu';
import NavButton from './NavButton';
import { CombinedConsumer } from '../contexts/CombinedContext';


const PrivacyNotice = () => (
  <Container className="fortius-view" fluid>
    <Header>
      <DynamicMenu />
    </Header>
    <Row className="content center">
      <Col xs={12}>
        <h4 className="mb-5 mt-5">
          Oops! You need to be logged in to access this feature.
        </h4>
        <NavButton to="/login" text="Log In" accent />
      </Col>
    </Row>
  </Container>
);

const PrivateRoute = ({ loggedIn, ...props }) => (loggedIn()
  ? <Route {...props} />
  : <PrivacyNotice />);

export default (props) => (
  <CombinedConsumer>
    {({ userContext }) => <PrivateRoute {...props} loggedIn={userContext.loggedIn} />}
  </CombinedConsumer>
);
