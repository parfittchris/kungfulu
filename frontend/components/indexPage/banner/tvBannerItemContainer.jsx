import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import tvBannerItem from './tvBannerItem';
import { userLikeShow, userRemoveLike } from '../../../actions/show_actions';

const mapStateToProps = state => {
    return ({
        state: state
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        userLikeShow: (userId, show) => dispatch(userLikeShow(userId, show)),
        userRemoveLike: (favId, userId, showId) => dispatch(userRemoveLike(favId, userId, showId)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(tvBannerItem);