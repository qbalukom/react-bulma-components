import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarDropdown = ({ className, boxed, right, children, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('navbar-dropdown', className, {
        'is-boxed': boxed,
        'is-right': right,
      })}
    >
      {children}
    </Element>
  );
};

export default NavbarDropdown;
