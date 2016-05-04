import * as ActionTypes from '../constants';

import { rootUrl } from '../../config/api';

const signUp = () => ({
  type: ActionTypes.SIGN_UP
});

const signUpSuccess = () => ({
  type: ActionTypes.SIGN_UP_SUCCESS
});

const signUpFailure = () => ({
  type: ActionTypes.SIGN_UP_FAILURE
});

function signUpUser(user) {
  return function(dispatch) {
    dispatch(signUp());

    return fetch(`${rootUrl}/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.error) throw new Error(json.error);
      dispatch(signUpSuccess());
    })
    .catch(err => dispatch(signUpFailure(err)));
  };
}

export { signUpUser };
