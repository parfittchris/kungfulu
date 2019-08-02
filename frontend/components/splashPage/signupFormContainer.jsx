import { connect } from 'react-redux';
import { userSignup, userLogin, removeErrors } from '../../actions/session_actions';
import SessionForm from './sessionForm';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors.session,
        formType: 'Sign Up',
        formMessage: 'Already have an account? '
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        formAction: user => dispatch(userSignup(user)),
        openModal: modal => dispatch(openModal(modal)),
        userLogin: user => dispatch(userLogin(user)),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors()),
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(SessionForm);