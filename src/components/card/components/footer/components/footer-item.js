import React from 'react';
import classnames from 'classnames';
import Element from '../../../../element';

const CardFooterItem = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('card-footer-item', className)} />
  );
};

export default CardFooterItem;
