import React from 'react';
import VideoPlayer from './video_player';
import { Route, Redirect } from 'react-router-dom';


class TvBannerItem extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     redirect: false
        // }
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.setState({
    //         redirect: true
    //     });
    // }



    render() {
        // debugger
        // if (this.state.redirect) {
        //     return <VideoPlayer url={this.props.show.video_url} />
        // }
        
        return (

            <div className="show-item">
                <div>{this.props.show.title}</div>
            </div>
        )
    }

}



export default TvBannerItem