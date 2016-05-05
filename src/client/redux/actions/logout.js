import * as ActionTypes from '../constants';

const logout = () => ({
  type: ActionTypes.LOGOUT
});

const logoutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS
});

const logoutFailure = (error) => ({
  type: ActionTypes.LOGOUT_FAILURE,
  error
});

const resetLogout = () => ({
  type: ActionTypes.RESET_LOGOUT
});

const logoutUser = () => (dispatch) => {
  dispatch(logout());
  dispatch(logoutSuccess());
};

export { logoutUser };
