import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Image = ({
  className,
  alt,
  size,
  fallback,
  rounded,
  src,
  fullwidth,
  renderAs = 'figure',
  ...props
}) => {
  const [state, setState] = useState({ src });
  useEffect(() => {
    setState({ src });
  }, [src]);
  let s = size;

  if (typeof size === 'number') {
    s = `${s}x${s}`;
  }
  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('image', className, {
        [`is-${s}`]: s,
        'is-fullwidth': fullwidth,
      })}
    >
      <img
        className={classnames({
          'is-rounded': rounded,
        })}
        onError={() => {
          return state.src !== fallback && setState({ src: fallback });
        }}
        src={state.src}
        alt={alt}
      />
    </Element>
  );
};

export default Image;
