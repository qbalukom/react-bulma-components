import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from './components/text';

import Element from '../element';

const Icon = ({ size, color, className, align, text, renderAs = 'span', ...props }) => {
  if (text !== undefined) {
    console.warn(
      '[Deprecation] Text prop for Icon Component its deprecated, please use Icon.Text Component instead',
    );
  }
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames(className, {
        icon: !text,
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color,
        'icon-text': text,
      })}
    />
  );
};

Icon.Text = Text;

export default Icon;
