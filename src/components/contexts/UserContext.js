import React from 'react';


const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
  }

  // setToken = (token) => this.setState({ token });
  setToken = (token) => {
    console.log('token set via context (y)');
    this.setState({ token });
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
