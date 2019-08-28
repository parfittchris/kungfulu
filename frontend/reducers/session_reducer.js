
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, SEARCH_USER } from '../actions/session_actions'

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer= (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id}
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case SEARCH_USER:
            return {id: action.userId.id}
        default:
            return state
    }
}

export default sessionReducer;