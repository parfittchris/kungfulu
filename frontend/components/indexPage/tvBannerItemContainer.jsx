import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import tvBanner from './tvBanner';

const mapStateToProps = state => {
    return ({
        state: state
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    });
}


export default connect(mapStateToProps, mapDispatchToPros)(tvBanner);