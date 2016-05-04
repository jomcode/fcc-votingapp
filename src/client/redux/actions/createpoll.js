import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const createPoll = () => ({
  type: ActionTypes.CREATE_POLL
});

const createPollSuccess = () => ({
  type: ActionTypes.CREATE_POLL_SUCCESS
});

const createPollFailure = () => ({
  type: ActionTypes.CREATE_POLL_FAILURE
});

function saveNewPoll(poll) {
  return function(dispatch, getState) {
    dispatch(createPoll());
    if (!getState().auth.token) console.log('no token!');

    return fetch(`${rootUrl}/polls`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getState().auth.token
      },
      body: JSON.stringify({ poll })
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.error) throw new Error(json.error);
      dispatch(createPollSuccess());
    })
    .catch(err => dispatch(createPollFailure(err)));
  };
}

export { saveNewPoll };
