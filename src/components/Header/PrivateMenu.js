import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import { CombinedConsumer } from '../contexts/CombinedContext';


const PrivateMenu = ({ unsetToken }) => (
  <IconContext.Provider value={{ size: '100%', className: 'menu-icon' }}>
    <Nav>
      <Link to="/">
        <MdHome />
        Home
      </Link>
    </Nav>
    <Nav>
      <Link to="/" onClick={unsetToken}>
        <IoMdLogOut />
        Log Out
      </Link>
    </Nav>
  </IconContext.Provider>
);

export default (props) => (
  <CombinedConsumer>
    {({ userContext }) => <PrivateMenu {...props} unsetToken={userContext.unsetToken} />}
  </CombinedConsumer>
);
