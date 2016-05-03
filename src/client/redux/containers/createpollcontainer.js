import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreatePoll from '../../components/createpoll/createpoll';
import * as actions from '../actions/createpoll';

const mapStateToProps = (state) => ({
  createPoll: state.createPoll
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const CreatePollContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePoll);

export default CreatePollContainer;
