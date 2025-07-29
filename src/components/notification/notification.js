import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Notification = ({ className, color, light, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(
        'notification',
        {
          [`is-${color}`]: color,
          'is-light': light,
        },
        className,
      )}
    />
  );
};

export default Notification;
