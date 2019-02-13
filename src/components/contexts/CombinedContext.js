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
    {(alertContext) => (
      <UserConsumer>
        {(userContext) => (
          children({
            alertContext,
            userContext,
          })
        )}
      </UserConsumer>
    )}
  </AlertConsumer>
);
