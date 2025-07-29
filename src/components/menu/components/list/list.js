import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import MenuListItem from './components/item';

import Element from '../../../element';

const MenuList = ({ className, title, renderAs = 'ul', ...props }) => {
  return (
    <>
      {title && <p className="menu-label">{title}</p>}
      <Element {...props} renderAs={renderAs} className={classnames('menu-list', className)} />
    </>
  );
};

MenuList.Item = MenuListItem;

export default MenuList;
