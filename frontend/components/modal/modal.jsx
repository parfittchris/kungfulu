import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../splashPage/loginFormContainer'
import SignupFormContainer from '../splashPage/signupFormContainer';
import DetailPageContainer from '../indexPage/detailPage/detailPageContainer';
import VideoPlayerContainer from '../indexPage/videoPlayer/videoPlayerContainer';
import MovieVideoPlayerContainer from '../indexPage/videoPlayer/movieVideoPlayerContainer';
import MovieDetailPageContainer from '../indexPage/detailPage/movieDetailPageContainer';

function Modal({modal, id, closeModal}) {
    
    if (!modal) {
        return null;
    }
    
    let modalClass = "modal-background";

    let component;
    switch (modal) {
        case 'login':
             component = <LoginFormContainer />;
             break;
        case 'signup':
            component = <SignupFormContainer />;
             break;
        case 'detail':
            component = <DetailPageContainer id={id}/>;
        break;
        case 'video':
            component = <VideoPlayerContainer id={id}/>
        break;
        case 'movieDetail':
            component = <MovieDetailPageContainer id={id} />;
            break;
        case 'movieVideo':
            component = <MovieVideoPlayerContainer id={id} />
            break;
        case 'mini':
            modalClass = "modal-background-mini"
            component = <VideoPlayerContainer id={id} />
        break;
        case 'mini-movie':
            modalClass = "modal-background-mini"
            component = <MovieVideoPlayerContainer id={id} />
        break;
        default:
            return null;
    }

    return (
        <div className={modalClass} onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

    const mapStateToProps = state => {
        return {
            modal: state.ui.modal.type,
            id: state.ui.modal.id
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            closeModal: () => dispatch(closeModal())
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);