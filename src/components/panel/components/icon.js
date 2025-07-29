import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const PanelIcon = ({ className, renderAs = 'span', ...props }) => {
  return <Element {...props} renderAs={renderAs} className={classnames('panel-icon', className)} />;
};

export default PanelIcon;
