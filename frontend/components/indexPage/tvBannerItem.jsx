import React from 'react';
import VideoPlayer from './video_player';
import { Route, Redirect } from 'react-router-dom';


class TvBannerItem extends React.Component {

    render() {
       
        return (

            <div className="show-item">
                <div>{this.props.show.title}</div>
            </div>
        )
    }

}



export default TvBannerItem