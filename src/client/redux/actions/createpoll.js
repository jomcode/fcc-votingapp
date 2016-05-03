import * as ActionTypes from '../constants';

const rootUrl = 'http://localhost:3000/api/v1';

const createPoll = () => ({
  type: ActionTypes.CREATE_POLL
});

const createPollSuccess = () => ({
  type: ActionTypes.CREATE_POLL_SUCCESS
});

const createPollFailure = () => ({
  type: ActionTypes.CREATE_POLL_FAILURE
});

function saveNewPoll() {
  return function(dispatch) {
    dispatch(createPoll());

    return fetch(`${rootUrl}/polls`, {
      method: 'POST'
    })
    .then(resp => resp.json())
    .then(json => dispatch(createPollSuccess()))
    .catch(err => dispatch(createPollFailure(err)));
  };
}

export { saveNewPoll };
