import { connect } from 'react-redux';
import MyStuff from './myStuff';
import { searchForUser } from '../../actions/session_actions';
import { userSelectShow } from '../../actions/show_actions';
import { userSelectMovie } from '../../actions/movie_actions';


const mapStateToProps = (state) => {
    return ({
       currentUserId: state.session.id,
       movies: Object.values(state.entities.videos.movies),
       shows: Object.values(state.entities.videos.shows),
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        searchForUser: (userId) => dispatch(searchForUser(userId)),
        userSelectMovie: (movie) => dispatch(userSelectMovie(movie)),
        userSelectShow: (show) => dispatch(userSelectShow(show)),

        // userSelectAllMovies: () => dispatch(userSelectAllMovies()),
        // userSelectAllShows: () => dispatch(userSelectAllShows()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStuff);