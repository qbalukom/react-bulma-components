import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Radio = ({
  className,
  style,
  disabled,
  checked,
  value,
  name,
  children,
  domRef,
  renderAs = 'input',
  renderLabelAs = 'label',
  ...props
}) => {
  return (
    <Element
      renderAs={renderLabelAs}
      domRef={domRef}
      disabled={disabled}
      className={classnames('radio', className)}
      style={style}
    >
      <Element
        {...props}
        renderAs={renderAs}
        name={name}
        checked={checked}
        type="radio"
        value={value}
        disabled={disabled}
      />{' '}
      {children}
    </Element>
  );
};

export default Radio;
