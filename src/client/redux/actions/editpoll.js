import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const editPoll = () => ({
  type: ActionTypes.EDIT_POLL
});

const editPollSuccess = (updatedPoll) => ({
  type: ActionTypes.EDIT_POLL_SUCCESS,
  payload: {
    updatedPoll
  }
});

const editPollFailure = (error) => ({
  type: ActionTypes.EDIT_POLL_FAILURE,
  error
});

const resetEditPoll = () => ({
  type: ActionTypes.RESET_EDIT_POLL
});

export { resetEditPoll };

function addNewChoices(pollId, newChoices) {
  return function(dispatch, getState) {
    dispatch(editPoll());

    fetch(`${rootUrl}/polls/addchoices/${pollId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getState().auth.token
      },
      body: JSON.stringify({ newChoices, userId: getState().auth.userId })
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.error) throw new Error(json.error);
      dispatch(editPollSuccess(json.updatedPoll));
    })
    .catch(err => dispatch(editPollFailure(err.message)));
  };
}

export { addNewChoices };
