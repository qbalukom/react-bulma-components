import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MessageBody from './components/body';
import MessageHeader from './components/header';

import Element from '../element';

const Message = ({ children, className, color, size, renderAs = 'article', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('message', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

Message.Body = MessageBody;

Message.Header = MessageHeader;

export default Message;
