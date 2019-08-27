import { connect } from 'react-redux';
import MyStuff from './myStuff';
import { searchForUser } from '../../actions/session_actions';
import { userSelectAllShows } from '../../actions/show_actions';
import { userSelectAllMovies } from '../../actions/movie_actions';


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
        userSelectAllMovies: () => dispatch(userSelectAllMovies()),
        userSelectAllShows: () => dispatch(userSelectAllShows()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStuff);