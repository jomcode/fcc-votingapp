import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const createPoll = () => ({
  type: ActionTypes.CREATE_POLL
});

const createPollSuccess = (poll) => ({
  type: ActionTypes.CREATE_POLL_SUCCESS,
  payload: {
    poll
  }
});

const createPollFailure = (error) => ({
  type: ActionTypes.CREATE_POLL_FAILURE,
  error
});

const resetCreatePoll = () => ({
  type: ActionTypes.RESET_CREATE_POLL
});

export { resetCreatePoll };

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
      dispatch(createPollSuccess(json.poll));
    })
    .catch(err => dispatch(createPollFailure('Error creating new poll')));
  };
}

export { saveNewPoll };
