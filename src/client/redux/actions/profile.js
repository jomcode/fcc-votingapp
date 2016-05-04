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
