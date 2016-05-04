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

const fetchPollsFailure = () => ({
  type: ActionTypes.FETCH_POLLS_FAILURE
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
      .catch(err => dispatch(fetchPollsFailure(err)));
  };
}

export { getPolls };
