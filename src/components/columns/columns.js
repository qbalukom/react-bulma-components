import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Column from './components/column';
import COLUMN_CONSTANTS from './constants';

import Element from '../element';

const Columns = ({
  className,
  breakpoint,
  gap,
  multiline = true,
  centered,
  vCentered,
  variableGap,
  mobile = {},
  tablet = {},
  desktop = {},
  widescreen = {},
  fullhd = {},
  touch = {},
  ...props
}) => {
  return (
    <Element
      {...props}
      {...{ mobile, tablet, desktop, widescreen, fullhd, touch }}
      className={classNames(className, 'columns', {
        [`is-${breakpoint}`]: breakpoint,
        [`is-${gap}`]: gap !== undefined,
        'is-multiline': multiline,
        'is-centered': centered,
        'is-vcentered': vCentered,
        'is-variable':
          gap !== undefined ||
          [touch, mobile, tablet, desktop, widescreen, fullhd].find((b) => {
            return b.gap !== undefined;
          }),
        [`is-${touch.gap}-touch`]: touch.gap !== undefined,
        [`is-${mobile.gap}-mobile`]: mobile.gap !== undefined,
        [`is-${tablet.gap}-tablet`]: tablet.gap !== undefined,
        [`is-${desktop.gap}-desktop`]: desktop.gap !== undefined,
        [`is-${widescreen.gap}-widescreen`]: widescreen.gap !== undefined,
        [`is-${fullhd.gap}-fullhd`]: fullhd.gap !== undefined,
      })}
    />
  );
};

Columns.Column = Column;

Columns.CONSTANTS = COLUMN_CONSTANTS;

export default Columns;
