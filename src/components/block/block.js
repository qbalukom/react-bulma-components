import React from 'react';
import classnames from 'classnames';
import Element from '../element';

const Block = ({ className, ...props }) => {
  return <Element {...props} className={classnames('block', className)} />;
};

export default Block;
