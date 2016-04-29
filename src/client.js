import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './client/main.scss';

import { App } from './client/components/app';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
