import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import useFieldContext from './field/context';

const Label = ({ children, className, size, renderAs = 'label', ...props }) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('label', className, {
        [`is-${calculatedSize}`]: calculatedSize,
      })}
    >
      {children}
    </Element>
  );
};

export default Label;
