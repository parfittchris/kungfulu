import { connect } from 'react-redux';
import { userLogout } from '../../actions/session_actions';
import { userSelectAllShows, userSelectShow } from '../../actions/show_actions';
import { userSelectAllMovies, userSelectMovie } from '../../actions/movie_actions';
import { userLikeShow, userRemoveLike } from '../../actions/show_actions'
import { userLikeMovie } from '../../actions/movie_actions'

import Index from './index';


const mapStateToProps = state => {
    return ({
        shows: Object.values(state.entities.videos.shows),
        movies: Object.values(state.entities.videos.shows),
        state: state
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        userLogout: () => dispatch(userLogout()),
        userSelectAllShows: () => dispatch(userSelectAllShows()),
        userSelectShow: (show) => dispatch(userSelectShow(show)),
        userSelectAllMovies: () => dispatch(userSelectAllMovies()),
        userSelectMovie: (movie) => dispatch(userSelectMove(movie)),
        userLikeShow: (userId, show) => dispatch(userLikeShow(userId, show)),
        userRemoveLike: (favId, userId, showId) => dispatch(userRemoveLike(favId, userId, showId)),
        userLikeMovie: (userId, movieId) => dispatch(userLikeMovie(userId, movieId)),
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(Index);