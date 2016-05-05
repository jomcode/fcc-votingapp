import React, { Component } from 'react';
import { withRouter } from 'react-router';

import EditForm from './editform';

class EditPoll extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const { editPoll, router, dispatch, actions: { resetEditPoll } } = this.props;

    if (editPoll.updatedPoll !== null) {
      router.push(`polls/details/${editPoll.updatedPoll._id}`);
      dispatch(resetEditPoll());
    }
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

EditPoll = withRouter(EditPoll);

export default EditPoll;
