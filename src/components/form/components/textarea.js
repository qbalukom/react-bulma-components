import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeStatus } from '../../../services/normalizer';

const Textarea = ({ className, size, color, status, fixedSize, renderAs = 'textarea', ...props }) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('textarea', className, {
        [`is-${normalizeStatus(status)}`]: status,
        'has-fixed-size': fixedSize,
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
      })}
    />
  );
};

export default Textarea;
