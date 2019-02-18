/**
 * User settings controller.
 */
import React from 'react';
import { CombinedConsumer } from '../contexts/CombinedContext';
import SettingsForm from './SettingsForm';
import userService from '../../services/userService';


const Settings = ({ newAlert, resetAlert }) => {
  const update = async (data) => {
    newAlert('Updating settings, please wait...', 'info');
    const { error } = await userService.update(data);
    resetAlert();
  };

  return (
    <div>
      <SettingsForm onSubmit={update} />
    </div>
  );
};

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
