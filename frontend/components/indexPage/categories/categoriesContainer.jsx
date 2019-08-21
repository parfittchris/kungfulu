import { connect } from 'react-redux';
import Categories from './category';


const mapStateToProps = (state, myParams) => {
    return ({
        movies: Object.values(state.entities.videos.movies),
    })
}

const mapDispatchToProps = dispatch => {
    return ({
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)