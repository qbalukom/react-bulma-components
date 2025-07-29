import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import List from '../list';

import Element from '../../../../element';

const MenuListItem = ({
  children,
  active,
  className,
  domRef: ref,
  renderAs = 'a',
  ...props
}) => {
  if (
    typeof children !== 'string' &&
    React.Children.toArray(children).length === 1 &&
    React.Children.only(children).type === List
  ) {
    const child = React.Children.only(children);
    return (
      <li ref={ref}>
        <Element
          {...props}
          renderAs={renderAs}
          className={classnames(className, { 'is-active': active })}
        >
          {child.props.title}
        </Element>
        {React.cloneElement(child, { title: undefined })}
      </li>
    );
  }

  return (
    <li ref={ref}>
      <Element
        {...props}
        renderAs={renderAs}
        className={classnames(className, { 'is-active': active })}
      >
        {children}
      </Element>
    </li>
  );
};

export default MenuListItem;
