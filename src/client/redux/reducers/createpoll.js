import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null
};

const createPoll = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_POLL: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.CREATE_POLL_SUCCESS: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.CREATE_POLL_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    default:
      return state;
  }
};

export { createPoll };
