import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarDivider = ({ className, renderAs = 'hr', ...props }) => {
  return (
    <Element {...props} renderAs={renderAs} className={classnames('navbar-divider', className)} />
  );
};

export default NavbarDivider;
