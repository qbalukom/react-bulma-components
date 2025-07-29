import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Block from './components/block';
import Header from './components/header';
import Icon from './components/icon';
import Tabs from './components/tabs';

import Element from '../element';

const Panel = ({ color, className, renderAs = 'nav', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('panel', className, {
        [`is-${color}`]: color,
      })}
    />
  );
};

Panel.Header = Header;
Panel.Tabs = Tabs;
Panel.Block = Block;
Panel.Icon = Icon;

export default Panel;
