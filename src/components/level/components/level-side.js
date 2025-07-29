import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const LevelSide = ({ className, align = 'left', ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(className, {
        [`level-${align}`]: align,
      })}
    />
  );
};

export default LevelSide;
