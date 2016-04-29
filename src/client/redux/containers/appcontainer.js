import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../../components/app/app';

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
