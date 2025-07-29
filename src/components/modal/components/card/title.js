import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const ModalCardTitle = ({ children, className, renderAs = 'p', ...props }) => {
  return (
    <Element {...props} renderAs={renderAs} className={classnames('modal-card-title', className)}>
      {children}
    </Element>
  );
};

export default ModalCardTitle;
