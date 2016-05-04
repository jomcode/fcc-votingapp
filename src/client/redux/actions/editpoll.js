import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const editPoll = () => ({
  type: ActionTypes.EDIT_POLL
});

const editPollSuccess = () => ({
  type: ActionTypes.EDIT_POLL_SUCCESS
});

const editPollFailure = () => ({
  type: ActionTypes.EDIT_POLL_FAILURE
});

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
      dispatch(editPollSuccess());
    })
    .catch(err => dispatch(editPollFailure(err)));
  };
}

export { addNewChoices };
export { getPollDetails } from './polldetails';
