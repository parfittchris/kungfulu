import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import movieBannerItem from './movieBannerItem';
import { userLikeMovie, userRemoveLike } from '../../../actions/movie_actions';

const mapStateToProps = state => {
    return ({
        state: state
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        userLikeMovie: (userId, movieId) => dispatch(userLikeMovie(userId, movieId)),
        userRemoveLike: (favId, userId, movieId) => dispatch(userRemoveLike(favId, userId, movieId)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(movieBannerItem);