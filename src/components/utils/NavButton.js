/**
 * Navigation button for internal links.
 */
import React from 'react';
import { withRouter } from 'react-router-dom';


const NavButton = ({
  children,
  text,
  history,
  to,
  accent
}) => (
  <button
    type="button"
    onClick={() => history.push(to)}
    className={accent ? 'button-accent' : 'button'}
  >
    {children ? children : text}
  </button>
);

export default withRouter(NavButton);
