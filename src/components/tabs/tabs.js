import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tab from './components/tab';

import Element from '../element';
import { normalizeAlign } from '../../services/normalizer';

const Tabs = ({
  children,
  className,
  align,
  size,
  type,
  fullwidth,
  ...props
}) => {
  return (
    <Element
      {...props}
      className={classnames('tabs', className, {
        [`is-${normalizeAlign(align)}`]: align,
        [`is-${size}`]: size,
        // Bulma 0.6.2 is not releaset ATM
        'is-toggle': type === 'toggle-rounded',
        [`is-${type}`]: type,
        'is-fullwidth': fullwidth,
      })}
    >
      <ul>{children}</ul>
    </Element>
  );
};

Tabs.Tab = Tab;

export default Tabs;
