import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import * as ActionTypes from '../constants';
import { auth } from './auth';
import { pollsList } from './pollslist';
import { pollDetails } from './polldetails';
import { createPoll } from './createpoll';
import { login } from './login';

const rootReducer = combineReducers({
  auth,
  pollsList,
  pollDetails,
  createPoll,
  login,
  routing: routerReducer,
  form: formReducer.plugin({
    createPoll: (state, action) => {
      switch (action.type) {
        case ActionTypes.CREATE_POLL_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
    login: (state, action) => {
      switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default rootReducer;
