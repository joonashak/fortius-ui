import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { IconContext } from 'react-icons';
import { MdHome } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';


export default () => (
  <IconContext.Provider value={{ size: '100%', className: 'menu-icon' }}>
    <Nav>
      <Link to="/">
        <MdHome />
        Home
      </Link>
    </Nav>
    <Nav>
      <Link to="/">
        <IoMdLogOut />
        Log Out FIXTHIS
      </Link>
    </Nav>
  </IconContext.Provider>
);
