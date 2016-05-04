import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditPoll from '../../components/editpoll/editpoll';
import * as actions from '../actions/editpoll';

const mapStateToProps = (state) => ({
  editPoll: state.editPoll,
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username,
  userId: state.auth.userId
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const EditPollContainer = connect(mapStateToProps, mapDispatchToProps)(EditPoll);

export default EditPollContainer;
