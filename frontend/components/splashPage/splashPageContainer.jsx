import { connect } from 'react-redux';
import { userSignup } from '../../actions/session_actions';
import SplashPage from './splashPage';
import { openModal } from '../../actions/modal_actions'


const mapStateToProps = state => {
    return ({
        state: {}
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        openModal: modal => dispatch(openModal(modal)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);