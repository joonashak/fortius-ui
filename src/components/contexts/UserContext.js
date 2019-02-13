import React from 'react';
import { configureToken } from '../../config';


const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
  }

  setToken = (token) => {
    this.setState({ token });
    configureToken(token);
  };

  unsetToken = () => this.setState({ token: '' });

  render = () => (
    <UserContext.Provider
      value={{
        ...this.state,
        setToken: this.setToken,
        unsetToken: this.unsetToken,
      }}
    >
      {this.props.children}
    </UserContext.Provider>
  );
}
