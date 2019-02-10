/**
 * A view for the user to log in.
 */
import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import { setToken } from '../../reducers/userReducer';
import { newAlert } from '../../reducers/alertReducer';
import loginService from '../../services/loginService';
import LoginForm from '../auth/LoginForm';


const mapDispatchToProps = { setToken, newAlert };

const LoginView = ({ setToken, newAlert }) => {
  const login = async (data) => {
    newAlert('Logging in...', 'info');

    const { username, password } = data;
    const { token, error } = await loginService.login(username, password);

    token
      ? setToken(token)
      : (error.response && error.response.status === 401)
      ? newAlert('Invalid username or password.', 'error')
      : newAlert('Could not login due to an unknown error.', 'error');
  };

  return (
    <Container className="fortius-view" fluid>
      <Header title="Log In" />
      <Row className="content center pt-4">
        <Col xs={12}>
          <LoginForm onSubmit={login} />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(LoginView);
