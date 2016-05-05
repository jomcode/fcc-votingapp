import * as ActionTypes from '../constants';

const initialState = {
  isAuthenticated: false,
  token: null,
  userId: null,
  username: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        token: action.payload.token,
        userId: action.payload.userId,
        username: action.payload.username,
        isAuthenticated: true
      });
    }

    case ActionTypes.LOGOUT_SUCCESS: {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};

export { auth };
