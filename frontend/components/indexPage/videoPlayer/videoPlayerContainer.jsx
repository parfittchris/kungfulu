import React from 'react';
import { connect } from 'react-redux';
import videoPlayer from './video_player';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { userSelectAllShows } from '../../../actions/show_actions';



const mapStateToProps = (state, myParams) => {
    return ({
        video: state.entities.videos.shows[myParams.id]
    });
}

const mapDispatchToProps = state => {
    return ({
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        userSelectAllShows: () => dispatch(userSelectAllShows()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(videoPlayer);