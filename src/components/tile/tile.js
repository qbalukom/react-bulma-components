import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Tile = ({
  children,
  className,
  kind,
  vertical,
  size,
  color,
  ...props
}) => {
  return (
    <Element
      {...props}
      className={classnames('tile', className, {
        [`is-${kind}`]: kind,
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-vertical': vertical,
      })}
    >
      {children}
    </Element>
  );
};

export default Tile;
