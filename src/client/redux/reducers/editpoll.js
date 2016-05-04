import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null
};

const editPoll = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EDIT_POLL: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.EDIT_POLL_SUCCESS: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.EDIT_POLL_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    default:
      return state;
  }
};

export { editPoll };
