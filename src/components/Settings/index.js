/**
 * User settings controller.
 */
import React from 'react';
import { CombinedConsumer } from '../contexts/CombinedContext';
import SettingsForm from './SettingsForm';
import userService from '../../services/userService';
import DeleteAccount from './DeleteAccount';


class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValues: null,
    };
  }

  componentDidMount = async () => {
    const { newAlert, resetAlert } = this.props;
    newAlert('Loading data...', 'info');

    const user = await userService.get();

    if (user.error) {
      newAlert('Could not load user data', 'error');
    } else {
      const initialValues = {
        email: user.email || '',
        password: '',
      };
      this.setState({ initialValues });
      resetAlert();
    }
  };

  update = async (data) => {
    const { newAlert, resetAlert } = this.props;

    newAlert('Updating settings, please wait...', 'info');
    const { error } = await userService.update(data);
    error ? newAlert('Could not update user data', 'error') : resetAlert();
  };

  render = () => (
    this.state.initialValues
      ? (
        <div>
          <SettingsForm onSubmit={this.update} initialValues={this.state.initialValues} />
          <DeleteAccount />
        </div>
      ) : null
  );
}

export default (props) => (
  <CombinedConsumer>
    {({ alertContext }) => (
      <Settings
        {...props}
        newAlert={alertContext.newAlert}
        resetAlert={alertContext.resetAlert}
      />
    )}
  </CombinedConsumer>
);
