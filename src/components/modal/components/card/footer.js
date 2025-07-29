import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const ModalCardFoot = ({ children, className, renderAs = 'footer', ...props }) => {
  return (
    <Element {...props} renderAs={renderAs} className={classnames('modal-card-foot', className)}>
      {children}
    </Element>
  );
};

export default ModalCardFoot;
