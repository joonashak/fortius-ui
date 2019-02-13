import React from 'react';
import { AlertProvider, AlertConsumer } from './AlertContext';
import { UserProvider, UserConsumer } from './UserContext';


export const CombinedProvider = ({ children }) => (
  <AlertProvider>
    <UserProvider>
      {children}
    </UserProvider>
  </AlertProvider>
);


export const CombinedConsumer = ({ children }) => (
  <AlertConsumer>
    {({ message, variant, newAlert, resetAlert }) => (
      <UserConsumer>
        {({ token, setToken, unsetToken }) => (
          children({
            message,
            variant,
            newAlert,
            resetAlert,
            token,
            setToken,
            unsetToken,
          })
        )}
      </UserConsumer>
    )}
  </AlertConsumer>
);
