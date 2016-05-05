import * as ActionTypes from '../constants';

const initialState = {
  isFetching: false,
  error: null
};

const logout = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGOUT: {
      return Object.assign({}, { isFetching: true });
    }

    case ActionTypes.LOGOUT_SUCCESS: {
      return Object.assign({}, { isFetching: false });
    }

    case ActionTypes.LOGOUT_FAILURE: {
      return Object.assign({}, { isFetching: false });
    }

    case ActionTypes.RESET_LOGOUT: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export { logout };
