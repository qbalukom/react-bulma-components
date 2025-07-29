import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HeroHeader from './components/hero-header';
import HeroBody from './components/hero-body';
import HeroFooter from './components/hero-footer';

import Element from '../element';

const Hero = ({
  children,
  className,
  color,
  gradient,
  size,
  hasNavbar,
  renderAs = 'section',
  ...props
}) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('hero', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size && !hasNavbar,
        'is-bold': gradient,
        'is-fullheight-with-navbar': hasNavbar,
      })}
    >
      {children}
    </Element>
  );
};

Hero.Header = HeroHeader;

Hero.Body = HeroBody;

Hero.Footer = HeroFooter;

export default Hero;
