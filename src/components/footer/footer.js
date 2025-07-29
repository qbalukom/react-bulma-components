import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Footer = ({ className, renderAs = 'footer', ...props }) => {
  return <Element {...props} renderAs={renderAs} className={classnames('footer', className)} />;
};

export default Footer;
