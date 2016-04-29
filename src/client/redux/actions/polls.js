import fetch from 'whatwg-fetch';

import * as ActionTypes from '../constants';

const rootUrl = 'http://localhost:3000';

const fetchPolls = () => ({
  type: ActionTypes.FETCH_POLLS
});

const fetchPollsSuccess = () => ({
  type: ActionTypes.FETCH_POLLS_SUCCESS
});

const fetchPollsFailure = () => ({
  type: ActionTypes.FETCH_POLLS_FAILURE
});

const resetPolls = () => ({
  type: ActionTypes.RESET_POLLS
});
