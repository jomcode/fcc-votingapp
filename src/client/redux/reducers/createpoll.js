import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null,
  poll: null
};

const createPoll = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_POLL: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.CREATE_POLL_SUCCESS: {
      const updatedPoll = Object.assign({}, action.payload.poll);
      return Object.assign({}, state, { isFetching: false, poll: updatedPoll });
    }

    case ActionTypes.CREATE_POLL_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_CREATE_POLL: {
      return initialState;
    }

    default:
      return state;
  }
};

export { createPoll };
