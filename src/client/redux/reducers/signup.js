import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_UP: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.SIGN_UP_SUCCESS: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.SIGN_UP_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    default:
      return state;
  }
};

export { signUp };
