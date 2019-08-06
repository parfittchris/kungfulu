import React from 'react'
import TVBannerContainer from './banner/tvBannerContainer';
import MovieBannerContainer from './banner/movieBannerContainer';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        <h2 className="movies-container">MOVIES></h2>
                        <MovieBannerContainer />
                        <button className="index-end"></button>
                    </div>
               </div>
           </div>
        )
    }
}

export default Index;
