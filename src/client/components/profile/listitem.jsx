import React, { Component } from 'react';
import { Link } from 'react-router';

const ListItem = ({ id, title, deleteHandler }) => (
  <div>
    <h4>{title}</h4>
    <Link to={`/polls/edit/${id}`}>
      <button type="button">Add New Choice(s)</button>
    </Link>
    <button type="button" data-poll-id={id} onClick={deleteHandler}>Delete Poll</button>
  </div>
);

export default ListItem;
