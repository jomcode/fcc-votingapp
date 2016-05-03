import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { auth } from './auth';
import { pollsList } from './pollslist';
import { pollDetails } from './polldetails';

const rootReducer = combineReducers({
  auth,
  pollsList,
  pollDetails,
  routing: routerReducer
});

export default rootReducer;
