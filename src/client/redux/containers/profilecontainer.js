import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../components/profile/profile';
import * as actions from '../actions/profile';

const mapStateToProps = (state) => ({
  profile: state.profile,
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username,
  userId: state.auth.userId
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
