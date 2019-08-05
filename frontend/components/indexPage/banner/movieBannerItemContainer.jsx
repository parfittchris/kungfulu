import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import movieBannerItem from './movieBannerItem'

const mapStateToProps = state => {
    return ({
        state: state
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal, id) => dispatch(openModal(modal, id)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(movieBannerItem);