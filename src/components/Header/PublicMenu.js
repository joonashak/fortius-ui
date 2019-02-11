import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { IoMdLogIn } from 'react-icons/io';


export default () => (
  <IconContext.Provider value={{ size: '100%', className: 'menu-icon' }}>
    <Nav>
      <Link to="/">
        <MdHome />
        Home
      </Link>
    </Nav>
    <Nav>
      <Link to="/login">
        <IoMdLogIn />
        Log In
      </Link>
    </Nav>
  </IconContext.Provider>
);
