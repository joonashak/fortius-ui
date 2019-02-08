/**
 * Header with title and menu.
 */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo.svg'


export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
    };
  }

  toggle = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

  close = () => this.setState({ expanded: false });

  render() {
    const { expanded } = this.state;

    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        expanded={expanded}
        onToggle={this.toggle}
      >
        {/* TODO: Embed SVG */}
        <Image src={logo} className="logo" />
        {
          // <Navbar.Toggle />
        }
        
      </Navbar>
    );
  }
}
