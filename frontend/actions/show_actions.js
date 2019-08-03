import { findShows, findShow } from '../util/shows_api_util';


export const GET_SHOWS = 'GET_SHOWS';
export const GET_SHOW = 'GET_SHOW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const getShows = (shows) => ({
    type: GET_SHOWS,
    shows
});

const getShow = (show) => ({
    type: GET_SHOW,
    show
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
});

export const userSelectAllShows = () => dispatch => findShows()
    .then((shows) => dispatch(getShows(shows))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );


export const userSelectShow = show => dispatch => findShow(show)
    .then(show => dispatch(getShow(show))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );