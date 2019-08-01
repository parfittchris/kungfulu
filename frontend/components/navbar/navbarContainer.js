import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const mapStateToProps = state => ({
    navbar: state
});

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
