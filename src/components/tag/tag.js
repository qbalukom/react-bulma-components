import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TagGroup from './components/tag-group';
import Element from '../element';

const Tag = ({
  children,
  className,
  color,
  size,
  rounded,
  remove,
  renderAs = 'span',
  ...props
}) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('tag', className, {
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-rounded': rounded,
        'is-delete': remove,
      })}
    >
      {!remove && children}
    </Element>
  );
};

Tag.Group = TagGroup;

export default Tag;
