import { connect } from 'react-redux';
import { userSelectAllMovies, userSelectMovie } from '../../../actions/movie_actions';
import movieBanner from './movieBanner';

const mapStateToProps = state => {
    return ({
        movies: Object.values(state.entities.videos.movies)
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        userSelectAllMovies: () => dispatch(userSelectAllMovies()),
        userSelectMovie: (movie) => dispatch(userSelectMovie(movie)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(movieBanner);