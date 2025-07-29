import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const HeroFooter = ({ className, renderAs = 'footer', ...props }) => {
  return <Element {...props} renderAs={renderAs} className={classnames(className, 'hero-foot')} />;
};

export default HeroFooter;
