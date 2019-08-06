import React from 'react';
import { openModal, closeModal } from '../../../actions/modal_actions'
import { connect } from 'react-redux';
import MovieDetailModal from './movieDetailModal';

const mapStateToProps = (state, myParams) => {
    let videoId = myParams.id
    return ({
        video: state.entities.videos.movies[videoId]
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailModal);