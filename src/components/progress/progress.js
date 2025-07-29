import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Progress = ({ className, value, max, color, size, renderAs = 'progress', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      value={value}
      max={max}
      className={classnames('progress', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
      })}
    />
  );
};

export default Progress;
