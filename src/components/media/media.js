import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MediaItem from './components/media-item';

import Element from '../element';

const Media = ({ children, className, renderAs = 'article', ...props }) => {
  return (
    <Element {...props} renderAs={renderAs} className={classnames('media', className, {})}>
      {children}
    </Element>
  );
};

Media.Item = MediaItem;

export default Media;
