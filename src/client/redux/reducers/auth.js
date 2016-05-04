import * as ActionTypes from '../constants';

const initialState = {
  isAuthenticated: false,
  token: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, { token: action.payload.token, isAuthenticated: true });
    }

    default:
      return state;
  }
};

export { auth };
