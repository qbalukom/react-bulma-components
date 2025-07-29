import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const NavbarBrand = ({ className, children, ...props }) => {
  return (
    <Element {...props} className={classnames('navbar-brand', className)}>
      {children}
    </Element>
  );
};

export default NavbarBrand;
