import { GET_MOVIES, GET_MOVIE } from '../actions/movie_actions';
import { merge } from 'lodash'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_MOVIES:
            return merge({}, state, action.movies)
        case GET_MOVIE:
            return merge({}, state, action.movie)
        default:
            return state
    }
}

export default moviesReducer