import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';

import Element from '../element';

const Dropdown = ({
  className,
  children,
  value,
  color,
  align,
  right,
  up,
  hoverable,
  label,
  onChange,
  closeOnSelect = true,
  icon,
  domRef,
  disabled,
  menuId = 'dropdown-menu',
  ...props
}) => {
  const ref = useRef(domRef);
  const [isOpen, setIsOpen] = useState(false);
  const close = (evt) => {
    // IDK yet how to test using the ref in enzime
    // istanbul ignore if
    if (
      hoverable ||
      (evt && ref && ref.current && ref.current.contains(evt.target))
    ) {
      return;
    }
    if (ref.current) {
      setIsOpen(false);
    }
  };

  const onSelect = (selectedValue) => {
    return () => {
      if (onChange) {
        onChange(selectedValue);
      }
      if (closeOnSelect) {
        close();
      }
    };
  };

  useEffect(() => {
    window.addEventListener('click', close);
    return () => {
      window.removeEventListener('click', close);
    };
  }, []);

  let current = label;

  const childrenArray = React.Children.map(children, (child, i) => {
    if (
      child.type === DropdownItem &&
      ((i === 0 && !label) || child.props.value === value)
    ) {
      current = child.props.children;
    }
    return React.cloneElement(
      child,
      child.type === DropdownItem
        ? {
            active: child.props.value === value,
            onClick: onSelect(child.props.value),
          }
        : {},
    );
  });

  return (
    <Element
      {...props}
      domRef={ref}
      className={classnames('dropdown', className, {
        'is-active': isOpen,
        'is-up': up,
        'is-right': right || align === 'right',
        'is-hoverable': hoverable,
      })}
    >
      <div
        className="dropdown-trigger"
        role="presentation"
        onClick={() => {
          if (disabled) {
            return;
          }
          setIsOpen((open) => {
            return !open;
          });
        }}
      >
        <Button
          disabled={disabled}
          color={color}
          aria-haspopup
          aria-controls={menuId}
        >
          <span>{current}</span>
          {icon}
        </Button>
      </div>
      <div className="dropdown-menu" id={menuId} role="menu">
        <div className="dropdown-content">{childrenArray}</div>
      </div>
    </Element>
  );
};

Dropdown.Item = DropdownItem;

Dropdown.Divider = DropdownDivider;

export default Dropdown;
