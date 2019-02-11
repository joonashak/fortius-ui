/**
 * Display registration form for new users.
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import SignupForm from '../forms/SignupForm';
import userService from '../../services/userService';
import { newAlert, resetAlert } from '../../reducers/alertReducer';
import PublicMenu from '../Header/PublicMenu';


const mapDispatchToProps = { newAlert, resetAlert };

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
        <PublicMenu />
      </Header>
      <Row className="content center pt-4">
        <Col xs={12}>
          <SignupForm onSubmit={register} />
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(
  connect(null, mapDispatchToProps)(SignupView),
);
