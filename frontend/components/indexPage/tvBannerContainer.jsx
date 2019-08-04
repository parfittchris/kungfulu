import { connect } from 'react-redux';
import { userSelectAllShows, userSelectShow} from '../../actions/show_actions';
import tvBanner from './tvBanner';

const mapStateToProps = state => {
    return ({
        shows: Object.values(state.entities.videos.shows)
    });
}

const mapDispatchToPros = dispatch => {
    return ({
        userSelectAllShows: () => dispatch(userSelectAllShows()),
        userSelectShow: (show) => dispatch(userSelectShow(show)),
    });
}

export default connect(mapStateToProps, mapDispatchToPros)(tvBanner);