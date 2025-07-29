import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Checkbox = ({
  className,
  style,
  disabled,
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
      className={classnames('checkbox', className)}
      style={style}
    >
      <Element type="checkbox" disabled={disabled} {...props} renderAs={renderAs} /> {children}
    </Element>
  );
};

export default Checkbox;
