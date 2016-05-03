import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './client/main.scss';
import configureStore from './client/redux/store/configurestore';
import routes from './client/routes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
);
