import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.LOGIN_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    default:
      return state;
  }
};

export { login };
