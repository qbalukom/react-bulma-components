import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Help = ({ className, children, color, renderAs = 'p', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('help', className, {
        [`is-${color}`]: color,
      })}
    >
      {children}
    </Element>
  );
};

export default Help;
