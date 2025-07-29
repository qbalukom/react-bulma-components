import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const PanelBlock = ({ className, active, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('panel-block', className, {
        'is-active': active,
      })}
    />
  );
};

export default PanelBlock;
