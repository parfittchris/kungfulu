import { connect } from 'react-redux';
import { userLogout } from '../../actions/session_actions';
import { userSelectAllShows, userSelectShow } from '../../actions/show_actions';
import Index from './index';

const mapStateToProps = state => {
    return ({
        shows: Object.values(state.entities.videos.shows)
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        userLogout: () => dispatch(userLogout()),
        userSelectAllShows: () => dispatch(userSelectAllShows()),
        userSelectShow: (show) => dispatch(userSelectShow(show)),
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(Index);