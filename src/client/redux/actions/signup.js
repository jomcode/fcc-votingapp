import * as ActionTypes from '../constants';

const signUp = () => ({
  type: ActionTypes.SIGN_UP
});

const signUpSuccess = () => ({
  type: ActionTypes.SIGN_UP_SUCCESS
});

const signUpFailure = () => ({
  type: ActionTypes.SIGN_UP_FAILURE
});

function signUpUser() {}

export { signUpUser };
