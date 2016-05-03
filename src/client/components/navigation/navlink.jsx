import React, { Component } from 'react';
import { Link } from 'react-router';

const NavLink = ({ to, text }) => (
  <Link to={to}>{text}</Link>
);

export default NavLink;
