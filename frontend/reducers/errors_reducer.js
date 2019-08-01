import { combineReducers } from 'redux'
import sessionErrorReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
    errors: sessionErrorReducer
});

export default errorsReducer