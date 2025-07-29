import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldLabel from './field-label';
import FieldBody from './field-body';

import Element from '../../../element';
import { normalizeAlign } from '../../../../services/normalizer';
import useFieldContext, { FieldContext } from './context';

const Field = ({
  className,
  align,
  multiline,
  horizontal,
  kind,
  size,
  ...props
}) => {
  const context = useFieldContext();
  let k = null;

  if (kind === 'addons') {
    k = 'has-addons';
  } else if (kind === 'group') {
    k = 'is-grouped';
  }

  return (
    <FieldContext.Provider value={{ size: size || context.size }}>
      <Element
        {...props}
        className={classnames('field', className, {
          [`${k}`]: k,
          [`${k}-${normalizeAlign(align)}`]: k === 'is-grouped' && align,
          [`${k}-multiline`]: k === 'is-grouped' && multiline,
          'is-horizontal': horizontal,
        })}
      />
    </FieldContext.Provider>
  );
};

Field.Label = FieldLabel;

Field.Body = FieldBody;

export default Field;
