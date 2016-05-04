import React, { Component } from 'react';
import { Link } from 'react-router';

const ListItem = ({ id, title }) => (
  <div>
    <h4>{title}</h4>
    <Link to={`/polls/edit/${id}`}>
      <button type="button">Edit</button>
    </Link>
    <button type="button">Delete</button>
  </div>
);

export default ListItem;
