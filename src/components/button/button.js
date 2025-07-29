import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonGroup from './components/button-group';
import Element from '../element';
import { normalizeStatus } from '../../services/normalizer';

const Button = ({
  children,
  className,
  renderAs = 'button',
  color,
  size,
  outlined,
  inverted,
  submit,
  reset,
  fullwidth,
  status,
  loading,
  disabled,
  remove,
  isSelected,
  isStatic,
  rounded,
  onClick,
  text,
  ...props
}) => {
  let otherProps = {};
  if (submit) {
    otherProps = {
      type: 'submit',
      renderAs: 'button',
    };
  }
  if (reset) {
    otherProps = {
      type: 'reset',
      renderAs: 'button',
    };
  }

  if (isStatic) {
    otherProps = {
      renderAs: 'span',
    };
  }

  return (
    <Element
      tabIndex={disabled ? -1 : 0}
      renderAs={renderAs}
      {...props}
      {...otherProps}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={classnames(className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        'is-selected': isSelected,
        'is-static': isStatic,
        'is-rounded': rounded,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-fullwidth': fullwidth,
        [`is-${normalizeStatus(status)}`]: status,
        'is-loading': loading,
        'is-text': text,
        delete: remove,
        button: !remove,
      })}
    >
      {children}
    </Element>
  );
};

Button.Group = ButtonGroup;

export default Button;
