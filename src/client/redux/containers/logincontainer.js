import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../../components/login/login';
import * as actions from '../actions/login';

const mapStateToProps = (state) => ({
  login: state.login,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
