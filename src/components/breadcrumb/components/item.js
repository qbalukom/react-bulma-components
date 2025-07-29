import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../element';

const BreadcrumbItem = ({ className, active, children, renderAs = 'li', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classNames(className, {
        'is-active': active,
      })}
    >
      {children}
    </Element>
  );
};

export default BreadcrumbItem;
