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

const fetchUserPollsFailure = (error) => ({
  type: ActionTypes.FETCH_USER_POLLS_FAILURE,
  error
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
      dispatch(fetchUserPollsSuccess(json.polls));
    })
    .catch(err => dispatch(fetchUserPollsFailure(err.message)));
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

const deletePollFailure = (error) => ({
  type: ActionTypes.DELETE_POLL_FAILURE,
  error
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
      dispatch(deletePollSuccess(pollId));
    })
    .catch(err => dispatch(deletePollFailure(err.message)));
  };
}

export { deleteUserPoll };
