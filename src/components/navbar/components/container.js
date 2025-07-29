import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const alignMapper = {
  left: 'start',
  right: 'end',
};

const NavbarContainer = ({ className, children, align = 'left', ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(
        {
          [`navbar-${alignMapper[align]}`]: alignMapper[align],
        },
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default NavbarContainer;
