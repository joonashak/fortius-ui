import React from 'react';


const AlertContext = React.createContext();

export const AlertConsumer = AlertContext.Consumer;

export class AlertProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      variant: '',
    };
  }

  newAlert = (message, variant) => this.setState({ message, variant });

  resetAlert = () => this.setState({ message: '', variant: '' });

  render = () => (
    <AlertContext.Provider
      value={{
        ...this.state,
        newAlert: this.newAlert,
        resetAlert: this.resetAlert,
      }}
    >
      {this.props.children}
    </AlertContext.Provider>
  );
}
