import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { auth } from './auth';
import { pollsList } from './pollslist';

const rootReducer = combineReducers({
  auth,
  pollsList,
  routing: routerReducer
});

export default rootReducer;
