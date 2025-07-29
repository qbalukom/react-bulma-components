import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../../button';

import Element from '../../../element';
import useModalContext from '../../context';

const ModalCardHead = ({ children, className, showClose = true, renderAs = 'header', ...props }) => {
  const { onClose } = useModalContext();
  return (
    <Element {...props} renderAs={renderAs} className={classnames('modal-card-head', className)}>
      {children}
      {showClose && <Button remove onClick={onClose} />}
    </Element>
  );
};

export default ModalCardHead;
