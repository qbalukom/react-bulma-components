import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../element';
import BreadcrumbItem from './components/item';

const Breadcrumb = ({
  className,
  separator,
  size,
  align,
  children,
  renderAs = 'nav',
  ...props
}) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('breadcrumb', className, {
        [`has-${separator}-separator`]: separator,
        [`is-${size}`]: size,
        [`is-${align}`]: align,
      })}
    >
      <ul>{children}</ul>
    </Element>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
