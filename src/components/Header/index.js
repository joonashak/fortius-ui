import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { MdMenu } from 'react-icons/md';
import logo from '../../assets/logo.svg';
import Menu from './Menu';

/**
 * Header with a title and a drop-down menu.
 * In order to render a menu, pass a `<div>` of `react-bootstrap/Nav` components as `children`.
 */
export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
    };
  }

  toggle = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

  render() {
    const { expanded } = this.state;
    const { children, title } = this.props;

    return (
      <Navbar
        expand={false}
        expanded={expanded}
        onToggle={this.toggle}
        onClick={this.toggle}
      >
        {/* TODO: Embed SVG */}
        {
          title ? (
            <span className="view-title">
              {title}
            </span>
          ) : (
            <Image src={logo} className="logo" />
          )
        }
        {
          children && title ? (
            <MdMenu size="100%" className="hamburger" />
          ) : null
        }
        {children ? <Menu>{children}</Menu> : null}
      </Navbar>
    );
  }
}
