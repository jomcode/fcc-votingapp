import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import * as ActionTypes from '../constants';
import { auth } from './auth';
import { pollsList } from './pollslist';
import { pollDetails } from './polldetails';
import { createPoll } from './createpoll';

const rootReducer = combineReducers({
  auth,
  pollsList,
  pollDetails,
  createPoll,
  routing: routerReducer,
  form: formReducer.plugin({
    createPoll: (state, action) => {
      switch (action.type) {
        case ActionTypes.CREATE_POLL_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default rootReducer;
