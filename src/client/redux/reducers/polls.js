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
    case ActionTypes.FETCH_POLLS:
    case ActionTypes.FETCH_POLLS_SUCCESS:
    case ActionTypes.FETCH_POLLS_FAILURE:
    case ActionTypes.RESET_POLLS:
    default:
      return state;
  }
};

export { polls };
