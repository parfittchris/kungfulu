import { connect } from 'react-redux';
import { userLogout } from '../../actions/session_actions';
import IndexHeader from './indexHeader';

const mapStateToProps = state => ({
    indexHeader: state
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexHeader);
