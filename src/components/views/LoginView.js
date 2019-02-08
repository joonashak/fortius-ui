/**
 * A view for the user to log in.
 */
import React from 'react';
import { connect } from 'react-redux';
import { setToken } from '../../reducers/userReducer';
import loginService from '../../services/loginService';
import LoginForm from '../auth/LoginForm';


const mapDispatchToProps = { setToken };

const LoginView = ({ setToken }) => {
  const login = async (data) => {
    const { username, password } = data;
    const { token } = await loginService.login(username, password);

    if (token) {
      setToken(token);
    }
  }

  return (
    <LoginForm onSubmit={login} />
  );
}

export default connect(null, mapDispatchToProps)(LoginView)
