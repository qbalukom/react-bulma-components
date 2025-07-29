import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';
import useFieldContext from './context';

const FieldLabel = ({ className, size, ...props }) => {
  const context = useFieldContext();
  return (
    <Element
      {...props}
      className={classnames('field-label', className, {
        [`is-${size}`]: size || context.size,
      })}
    />
  );
};

export default FieldLabel;
