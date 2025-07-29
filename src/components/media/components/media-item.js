import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const MediaItem = ({ children, className, align = 'center', ...props }) => {
  const p = align === 'center' ? 'content' : align;
  return (
    <Element
      {...props}
      className={classnames(className, {
        [`media-${p}`]: p,
      })}
    >
      {children}
    </Element>
  );
};

export default MediaItem;
