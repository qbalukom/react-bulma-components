import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import useFieldContext from './field/context';
import { normalizeStatus } from '../../../services/normalizer';

const Select = ({
  className,
  rounded,
  style,
  size,
  color,
  loading,
  status,
  disabled,
  value,
  multiple,
  children,
  name,
  domRef,
  fullwidth,
  renderAs = 'select',
  ...props
}) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;

  return (
    <Element
      domRef={domRef}
      className={classnames('select', className, {
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
        'is-fullwidth': fullwidth,
        'is-loading': loading,
        'is-multiple': multiple,
        'is-rounded': rounded,
      })}
      style={style}
    >
      <Element
        {...props}
        renderAs={renderAs}
        className={classnames({
          [`is-${normalizeStatus(status)}`]: status,
        })}
        multiple={multiple}
        value={value}
        disabled={disabled}
        name={name}
      >
        {children}
      </Element>
    </Element>
  );
};

export default Select;
