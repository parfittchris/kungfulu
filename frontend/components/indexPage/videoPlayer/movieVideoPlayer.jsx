import React from 'react';
import { withRouter } from 'react-router';


class videoPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerClass: 'webPlayer',
            closeClass: 'video-close-button'
        }

        this.miniWindow = this.miniWindow.bind(this);
    }

    componentDidMount() {
        this.props.userSelectAllMovies();
    }

    componentWillUnmount() {
        this.props.history.push(`/index`)
    }

    miniWindow(e) {
        e.preventDefault()
        debugger
        if (this.state.playerClass === 'webPlayer') {
            this.setState({
                playerClass: "webPlayer-mini",
                closeClass: 'video-close-button-mini'
            });
            this.props.openModal('mini-movie', this.props.id)
        } else {
            this.props.closeModal()
        }
    }


    render() {

        return (
            <div className="player-container">
                <button onClick={(e) => this.miniWindow(e)} className={this.state.closeClass}>×</button>
                <video src={this.props.video.video_url} className={this.state.playerClass} controls autoPlay>
                </video>
            </div>
        )
    }
}



export default withRouter(videoPlayer)