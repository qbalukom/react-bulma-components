import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../element';

import useFieldContext from './field/context';
import { normalizeAlign } from '../../../services/normalizer';

const InputFile = ({
  className,
  style,
  onChange,
  color,
  size,
  fullwidth,
  align,
  boxed,
  name,
  label = 'Choose a file...',
  icon,
  inputProps = {},
  filename,
  value,
  ...props
}) => {
  const ref = useRef();
  const context = useFieldContext();
  const calculatedSize = size || context.size;

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (value) {
      ref.current.files = value;
    } else {
      ref.current.value = '';
    }
  }, [value]);

  return (
    <Element
      style={style}
      {...props}
      className={classnames('file', className, {
        [`is-${calculatedSize}`]: calculatedSize,
        [`is-${color}`]: color,
        [`is-${normalizeAlign(align)}`]: align,
        'has-name': !!filename,
        'is-boxed': boxed,
        'is-fullwidth': fullwidth,
      })}
    >
      <label className="file-label">
        <input
          {...inputProps}
          name={name}
          type="file"
          className="file-input"
          onChange={onChange}
          ref={ref}
        />
        <span className="file-cta">
          {icon && <span className="file-icon">{icon}</span>}
          <span className="file-label">{label}</span>
        </span>
        {filename && <span className="file-name">{filename}</span>}
      </label>
    </Element>
  );
};

export default InputFile;
