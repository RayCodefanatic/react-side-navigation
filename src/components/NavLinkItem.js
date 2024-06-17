import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ item }) => (
  <NavLink to={item.path} className="nav-link">
    {item.title}
  </NavLink>
);

export default NavLinkItem;
