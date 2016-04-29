import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { auth } from './auth';
import { polls } from './polls';

const rootReducer = combineReducers({
  auth,
  polls,
  routing: routerReducer
});

export default rootReducer;
