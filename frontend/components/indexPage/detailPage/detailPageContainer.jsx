import React from 'react';
import { openModal, closeModal } from '../../../actions/modal_actions'
import { connect } from 'react-redux';
import detailModal from './detailModal';

const mapStateToProps = (state, myParams) => {
    debugger
    let videoId = myParams.id
    return ({
        // state: state
        video: state.entities.videos.shows[videoId]
    });
}

const mapDispatchToProps = state => {
    return ({
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(detailModal);