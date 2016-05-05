import React, { Component } from 'react';

import PollForm from './pollform';

class CreatePoll extends Component {
  static contextTypes = { router: React.PropTypes.object };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {
      context: { router },
      props: { createPoll, actions: { resetCreatePoll }, dispatch }
    } = this;

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

export default CreatePoll;
