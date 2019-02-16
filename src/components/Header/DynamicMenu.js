import React from 'react';
import PrivateMenu from './PrivateMenu';
import PublicMenu from './PublicMenu';
import { CombinedConsumer } from '../contexts/CombinedContext';


const DynamicMenu = ({ loggedIn }) => (loggedIn() ? <PrivateMenu /> : <PublicMenu />);

export default (props) => (
  <CombinedConsumer>
    {({ userContext }) => <DynamicMenu {...props} loggedIn={userContext.loggedIn} />}
  </CombinedConsumer>
);
