import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/session_actions';
import SessionForm from './sessionForm';
import { openModal, closeModal } from '../../actions/modal_actions'
import { login } from '../../util/session_api_util';

const mapStateToProps = state => {
    return ({
        errors: state.errors.session,
        formType: 'Login',
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        formAction: user => dispatch(userLogin(user))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)