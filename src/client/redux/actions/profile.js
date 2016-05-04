import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const fetchUserPolls = () => ({
  type: ActionTypes.FETCH_USER_POLLS
});

const fetchUserPollsSuccess = (polls) => ({
  type: ActionTypes.FETCH_USER_POLLS_SUCCESS,
  payload: {
    polls
  }
});

const fetchUserPollsFailure = () => ({
  type: ActionTypes.FETCH_USER_POLLS_FAILURE
});

function getUserProfile(userId) {
  return function(dispatch, getState) {
    dispatch(fetchUserPolls());

    fetch(`${rootUrl}/polls/user/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getState().auth.token
      }
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.error) throw new Error(json.error);
      // TODO handle success
      dispatch(fetchUserPollsSuccess(json.polls));
    })
    .catch(err => dispatch(fetchUserPollsFailure(err)));
  };
}

export { getUserProfile };

const deletePoll = () => ({
  type: ActionTypes.DELETE_POLL
});

const deletePollSuccess = (pollId) => ({
  type: ActionTypes.DELETE_POLL_SUCCESS,
  payload: {
    pollId
  }
});

const deletePollFailure = () => ({
  type: ActionTypes.DELETE_POLL_FAILURE
});

function deleteUserPoll(pollId) {
  return function(dispatch, getState) {
    dispatch(deletePoll());

    fetch(`${rootUrl}/polls/${pollId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getState().auth.token
      }
    })
    .then(resp => {
      if (resp.status !== 204) throw new Error(resp.json().error);
      // TODO handle success
      dispatch(deletePollSuccess(pollId));
    })
    .catch(err => dispatch(deletePollFailure(err)));
  };
}

export { deleteUserPoll };
