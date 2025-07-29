import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const DropdownDivider = ({ className, renderAs = 'hr', ...props }) => {
  return (
    <Element renderAs={renderAs} {...props} className={classnames('dropdown-divider', className)} />
  );
};

export default DropdownDivider;
