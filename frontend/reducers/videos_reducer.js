import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';
import showsReducer from './shows_reducer';


export default combineReducers({
    movies: moviesReducer,
    shows: showsReducer
});
