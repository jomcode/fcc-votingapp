import React, { Component } from 'react';
import { Link } from 'react-router';

const ListItem = ({ id, title, subtitle }) => (
  <div className="pollslistitem">
    <Link to={`/polls/${id}`}>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </Link>
  </div>
);

export default ListItem;
