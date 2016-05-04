import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions: { getUserProfile }, dispatch, userId } = this.props;
    dispatch(getUserProfile(userId));
  }

  render() {
    return (
      <div>
        profile
      </div>
    );
  }
}

export default Profile;
