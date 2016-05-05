import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null,
  user: null
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_UP: {
      return Object.assign({}, state, { isFetching: true });
    }

    case ActionTypes.SIGN_UP_SUCCESS: {
      const updatedUser = Object.assign({}, action.payload.user);
      return Object.assign({}, state, { isFetching: false, user: updatedUser });
    }

    case ActionTypes.SIGN_UP_FAILURE: {
      return Object.assign({}, state, { isFetching: false });
    }

    case ActionTypes.RESET_SIGN_UP: {
      return initialState;
    }

    default:
      return state;
  }
};

export { signUp };
