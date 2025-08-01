import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { normalizeAlign } from '../../services/normalizer';

const buildResponsiveness = (
  currentViewport,
  { display, textAlign, textSize, only, invisible } = {},
) => {
  const suffix = only ? '-only' : '';

  return classnames({
    [`is-${display}-${currentViewport}${suffix}`]: display,
    [`has-text-${normalizeAlign(
      textAlign,
    )}-${currentViewport}${suffix}`]: textAlign,
    [`is-size-${textSize}-${currentViewport}${suffix}`]: textSize,
    [`is-invisible-${currentViewport}${suffix}`]: invisible,
  });
};

export const useElementClassNames = ({
  textColor,
  backgroundColor,
  colorVariant,
  flexDirection,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  flexGrow,
  ratio,
  clearfix,
  paddingless,
  pull,
  marginless,
  overlay,
  clipped,
  radiusless,
  shadowless,
  unselectable,
  invisible,
  clickable,
  srOnly,
  display,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  textWeight,
  textTransform,
  italic,
  textSize,
  textAlign,
  textFamily,
  // responsive
  mobile,
  tablet,
  desktop,
  widescreen,
  fullhd,
  touch,
  untilWidescreen,
  untilFullhd,
  ...props
}) => {
  return [
    classnames(
      {
        [`has-text-${textColor}`]: textColor,
        [`has-background-${backgroundColor}`]: backgroundColor,
        [`is-${colorVariant}`]: colorVariant,
        [`is-flex-direction-${flexDirection}`]: flexDirection,
        [`is-flex-wrap-${flexWrap}`]: flexWrap,
        [`is-justify-content-${justifyContent}`]: justifyContent,
        [`is-align-content-${alignContent}`]: alignContent,
        [`is-align-items-${alignItems}`]: alignItems,
        [`is-flex-grow-${flexGrow}`]: flexGrow,
        'is-clearfix': clearfix,
        [`is-pulled-${pull}`]: pull,
        'is-marginless': marginless,
        'is-paddingless': paddingless,
        'is-overlay': overlay,
        'is-clipped': clipped,
        'is-radiusless': radiusless,
        'is-shadowless': shadowless,
        'is-unselectable': unselectable,
        [`is-${display}`]: display,
        'is-invisible': invisible,
        'is-sr-only': srOnly,
        'is-clickable': clickable,
        [`m-${m}`]: m,
        [`mt-${mt}`]: mt,
        [`mr-${mr}`]: mr,
        [`mb-${mb}`]: mb,
        [`ml-${ml}`]: ml,
        [`mx-${mx}`]: mx,
        [`my-${my}`]: my,
        [`p-${p}`]: p,
        [`pt-${pt}`]: pt,
        [`pr-${pr}`]: pr,
        [`pb-${pb}`]: pb,
        [`pl-${pl}`]: pl,
        [`px-${px}`]: px,
        [`py-${py}`]: py,
        [`has-text-${normalizeAlign(textAlign)}`]: textAlign,
        [`has-text-weight-${textWeight}`]: textWeight,
        [`is-size-${textSize}`]: textSize,
        [`is-${textTransform}`]: textTransform,
        [`is-family-${textFamily}`]: textFamily,
        'is-italic': italic,
      },
      buildResponsiveness('mobile', mobile),
      buildResponsiveness('tablet', tablet),
      buildResponsiveness('desktop', desktop),
      buildResponsiveness('widescreen', widescreen),
      buildResponsiveness('fullhd', fullhd),
      buildResponsiveness('touch', touch),
      buildResponsiveness('until-widescreen', untilWidescreen),
      buildResponsiveness('until-fullhd', untilFullhd),
    ),
    props,
  ];
};

const Element = ({ className, renderAs = 'div', domRef, children, ...allProps }) => {
  const RenderAs = renderAs;
  const [classNames, props] = useElementClassNames(allProps);
  return (
    <RenderAs
      ref={domRef}
      className={classnames(className, classNames) || undefined}
      {...props}
    >
      {children}
    </RenderAs>
  );
};

export default Element;
