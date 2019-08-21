import { GET_MOVIES, GET_MOVIE, SEARCH_TITLES, SEARCH_GENRE } from '../actions/movie_actions';
import { merge } from 'lodash'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_MOVIES:
            return merge({}, state, action.movies)
        case GET_MOVIE:
            return merge({}, state, action.movie)
        case SEARCH_TITLES:
            return merge({}, state, action.titles)
        case SEARCH_GENRE:
            return merge({}, state, action.genre)
        default:
            return state
    }
}

export default moviesReducer