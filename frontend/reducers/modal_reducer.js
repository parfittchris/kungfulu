import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = {}, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                type: action.modal,
                id: action.id
            }
        case CLOSE_MODAL:
            return {};
        default:
            return state;
    }
}