import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Element from '../../../element';

const Text = ({ className, renderAs = 'span', ...props }) => {
  return <Element {...props} renderAs={renderAs} className={classNames('icon-text', className)} />;
};

export default Text;
