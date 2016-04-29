import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import './client/main.scss';

import configureStore from './client/redux/store/configurestore';
import Root from './client/redux/containers/root';

const rootElement = document.getElementById('root');

const store = configureStore();

render(<Root store={store} />, rootElement);
