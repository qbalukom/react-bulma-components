import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const MessageHeader = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('message-header', className)}>
      {children}
    </Element>
  );
};

export default MessageHeader;
