import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Content = ({ children, className, size, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('content', className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

export default Content;
