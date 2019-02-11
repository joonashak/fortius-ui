import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


export default ({ children }) => (
  <Navbar.Collapse id="basic-navbar-nav">
    {children}
  </Navbar.Collapse>
);
