import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../../element';

const PanelTabsTab = ({ className, active, renderAs = 'a', ...props }) => {
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames(className, {
        'is-active': active,
      })}
    />
  );
};

export default PanelTabsTab;
