import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../element';

const Column = ({
  children,
  className,
  size,
  offset,
  narrow,
  mobile = {},
  tablet = {},
  desktop = {},
  widescreen = {},
  fullhd = {},
  touch = {},
  ...props
}) => {
  return (
    <Element
      {...props}
      {...{ mobile, tablet, desktop, widescreen, fullhd, touch }}
      className={classNames(className, 'column', {
        [`is-${size}`]: size,
        [`is-${touch.size}-mobile`]: touch.size,
        [`is-${mobile.size}-mobile`]: mobile.size,
        [`is-${tablet.size}-tablet`]: tablet.size,
        [`is-${desktop.size}-desktop`]: desktop.size,
        [`is-${widescreen.size}-widescreen`]: widescreen.size,
        [`is-${fullhd.size}-fullhd`]: fullhd.size,
        [`is-offset-${touch.offset}-mobile`]: touch.offset,
        [`is-offset-${mobile.offset}-mobile`]: mobile.offset,
        [`is-offset-${tablet.offset}-tablet`]: tablet.offset,
        [`is-offset-${desktop.offset}-desktop`]: desktop.offset,
        [`is-offset-${widescreen.offset}-widescreen`]: widescreen.offset,
        [`is-offset-${fullhd.offset}-fullhd`]: fullhd.offset,
        [`is-offset-${offset}`]: offset,
        'is-narrow': narrow,
        'is-narrow-touch': touch.narrow,
        'is-narrow-mobile': mobile.narrow,
        'is-narrow-tablet': tablet.narrow,
        'is-narrow-desktop': desktop.narrow,
        'is-narrow-widescreen': widescreen.narrow,
        'is-narrow-fullhd': fullhd.narrow,
      })}
    >
      {children}
    </Element>
  );
};

export default Column;
