import React, { Component } from 'react';

import PollForm from './pollform';

class CreatePoll extends Component {
  constructor(props) {
    super(props);
  }

  _handleSavePoll = (data) => {
    const { actions: { saveNewPoll }, dispatch } = this.props;
    console.log('_handleSubmit->', data);
  };

  render() {
    return (
      <div>
        <h1>Create New Poll</h1>
        <PollForm
          onSubmit={this._handleSavePoll}
        />
      </div>
    );
  }
}

export default CreatePoll;
