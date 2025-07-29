import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Tab = ({ children, className, style, active, domRef, renderAs = 'a', ...props }) => {
  return (
    <li
      ref={domRef}
      style={style}
      className={classnames(className, {
        'is-active': active,
      })}
    >
      <Element {...props} renderAs={renderAs}>{children}</Element>
    </li>
  );
};

export default Tab;
