import { connect } from 'react-redux';
import MyStuff from './myStuff';
import { searchForUser } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    return ({
       currentUserId: state.session.id
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        searchForUser: (userId) => dispatch(searchForUser(userId)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStuff);