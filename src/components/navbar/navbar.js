import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Brand from './components/brand';
import Burger from './components/burger';
import Menu from './components/menu';
import Item from './components/item';
import Dropdown from './components/dropdown';
import Divider from './components/divider';
import Link from './components/link';
import Container from './components/container';
import { ShowContext } from './context';
import Element from '../element';

const Navbar = ({
  children,
  className,
  fixed,
  transparent,
  color,
  active,
  size,
  renderAs = 'nav',
  ...props
}) => {
  useEffect(() => {
    const html = window.document.querySelector('html');
    if (!html.classList.contains(`has-navbar-fixed-${fixed}`)) {
      html.classList.remove('has-navbar-fixed-top');
      html.classList.remove('has-navbar-fixed-bottom');
    }
    if (fixed) {
      html.classList.add(`has-navbar-fixed-${fixed}`);
    }
    return () => {
      return window.document
        .querySelector('html')
        .classList.remove(`has-navbar-fixed-${fixed}`);
    };
  }, [fixed]);
  return (
    <ShowContext.Provider value={active}>
      <Element
        {...props}
        renderAs='nav'
        role="navigation"
        className={classnames('navbar', className, {
          'is-transparent': transparent,
          [`is-fixed-${fixed}`]: fixed,
          [`is-${color}`]: color,
          [`is-spaced`]: size === 'large',
        })}
      >
        {children}
      </Element>
    </ShowContext.Provider>
  );
};

Navbar.Brand = Brand;
Navbar.Burger = Burger;
Navbar.Menu = Menu;
Navbar.Item = Item;
Navbar.Dropdown = Dropdown;
Navbar.Link = Link;
Navbar.Divider = Divider;
Navbar.Container = Container;

export default Navbar;
