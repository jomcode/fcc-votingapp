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
