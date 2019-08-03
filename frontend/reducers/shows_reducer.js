import { GET_SHOWS, GET_SHOW } from '../actions/show_actions';
import { merge } from 'lodash'

const showsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_SHOWS:
            return merge({}, state, action.shows)
        case GET_SHOW:
            return merge({}, state, action.movie)
        default:
            return state
    }
}

export default showsReducer