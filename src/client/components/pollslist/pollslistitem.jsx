import React, { Component } from 'react';

import './pollslistitem.scss';

const PollsListItem = ({ title, subtitle }) => (
  <div className="pollslistitem">
    <p>{title}</p>
    <p>{subtitle}</p>
  </div>
);

export default PollsListItem;
