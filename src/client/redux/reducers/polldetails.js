import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null,
  poll: {
    _id: null,
    ownerId: null,
    title: null,
    subtitle: null,
    choices: [],
    voterIps: []
  },
  vote: {
    isFetching: false,
    error: null
  }
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

    case ActionTypes.CAST_VOTE: {
      const updatedVote = Object.assign({}, state.vote, { isFetching: true });
      return Object.assign({}, state, { vote: updatedVote });
    }

    case ActionTypes.CAST_VOTE_SUCCESS: {
      const updatedVote = Object.assign({}, state.vote, { isFetching: false });
      return Object.assign({}, state, { vote: updatedVote });
    }

    case ActionTypes.CAST_VOTE_FAILURE: {
      const updatedVote = Object.assign({}, state.vote, { isFetching: false });
      return Object.assign({}, state, { vote: updatedVote });
    }

    default:
      return state;
  }
};

export { pollDetails };
