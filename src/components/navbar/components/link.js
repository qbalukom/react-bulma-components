import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarLink = ({ className, children, arrowless, renderAs = 'span', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('navbar-link', className, {
        'is-arrowless': arrowless,
      })}
    >
      {children}
    </Element>
  );
};

export default NavbarLink;
