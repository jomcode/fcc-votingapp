import * as ActionTypes from '../constants';

const rootUrl = 'http://localhost:3000/api/v1';

const login = () => ({
  type: ActionTypes.LOGIN
});

const loginSuccess = (token, userId, username) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    userId,
    username
  }
});

const loginFailure = () => ({
  type: ActionTypes.LOGIN_FAILURE
});

function loginUser(username, password) {
  return function(dispatch) {
    dispatch(login());

    fetch(`${rootUrl}/authenticate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(resp => resp.json())
    .then(json => {
      // TODO set auth token in localStorage / auth reducer state slice
      if (json.error) throw new Error(json.error);
      dispatch(loginSuccess(json.token, json.userId, json.username));
    })
    .catch(err => dispatch(loginFailure(err)));
  };
}

export { loginUser };
