import React, { Component } from 'react';

import EditForm from './editform';

class EditPoll extends Component {
  constructor(props) {
    super(props);
  }

  _handleEditPoll = (data) => {
    const { actions: { addNewChoices }, dispatch, params: { pollId } } = this.props;
    const { newChoices } = data;
    if (newChoices.length < 1) return;
    dispatch(addNewChoices(pollId, newChoices));
  };

  render() {
    return (
      <div>
        <h1>Edit Poll</h1>

        <EditForm
          onSubmit={this._handleEditPoll}
        />
      </div>
    );
  }
}

export default EditPoll;
