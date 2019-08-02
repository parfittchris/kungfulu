import {login, signup, logout} from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
});

export const userSignup = formUser => dispatch => signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user))).fail(errors => (
        dispatch(receiveErrors(errors))
    ));

export const userLogin = formUser => dispatch => login(formUser)
    .then(user => dispatch(receiveCurrentUser(user))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );

export const userLogout = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser())).fail(errors => (
        dispatch(receiveErrors(errors)))
    );

