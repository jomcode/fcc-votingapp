import React, { Component } from 'react';

import EditForm from './editform';

class EditPoll extends Component {
  static contextTypes = { router: React.PropTypes.object };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {
      context: { router },
      props: { editPoll, actions: { resetEditPoll }, dispatch }
    } = this;

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

export default EditPoll;
