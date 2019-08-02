import React from 'react';
import { connect } from 'react-redux';
import { userLogin, removeErrors } from '../../actions/session_actions';
import SessionForm from './sessionForm';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => {
    return ({
        errors: state.errors.session,
        formType: 'Login',
        formMessage: "Don't have an account? "
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        formAction: user => dispatch(userLogin(user)),
        userLogin: user => dispatch(userLogin(user)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)