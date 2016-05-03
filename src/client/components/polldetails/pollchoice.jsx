import React, { Component } from 'react';

import './pollchoice.scss';

const PollChoice = ({ id, description, votes }) => (
  <div>
    <p>{description}</p>
    <p>{votes}</p>
  </div>
);

export default PollChoice;
