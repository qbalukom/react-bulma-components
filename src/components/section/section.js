import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Section = ({ children, className, size, renderAs = 'section', ...props }) => {
  return (
    <Element
      renderAs={renderAs}
      {...props}
      className={classnames('section', className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

export default Section;
