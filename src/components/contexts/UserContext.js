import React from 'react';
import { configureToken } from '../../config';


const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem('token') || '',
    };
  }

  componentDidMount = () => {
    const { token } = this.state;

    // Configure saved token for requests
    if (token !== '') {
      configureToken(token);
    }
  };

  setToken = (token) => {
    this.setState({ token });
    localStorage.setItem('token', token);
    configureToken(token);
  };

  unsetToken = () => this.setToken('');

  loggedIn = () => this.state.token !== '';

  render = () => (
    <UserContext.Provider
      value={{
        ...this.state,
        setToken: this.setToken,
        unsetToken: this.unsetToken,
        loggedIn: this.loggedIn,
      }}
    >
      {this.props.children}
    </UserContext.Provider>
  );
}
