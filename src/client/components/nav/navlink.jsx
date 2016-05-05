import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const NavLink = ({ to, text, isIndex }) => (
  isIndex ?
    <IndexLink activeClassName="active-nav" to={to}>{text}</IndexLink> :
    <Link activeClassName="active-nav" to={to}>{text}</Link>
);

export default NavLink;
