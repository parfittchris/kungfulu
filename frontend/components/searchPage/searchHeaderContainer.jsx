import { connect } from 'react-redux';
import { userLogout } from '../../actions/session_actions';
import SearchHeader from './searchHeader';

const mapStateToProps = state => ({
    searchHeader: state
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
