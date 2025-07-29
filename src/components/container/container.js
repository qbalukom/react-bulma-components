import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Container = ({ children, max, breakpoint, className, ...props }) => {
  const canSetMax = ['desktop', 'widescreen'].includes(breakpoint);
  return (
    <Element
      {...props}
      className={classnames('container', className, {
        [`is-${canSetMax && max ? 'max-' : ''}${breakpoint}`]: breakpoint,
      })}
    >
      {children}
    </Element>
  );
};

export default Container;
