import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const DropdownItem = ({ active, children, value, className, ...props }) => {
  return (
    <Element
      title={value}
      {...props}
      role="presentation"
      className={classnames(className, 'dropdown-item', {
        'is-active': active,
      })}
    >
      {children}
    </Element>
  );
};

export default DropdownItem;
