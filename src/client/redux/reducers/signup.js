import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_UP: {}

    case ActionTypes.SIGN_UP_SUCCESS: {}

    case ActionTypes.SIGN_UP_FAILURE: {}

    default:
      return state;
  }
};

export { signUp };
