/* Login - get token from server */
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const RESET_LOGIN = 'RESET_LOGIN';

/* Logout - remove token from localStorage */
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const RESET_LOGOUT = 'RESET_LOGOUT';

/* Fetch Polls - for PollsList */
export const FETCH_POLLS = 'FETCH_POLLS';
export const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';
export const FETCH_POLLS_FAILURE = 'FETCH_POLLS_FAILURE';
export const RESET_POLLS = 'RESET_POLLS';

/* Fetch Poll - for PollDetails */
export const FETCH_POLL_DETAILS = 'FETCH_POLL_DETAILS';
export const FETCH_POLL_DETAILS_SUCCESS = 'FETCH_POLL_DETAILS_SUCCESS';
export const FETCH_POLL_DETAILS_FAILURE = 'FETCH_POLL_DETAILS_FAILURE';
export const RESET_POLL_DETAILS = 'RESET_POLL_DETAILS';

/* Cast Vote - for PollDetails */
export const CAST_VOTE = 'CAST_VOTE';
export const CAST_VOTE_SUCCESS = 'CAST_VOTE_SUCCESS';
export const CAST_VOTE_FAILURE = 'CAST_VOTE_FAILURE';
export const RESET_CAST_VOTE = 'RESET_CAST_VOTE';

/* Create Poll - for CreatePoll */
export const CREATE_POLL = 'CREATE_POLL';
export const CREATE_POLL_SUCCESS = 'CREATE_POLL_SUCCESS';
export const CREATE_POLL_FAILURE = 'CREATE_POLL_FAILURE';
export const RESET_CREATE_POLL = 'RESET_CREATE_POLL';

/* Sign Up - for SignUp */
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const RESET_SIGN_UP = 'RESET_SIGN_UP';

/* User Profile (User Polls) - for Profile */
export const FETCH_USER_POLLS = 'FETCH_USER_POLLS';
export const FETCH_USER_POLLS_SUCCESS = 'FETCH_USER_POLLS_SUCCESS';
export const FETCH_USER_POLLS_FAILURE = 'FETCH_USER_POLLS_FAILURE';
export const RESET_FETCH_USER_POLLS = 'RESET_FETCH_USER_POLLS';

/* Delete Poll - for Profile */
export const DELETE_POLL = 'DELETE_POLL';
export const DELETE_POLL_SUCCESS = 'DELETE_POLL_SUCCESS';
export const DELETE_POLL_FAILURE = 'DELETE_POLL_FAILURE';
export const RESET_DELETE_POLL = 'RESET_DELETE_POLL';

/* Edit Poll (add choice) - for EditPoll */
export const EDIT_POLL = 'EDIT_POLL';
export const EDIT_POLL_SUCCESS = 'EDIT_POLL_SUCCESS';
export const EDIT_POLL_FAILURE = 'EDIT_POLL_FAILURE';
export const RESET_EDIT_POLL = 'RESET_EDIT_POLL';
