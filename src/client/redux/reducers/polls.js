import * as ActionTypes from '../constants';

const initialState = {
  pollsList: {
    polls: [],
    error: null,
    isFetching: false
  }
};

const polls = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POLLS: {
      return Object.assign({}, state, { pollsList: { isFetching: true } });
    }

    case ActionTypes.FETCH_POLLS_SUCCESS: {
      const updatedList = Object.assign({}, state.pollsList, {
        isFetching: false,
        polls: action.payload.polls
      });

      return Object.assign({}, state, { pollsList: updatedList });
    }

    case ActionTypes.FETCH_POLLS_FAILURE: {
      return Object.assign({}, state, { pollsList: { isFetching: false } });
    }

    case ActionTypes.RESET_POLLS: {
      return initialState;
    }

    default:
      return state;
  }
};

export { polls };
