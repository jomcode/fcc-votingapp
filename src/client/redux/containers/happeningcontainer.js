import React, { Component } from 'react';
import { connect } from 'react-redux';

import Happening from '../../components/happening/happening';
import * as actions from '../actions/happening';

const mapStateToProps = (state) => ({
  happening: state.happening
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const HappeningContainer = connect(mapStateToProps, mapDispatchToProps)(Happening);

export default HappeningContainer;
