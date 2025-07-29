import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuList from './components/list';

import Element from '../element';

const Menu = ({ className, renderAs = 'aside', ...props }) => {
  return <Element {...props} renderAs={renderAs} className={classnames('menu', className)} />;
};

Menu.List = MenuList;

export default Menu;
