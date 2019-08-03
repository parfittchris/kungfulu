import { connect } from 'react-redux';
import { userLogout } from '../../actions/session_actions';
import Index from './index';

const mapStateToProps = state => {
    return ({
        state: state,
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        userLogout: () => dispatch(userLogout()), 
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(Index);