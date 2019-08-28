import React from 'react'
import TVBannerContainer from './banner/tvBannerContainer';
import MovieBannerContainer from './banner/movieBannerContainer';
import Footer from '../footer/footer';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headline: { title: "The Matrix", year: 1999, rating: 8.7, description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", video_type: "movie", video_url: 'https://kungfulu-aa-seeds.s3.amazonaws.com/Matrix-clip.mp4'},
            example1: { title: "Enter the Dragon", year: 1973, rating: 7.7, description: "A martial artist agrees to spy on a reclusive crime lord using his invitation to a tournament there as cover.", video_type: "movie"},
            example2: { title: "The Invincible Armor", year: 1977, rating: 7.1, description: "An aging martial arts expert is gifted a plaque from the Emperor declaring him the Kung Fu World Champion. Unsure of whether or not be is deserving of this title, he embarks on a journey to defeat the 7 Grandmasters.", video_type: "movie"},
            example3: { title: "Kung Fu Panda", year: 2008, rating: 7.6, description: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance. However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts.", video_type: "movie"},
            example4: { title: "The Karate Kid", year: 1984, rating: 7.2, description: "A Japanese martial arts instructor agrees to teach karate to a bullied teenager.", video_type: "movie" },
            example5: { title: "Walker Texas Ranger", year: 1993, rating: 5.4, description: "Walker and his partner Trivette are Texas Rangers. They make it their business to battle crime in Dallas and all around the Great State of Texas.", video_type: "show"},
            example6: { title: "Into the Badlands", year: 2015, rating: 8.0, description: "A mighty warrior and a young boy search for enlightenment in a ruthless territory controlled by feudal barons.", video_type: "show" }
        }

        this.addFav = this.addFav.bind(this);
        this.removeFav = this.removeFav.bind(this);
    }   

    
    componentDidMount() {
        this.props.userSelectAllMovies();
        this.props.userSelectAllShows();
    }

    handleSubmit(e, type, id) {
        e.preventDefault()
        this.props.history.push(`/index/movies/${type}/${id}`)
    }

    handleSubmitVideo(e, type, id) {
        e.preventDefault()
        this.props.history.push(`/index/shows/${type}/${id}`)
    }


    addFav(userId, show) {
        this.props.userLikeShow(userId, show);
    }

    removeFav(userId, showId) {
        this.props.userRemoveLike(1, userId, showId)
    }


    render() {
     
        return (

           <div>
               <div className="hub">
                   <div className="masthead-thumbnail">
                    <div className="thumbnail-details">
                            <div className="thumbnail-details-title">{this.state.headline.title}</div>
                            <div className="thumbnail-details-info">{this.state.headline.info}</div>
                            <div className="thumbnail-details-description">{this.state.headline.description}</div>
                        <div className="thumbnail-details-info-links">
                            <button onClick={(e) => this.handleSubmit(e, 'video', 2)} className="thumbnail-details-info-links">
                                    <i className="fas fa-play-circle fa-3x"></i>
                                    <p className="thumbnail-play-text">Start watching {this.state.headline.title}</p>
                            </button>
                                <button onClick={(e) => this.handleSubmit(e, 'detail', 2)} className="thumbnail-details-button">
                                <i className="fas fa-arrow-circle-right fa-2x" ></i>                        
                            </button>
                            </div>
                        </div>
                   </div>
                   <div className="hub-container">
                        <div className="slider">
                            <div className="slider-movie-1">
                                <div className="slider-1-info">
                                    <div className="slider-1-info-details">
                                        <div className="slider-1-title">{this.state.example1.title}</div>
                                        <div className="slider-1-info-li">{this.state.example1.year}</div>
                                        <div className="slider-1-description">{this.state.example1.description}</div>
                                    </div>
                                    {/* <div className="slider-info-buttons">
                                        <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                                        </button>
                                        <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-plus-circle fa-2x"></i>
                                        </button>
                                        <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-minus-circle fa-2x"></i>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="slider-movie-2">
                                <div className="slider-2-info">
                                    <div className="slider-2-info-details">
                                        <div className="slider-2-title">{this.state.example2.title}</div>
                                        <div className="slider-2-info-li">{this.state.example2.year}</div>
                                        <div className="slider-2-description">{this.state.example2.description}</div>
                                    </div>
                                    {/* <div className="slider-info-buttons">
                                        <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                                        </button>
                                        <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-plus-circle fa-2x"></i>
                                        </button>
                                        <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-minus-circle fa-2x"></i>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="slider-movie-3">
                                <div className="slider-3-info">
                                    <div className="slider-3-info-details">
                                        <div className="slider-3-title">{this.state.example3.title}</div>
                                        <div className="slider-3-info-li">{this.state.example3.year}</div>
                                        <div className="slider-3-description">{this.state.example1.description}</div>
                                    </div>
                                    {/* <div className="slider-info-buttons">
                                        <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                                        </button>
                                        <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-plus-circle fa-2x"></i>
                                        </button>
                                        <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                            <i className="fas fa-minus-circle fa-2x"></i>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="slider-movie-4">
                                <div className="slider-4-info">
                                    <div className="slider-4-info-details">
                                            <div className="slider-4-title">{this.state.example4.title}</div>
                                            <div className="slider-4-info-li">{this.state.example4.year}</div>
                                            <div className="slider-4-description">{this.state.example4.description}</div>
                                    </div>
                                        {/* <div className="slider-info-buttons">
                                            <button className="slider-detail" onClick={(e) => this.handleSubmit(e, 'detail')}>
                                                <i className="fas fa-arrow-circle-right fa-2x"></i>
                                            </button>
                                            <button className="slider-add" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                                <i className="fas fa-plus-circle fa-2x"></i>
                                            </button>
                                            <button className="slider-remove" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.show.id)}>
                                                <i className="fas fa-minus-circle fa-2x"></i>
                                            </button>
                                        </div> */}
                                </div>
                            </div>
                        </div>
                        <h2 className="shows-container-title">TV></h2>
                        <div className="showcase-container">
                            <div className="showcase-items">
                                <div className="showcase-item-1-img">
                                    <div className="showcase-details-1">
                                        <div className="showcase-title">{this.state.example5.title}</div>
                                        <div className="showcase-details">{this.state.example5.year}</div>
                                        <button onClick={(e) => this.handleSubmitVideo(e, 'detail', 8)} className="showcase-btn-extra-1">
                                            <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="showcase-items">
                                <div className="showcase-item-2-img">
                                    <div className="showcase-details-2">
                                        <div className="showcase-title">{this.state.example6.title}</div>
                                        <div className="showcase-details">{this.state.example6.year}</div>
                                        <button onClick={(e) => this.handleSubmitVideo(e, 'detail', 5)} className="showcase-btn-extra-2">
                                            <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shows-container"><TVBannerContainer /></div>
                        <h2 className="movies-container-title">MOVIES></h2>
                        <div className="showcase-container">
                            <div className="showcase-items">
                                <div className="showcase-item-3-img">
                                <div className="showcase-details-3">
                                    <div className="showcase-title">{this.state.headline.title}</div>
                                    <div className="showcase-details">{this.state.headline.year}</div>
                                        <button onClick={(e) => this.handleSubmit(e, 'detail', 2)} className="showcase-btn-extra-3">
                                            <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                        </button>
                                    </div>
                             </div>
                            </div>
                            <div className="showcase-items">
                                <div className="showcase-item-4-img">
                                    <div className="showcase-details-4">
                                        <div className="showcase-title">{this.state.example3.title}</div>
                                        <div className="showcase-details">{this.state.example3.year}</div>
                                        <button onClick={(e) => this.handleSubmit(e, 'detail', 4)} className="showcase-btn-extra-4">
                                            <i className="fas fa-arrow-circle-right fa-3x" ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="movies-container"><MovieBannerContainer /></div>
                     </div>
               
               </div>
           </div>

        )
    }
}

export default Index;




