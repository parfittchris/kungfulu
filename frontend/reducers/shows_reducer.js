import { GET_SHOWS, GET_SHOW, SEARCH_TITLES, LIKE_SHOW, REMOVE_LIKE } from '../actions/show_actions';
import { merge } from 'lodash'

const showsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_SHOWS:
            return merge({}, state, action.shows)
        case GET_SHOW:
            return merge({}, state, action.show)
        case SEARCH_TITLES:
            return merge({}, state, action.titles)
        case LIKE_SHOW:
            return merge({}, state, (action.userID, action.show))
        case REMOVE_LIKE:
            return merge({}, state, (action.likeId, action.userId, action.showId))
        default:
            return state
    }
}

export default showsReducer