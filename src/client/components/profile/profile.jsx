import React, { Component } from 'react';

import UserPollsList from './userpollslist';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions: { getUserProfile }, dispatch, userId } = this.props;
    dispatch(getUserProfile(userId));
  }

  _handleDelete = (e) => {
    const { actions: { deleteUserPoll }, dispatch } = this.props;
    const { pollId } = e.target.dataset;
    dispatch(deleteUserPoll(pollId));
  };

  render() {
    const { username, profile: { polls } } = this.props;

    return (
      <div>
        <div>
          <h1>{username}'s Polls</h1>

          {
            polls.length > 0 ?
              <UserPollsList
                polls={polls}
                deleteHandler={this._handleDelete}
              /> :
              <p>You haven't created any polls yet!</p>
          }

        </div>
      </div>
    );
  }
}

export default Profile;
