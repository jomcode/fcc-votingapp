import React, { Component } from 'react';
import { withRouter } from 'react-router';

import UserPollsList from './userpollslist';

class Profile extends Component {
  constructor(props) {
    super(props);//
  }

  componentWillMount() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  componentDidMount() {
    const { actions: { getUserProfile }, dispatch, userId } = this.props;
    if (userId) dispatch(getUserProfile(userId));
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

Profile = withRouter(Profile);

export default Profile;
