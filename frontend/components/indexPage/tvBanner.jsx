import React from 'react';
import TvBannerItem from './tvBannerItem';
import VideoPlayer from './video_player';

class TVBanner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            video_url: ""
        }
    }

    componentDidMount() {
        this.props.userSelectAllShows();
    }

    handleSubmit(e, show) {
        e.preventDefault()
        this.setState({
            redirect: true,
            video_url: show.video_url
        });
    }


    render() {
        const all_shows = this.props.shows.map(show => {
            return (
                <button onClick={(e) => this.handleSubmit(e, show)}>
                    <TvBannerItem key={show.id} show={show}/>
                </button>
            )
        });

        if (this.state.redirect === true) {
            return (
               <VideoPlayer url={this.state.video_url} />
            )
        } else {
            return (
                <div>
                    <ul>
                        {all_shows}
                    </ul>
                </div>
            )
        }
    }
}

export default TVBanner