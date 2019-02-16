/**
 * Display registration form for new users.
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import SignupForm from '../forms/SignupForm';
import userService from '../../services/userService';
import { CombinedConsumer } from '../contexts/CombinedContext';
import DynamicMenu from '../Header/DynamicMenu';


const SignupView = ({ newAlert, resetAlert, history }) => {
  const register = async (data) => {
    newAlert('Registering, please wait...', 'info');
    const { error } = await userService.create(data);
    resetAlert();

    !error
      ? history.push('/login')
      : error.response && error.response.data.error === 'username duplicate'
      ? newAlert('Username is already taken.', 'error')
      : error.response && error.response.data.error === 'email duplicate'
      ? newAlert('E-mail already exists.', 'error')
      : newAlert('Registration failed.', 'error');
  };

  return (
    <Container className="fortius-view" fluid>
      <Header title="Sign Up">
        <DynamicMenu />
      </Header>
      <Row className="content center pt-4">
        <Col xs={12}>
          <SignupForm onSubmit={register} />
        </Col>
      </Row>
    </Container>
  );
};

const SignupViewWithConsumer = (props) => (
  <CombinedConsumer>
    {({ alertContext }) => (
      <SignupView
        {...props}
        newAlert={alertContext.newAlert}
        resetAlert={alertContext.resetAlert}
      />
    )}
  </CombinedConsumer>
);

export default withRouter(SignupViewWithConsumer);
