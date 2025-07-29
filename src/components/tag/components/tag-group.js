import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const TagGroup = ({ children, className, gapless, hasAddons, renderAs = 'span', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('tags', className, {
        'has-addons': gapless || hasAddons,
      })}
    >
      {children}
    </Element>
  );
};

export default TagGroup;
