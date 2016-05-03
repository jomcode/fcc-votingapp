import * as ActionTypes from '../constants';

const rootUrl = 'http://localhost:3000/api/v1';

const fetchPollDetails = () => ({
  type: ActionTypes.FETCH_POLL_DETAILS
});

const fetchPollDetailsSuccess = (poll) => ({
  type: ActionTypes.FETCH_POLL_DETAILS_SUCCESS,
  payload: {
    poll
  }
});

const fetchPollDetailsFailure = () => ({
  type: ActionTypes.FETCH_POLL_DETAILS_FAILURE
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
      .catch(err => dispatch(fetchPollDetailsFailure(err)));
  };
}

export { getPollDetails };

const castVote = () => ({
  type: ActionTypes.CAST_VOTE
});

const castVoteSuccess = () => ({
  type: ActionTypes.CAST_VOTE_SUCCESS
});

const castVoteFailure = () => ({
  type: ActionTypes.CAST_VOTE_FAILURE
});

function vote(pollId, choiceId) {
  return function(dispatch) {
    dispatch(castVote());

    return fetch(`${rootUrl}/polls/vote/${choiceId}`, {
      method: 'PUT'
    })
      .then(resp => resp.json())
      .then(json => {
        dispatch(getPollDetails(pollId)); // refresh details view
      })
      .catch(err => dispatch(castVoteFailure(err)));
  }
}

export { vote };
