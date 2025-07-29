import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../../element';

const ModalCardBody = ({ children, className, renderAs = 'section', ...props }) => {
  return (
    <Element {...props} renderAs={renderAs} className={classnames('modal-card-body', className)}>
      {children}
    </Element>
  );
};

export default ModalCardBody;
