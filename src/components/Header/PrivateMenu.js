import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { IconContext } from 'react-icons';
import { MdHome, MdSettings, MdFitnessCenter } from 'react-icons/md';
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
      <Link to="/workouts">
        <MdFitnessCenter />
        Past Workouts
      </Link>
    </Nav>
    <Nav>
      <Link to="/settings">
        <MdSettings className="accent" />
        Settings
      </Link>
    </Nav>
    <Nav>
      <Link to="/" onClick={unsetToken}>
        <IoMdLogOut className="accent" />
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
