import React from 'react';
import { connect } from 'react-redux';
import MovieVideoPlayer from './movieVideoPlayer';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { userSelectAllMovies } from '../../../actions/movie_actions';



const mapStateToProps = (state, myParams) => {
    return ({
        video: state.entities.videos.movies[myParams.id]
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        userSelectAllMovies: () => dispatch(userSelectAllMovies()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieVideoPlayer);