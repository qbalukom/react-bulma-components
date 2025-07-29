import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NavbarDropdown from './dropdown';

import Element from '../../element';

const NavbarItem = ({
  className,
  active,
  children,
  hoverable,
  renderAs = 'a',
  arrowless,
  ...props
}) => {
  let as = renderAs;

  const dropdown = React.Children.toArray(children).find((child) => {
    return child.type === NavbarDropdown;
  });

  if (dropdown && renderAs === 'a') {
    as = 'div';
  }
  return (
    <Element
      {...props}
      renderAs={as}
      className={classnames('navbar-item', className, {
        'is-active': active,
        'has-dropdown': dropdown,
        'is-hoverable': hoverable,
        'has-dropdown-up': dropdown && dropdown.props?.up,
        'is-arrowless': arrowless,
      })}
    >
      {children}
    </Element>
  );
};

export default NavbarItem;
