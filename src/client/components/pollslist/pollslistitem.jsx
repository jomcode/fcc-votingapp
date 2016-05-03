import React, { Component } from 'react';
import { Link } from 'react-router';

const PollsListItem = ({ title, subtitle, id }) => (
  <div className="pollslistitem">
    <Link to={`/polls/${id}`}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </Link>
  </div>
);

export default PollsListItem;
