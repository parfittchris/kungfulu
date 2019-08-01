import { connect } from 'react-redux';
import { userSignup } from '../../actions/session_actions';
import SessionForm from './sessionForm';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors,
        formType: 'Sign Up'
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        formAction: user => dispatch(userSignup(user)),
        // openModal: modal => dispatch(openModal(modal))
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(SessionForm);