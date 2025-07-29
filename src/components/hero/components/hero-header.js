import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const HeroHeader = ({ className, renderAs = 'header', ...props }) => {
  return <Element {...props} renderAs={renderAs} className={classnames(className, 'hero-head')} />;
};

export default HeroHeader;
