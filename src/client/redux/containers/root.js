import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './app';

class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
