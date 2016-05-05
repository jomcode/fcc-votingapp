import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const fetchPolls = () => ({
  type: ActionTypes.FETCH_POLLS
});

const fetchPollsSuccess = (polls) => ({
  type: ActionTypes.FETCH_POLLS_SUCCESS,
  payload: {
    polls
  }
});

const fetchPollsFailure = (error) => ({
  type: ActionTypes.FETCH_POLLS_FAILURE,
  error
});

const resetPolls = () => ({
  type: ActionTypes.RESET_POLLS
});

function getPolls() {
  return function(dispatch) {
    dispatch(fetchPolls());

    return fetch(`${rootUrl}/polls`)
      .then(resp => resp.json())
      .then(json => dispatch(fetchPollsSuccess(json.polls)))
      .catch(err => dispatch(fetchPollsFailure(err.message)));
  };
}

export { getPolls };
