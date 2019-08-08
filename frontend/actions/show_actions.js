import { findShows, findShow, findTitle } from '../util/shows_api_util';


export const GET_SHOWS = 'GET_SHOWS';
export const GET_SHOW = 'GET_SHOW';
export const SEARCH_TITLES = 'SEARCH_TITLES';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const getShows = (shows) => ({
    type: GET_SHOWS,
    shows
});

const getShow = (show) => ({
    type: GET_SHOW,
    show
});

const searchTitles = (titles) => ({
    type: SEARCH_TITLES,
    titles
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

export const userSearchShowTitles = (titles) => dispatch => findTitle(titles)
    .then((titles) => dispatch(searchTitles(titles))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );
    