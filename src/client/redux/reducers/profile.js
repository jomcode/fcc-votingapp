import * as ActionTypes from '../constants';

const initialState = {
  polls: [],
  isFetching: false,
  error: null
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_POLLS: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.FETCH_USER_POLLS_SUCCESS: {
      const { polls } = action.payload;
      return Object.assign({}, state, { isFetching: false, polls });
    }

    case ActionTypes.FETCH_USER_POLLS_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.DELETE_POLL: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.DELETE_POLL_SUCCESS: {
      const updatedPolls = state.polls.filter(p => p._id !== action.payload.pollId);
      return Object.assign({}, state, { isFetching: false, polls: updatedPolls });
    }

    case ActionTypes.DELETE_POLL_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    default:
      return state;
  }
};

export { profile };
