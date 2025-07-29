import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Heading = ({
  children,
  className,
  size,
  subtitle,
  weight,
  spaced,
  heading,
  renderAs = 'h1',
  ...props
}) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames(className, {
        title: !subtitle && !heading,
        subtitle,
        heading,
        [`is-${size}`]: size,
        [`has-text-weight-${weight}`]: weight,
        'is-spaced': spaced && !subtitle,
      })}
    >
      {children}
    </Element>
  );
};

export default Heading;
