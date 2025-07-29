import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';
import Container from './components/container';

const Table = ({
  children,
  className,
  size,
  striped,
  bordered,
  hoverable,
  ...props
}) => {
  return (
    <Element
      {...props}
      renderAs="table"
      className={classnames('table', className, {
        [`is-${size}`]: size,
        'is-bordered': bordered,
        'is-striped': striped,
        'is-hoverable': hoverable,
      })}
    >
      {children}
    </Element>
  );
};

Table.Container = Container;

export default Table;
