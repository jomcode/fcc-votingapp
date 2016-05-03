import * as ActionTypes from '../constants';

const rootUrl = 'http://localhost:3000/api/v1';

const login = () => ({
  type: ActionTypes.LOGIN
});

const loginSuccess = () => ({
  type: ActionTypes.LOGIN_SUCCESS
});

const loginFailure = () => ({
  type: ActionTypes.LOGIN_FAILURE
});

function loginUser() {
  return function(dispatch) {
    dispatch(login());

    fetch(`${rootUrl}/authenticate`, {
      method: 'POST'
    })
    .then(resp => resp.json())
    .then(json => {
      // TODO set auth token in localStorage / auth reducer state slice
      dispatch(loginSuccess());
    })
    .catch(err => dispatch(loginFailure(err)));
  }
}

export { loginUser };
