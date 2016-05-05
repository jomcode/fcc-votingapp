import React, { Component } from 'react';
import { withRouter } from 'react-router';

import PollForm from './pollform';

class CreatePoll extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const { createPoll, dispatch, router, actions: { resetCreatePoll } } = this.props;
    if (createPoll.poll !== null) {
      router.push(`polls/details/${createPoll.poll._id}`);
      dispatch(resetCreatePoll());
    }
  }

  _handleSavePoll = (data) => {
    const { actions: { saveNewPoll }, dispatch } = this.props;
    dispatch(saveNewPoll(data));
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

CreatePoll = withRouter(CreatePoll);

export default CreatePoll;
