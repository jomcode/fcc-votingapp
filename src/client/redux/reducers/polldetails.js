import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null,
  poll: {}
};

const pollDetails = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POLL_DETAILS: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.FETCH_POLL_DETAILS_SUCCESS: {
      return Object.assign({}, state, { isFetching: false, poll: action.payload.poll });
    }

    case ActionTypes.FETCH_POLL_DETAILS_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    default:
      return state;
  }
};

export { pollDetails };
