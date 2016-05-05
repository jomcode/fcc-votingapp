import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null,
  updatedPoll: null
};

const editPoll = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EDIT_POLL: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.EDIT_POLL_SUCCESS: {
      const updatedPoll = Object.assign({}, action.payload.updatedPoll);
      return Object.assign({}, state, { isFetching: false, updatedPoll });
    }

    case ActionTypes.EDIT_POLL_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_EDIT_POLL: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export { editPoll };
