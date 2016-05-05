import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logout from '../../components/logout/logout';
import * as actions from '../actions/logout';

const mapStateToProps = (state) => ({
  logout: state.logout,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default LogoutContainer;
