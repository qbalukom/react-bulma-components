import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import { normalizeAlign } from '../../../services/normalizer';

const ButtonGroup = ({ className, hasAddons, align, size, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('buttons', className, {
        'has-addons': hasAddons,
        [`is-${[normalizeAlign(align)]}`]: align,
        [`are-${size}`]: size,
      })}
    />
  );
};

export default ButtonGroup;
