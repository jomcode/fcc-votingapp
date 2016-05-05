import * as ActionTypes from '../constants';

const initialState = {
  polls: [],
  error: null,
  isFetching: false
};

const pollsList = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POLLS: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.FETCH_POLLS_SUCCESS: {
      const updatedList = Object.assign({}, state, {
        isFetching: false,
        polls: action.payload.polls
      });

      return Object.assign({}, state, updatedList);
    }

    case ActionTypes.FETCH_POLLS_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_POLLS: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export { pollsList };
