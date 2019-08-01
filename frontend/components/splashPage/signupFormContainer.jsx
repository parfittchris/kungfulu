import { connect } from 'react-redux';
import { userSignup } from '../../actions/session_actions';
import SessionForm from './sessionForm';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors,
        formType: 'Sign Up',
        formMessage: 'Already have an account? '
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        formAction: user => dispatch(userSignup(user)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(SessionForm);