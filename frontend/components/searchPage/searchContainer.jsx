import { connect } from 'react-redux';
import { userLogout } from '../../actions/session_actions';
import { userSearchTitles } from '../../actions/movie_actions';
import {  userSearchShowTitles } from '../../actions/show_actions';

import Search from './search';

const mapStateToProps = state => {
    return ({
        state: state
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        userLogout: () => dispatch(userLogout()),
        userSearchTitles: (title) => dispatch(userSearchTitles(title)),
        userSearchShowTitles: (title) => dispatch(userSearchShowTitles(title))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)