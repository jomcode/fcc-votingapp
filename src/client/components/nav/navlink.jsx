import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const NavLink = ({ to, text, isIndex }) => (
  isIndex ?
    <IndexLink to={to}>{text}</IndexLink> :
    <Link to={to}>{text}</Link>
);

export default NavLink;
