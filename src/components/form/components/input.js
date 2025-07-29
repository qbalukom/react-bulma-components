import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeStatus } from '../../../services/normalizer';

const Input = ({
  className,
  size,
  color,
  readOnly,
  isStatic,
  status,
  rounded,
  renderAs = 'input',
  ...props
}) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;
  return (
    <Element
      {...props}
      renderAs={renderAs}
      readOnly={readOnly || isStatic}
      className={classnames('input', className, {
        'is-static': isStatic,
        [`is-${normalizeStatus(status)}`]: status,
        'is-rounded': rounded,
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
      })}
    />
  );
};

export default Input;
