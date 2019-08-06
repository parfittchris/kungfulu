import React from 'react';
import { connect } from 'react-redux';
import MovieVideoPlayer from './movieVideoPlayer';
import { closeModal } from '../../../actions/modal_actions';
import { userSelectAllMovies } from '../../../actions/movie_actions';



const mapStateToProps = (state, myParams) => {
    return ({
        video: state.entities.videos.movies[myParams.id]
    });
}

const mapDispatchToProps = state => {
    return ({
        closeModal: () => dispatch(closeModal()),
        userSelectAllMovies: () => dispatch(userSelectAllMovies()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieVideoPlayer);