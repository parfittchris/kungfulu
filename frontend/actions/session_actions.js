import {login, signup, logout, findUser} from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const SEARCH_USER = 'SEARCH_USER';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const searchUser = (userId) => ({
    type: SEARCH_USER,
    userId
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

export const searchForUser = (userId) => dispatch => findUser(userId)
    .then((userId) => dispatch(searchUser(userId))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );

