import React, { Component } from 'react';
import { Link } from 'react-router';

const ListItem = ({ id, title }) => (
  <div>
    <h4>{title}</h4>
    <Link to={`/polls/edit/${id}`}>
      <button type="button">Edit</button>
    </Link>
  </div>
);

export default ListItem;
