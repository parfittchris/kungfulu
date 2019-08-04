import React from 'react'
import TVBannerContainer from './tvBannerContainer';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            video_url: ""
        }
        
    }


    render() {
        return (
           <div>
               <div className="hub">
                   <div className="masthead-thumbnail"></div>
                   <div className="hub-container">
                        <div className="slider">
                            <div className="slider-movie-1"></div>
                            <div className="slider-movie-2"></div>
                            <div className="slider-movie-3"></div>
                            <div className="slider-movie-4"></div>
                        </div>
                        <h2 className="shows-container">TV></h2>
                        <TVBannerContainer />
                    </div>
               </div>
           </div>
        )
    }
}

export default Index;
