import React from 'react';
import { withRouter } from 'react-router';


class videoPlayer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.userSelectAllMovies();
    }

    componentWillUnmount() {
        this.props.history.push(`/index`)
    }

    render() {

        return (
            <div className="player-container">
                <video src={this.props.video.video_url} className="webplayer" controls autoPlay></video>
            </div>
        )
    }
}



export default withRouter(videoPlayer)