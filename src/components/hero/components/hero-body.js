import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const HeroBody = ({ className, renderAs = 'div', ...props }) => {
  return <Element {...props} renderAs={renderAs} className={classnames(className, 'hero-body')} />;
};

export default HeroBody;
