import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const fetchPollDetails = () => ({
  type: ActionTypes.FETCH_POLL_DETAILS
});

const fetchPollDetailsSuccess = (poll) => ({
  type: ActionTypes.FETCH_POLL_DETAILS_SUCCESS,
  payload: {
    poll
  }
});

const fetchPollDetailsFailure = (error) => ({
  type: ActionTypes.FETCH_POLL_DETAILS_FAILURE,
  error
});

const resetPollDetails = () => ({
  type: ActionTypes.RESET_POLL_DETAILS
});

function getPollDetails(id) {
  return function(dispatch) {
    dispatch(fetchPollDetails());

    return fetch(`${rootUrl}/polls/${id}`)
      .then(resp => resp.json())
      .then(json => dispatch(fetchPollDetailsSuccess(json.poll)))
      .catch(err => dispatch(fetchPollDetailsFailure(err.message)));
  };
}

export { getPollDetails };

const castVote = () => ({
  type: ActionTypes.CAST_VOTE
});

const castVoteSuccess = () => ({
  type: ActionTypes.CAST_VOTE_SUCCESS
});

const castVoteFailure = (error) => ({
  type: ActionTypes.CAST_VOTE_FAILURE,
  error
});

function vote(pollId, choiceId) {
  return function(dispatch) {
    dispatch(castVote());

    return fetch(`${rootUrl}/polls/vote/${choiceId}`, {
      method: 'PUT'
    })
      .then(resp => resp.json())
      .then(json => {
        dispatch(castVoteSuccess());
        dispatch(getPollDetails(pollId));
      })
      .catch(err => dispatch(castVoteFailure(err.message)));
  }
}

export { vote };
