import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from '../../components/signup/signup';
import * as actions from '../actions/signup';

const mapStateToProps = (state) => ({
  signUp: state.signUp
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
