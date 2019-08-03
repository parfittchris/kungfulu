import { connect } from 'react-redux';
import { userSelectAllShows, userSelectShow} from '../../actions/show_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import tvBanner from './tvBanner';

const mapStateToProps = state => {
    return ({
        shows: Object.values(state.entities.videos.shows)
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        userSelectAllShows: () => dispatch(userSelectAllShows()),
        userSelectShow: (show) => dispatch(userSelectShow(show)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(tvBanner);