import React, { Component } from 'react';
import { Link } from 'react-router';

const NavLink = ({ to, text }) => (
  <Link to={to} activeClassName="navlink active">{text}</Link>
);

export default NavLink;
