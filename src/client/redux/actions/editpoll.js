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

function editUserPoll() {
  return function(dispatch) {
    dispatch(editPoll());
    // TODO
  }
}

export { editUserPoll };
