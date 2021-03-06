import {findMovies, findMovie, findTitle, findGenre, favMovie, removeFavMovie} from '../util/movie_api_util';


export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const SEARCH_TITLES = 'SEARCH_TITLES';
export const SEARCH_GENRE = 'SEARCH_GENRE';
export const LIKE_MOVIE = 'LIKE_MOVIE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


const getMovies = (movies) => ({
    type: GET_MOVIES,
    movies
});

const getMovie = (movie) => ({
    type: GET_MOVIE,
    movie
}); 

const searchTitles = (titles) => ({
    type: SEARCH_TITLES,
    titles
});

const searchGenre = (genre) => ({
    type: SEARCH_GENRE,
    genre
});

const likeMovie = (userId, movie) => ({
    type: LIKE_MOVIE,
    userId,
    movie
});

const removeLike = (likeId, userId, movieId) => ({
    type: REMOVE_LIKE,
    likeId,
    userId,
    movieId
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
});

export const userSelectAllMovies = () => dispatch => findMovies()
.then((movies) => dispatch(getMovies(movies))).fail(errors => (
    dispatch(receiveErrors(errors)))
);


export const userSelectMovie = movie => dispatch => findMovie(movie)
    .then(movie => dispatch(getMovie(movie))).fail(errors => (
        dispatch(receiveErrors(errors)))
);

export const userSearchTitles = (titles) => dispatch => findTitle(titles)
    .then((titles) => dispatch(searchTitles(titles))).fail(errors => (
        dispatch(receiveErrors(errors)))
);

export const userSearchGenre = (genre) => dispatch => findGenre(genre)
    .then((genre) => dispatch(searchGenre(genre))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );

export const userLikeMovie = (userId, movie) => dispatch => favMovie(userId, movie)
    .then((movie) => dispatch(likeMovie(movie))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );

export const userRemoveLike = (likeId, userId, movieId) => dispatch => removeFavMovie(likeId, userId, movieId)
    .then((movie) => dispatch(removeLike(movie))).fail(errors => (
        dispatch(receiveErrors(errors)))
    );