import React from 'react'
import MovieBannerItemContainer from '../indexPage/banner/movieBannerItemContainer';
import TVBannerItemContainer from '../indexPage/banner/tvBannerItemContainer';

class MyStuff extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favoriteMovies: [],
            favoriteShows: [],
        }

        this.getShows = this.getShows.bind(this);
        this.getMovies = this.getMovies.bind(this);
        this.refresh = this.refresh.bind(this);
    }



    componentDidMount() {
        this.props.userSelectAllShows();
        this.props.userSelectAllMovies();
        this.props.searchForUser(this.props.currentUserId).then(
            response => {
                let movieIds = [];
                let showIds = [];
                response.userId.favorites.forEach(film => {
                    if (film.id.video_type === "movie") {
                        movieIds.push(film.id.id)
                    }

                    if (film.id.video_type === 'show') {
                        showIds.push(film.id.id)
                    }
                });
                
                this.setState({
                    favoriteMovies: movieIds,
                    favoriteShows: showIds
                })
            })
    }

    
    refresh() {
        window.location.reload();
    }

    getMovies() {
        let movieResults = [];
        this.props.movies.forEach(movie => {
            if (this.state.favoriteMovies.includes(movie.id)) {
                movieResults.push(movie)
            }
        });
        return movieResults
    }

    getShows() {
        let showResults = [];
        this.props.shows.forEach(show => {
            if (this.state.favoriteShows.includes(show.id)) {
                showResults.push(show)
            }
        });
        return showResults
    }

    getResults() {
        let movieResults = this.getMovies();
        let showResults = this.getShows();
        let shows = null;
        let movies = null;
        if (movieResults.length > 0) {
            movies = movieResults.map(movie => {
                return (
                    <MovieBannerItemContainer movie={movie}  refresh={this.refresh}/>
                )
            });
        }

        if (showResults.length > 0) {
            shows = showResults.map(show => {
                return (
                    <div><TVBannerItemContainer show={show} refresh={this.refresh}/></div>
                )
            });
        }

        if (movies && shows) {
            return ( <div className="stuff-category-results">
                        <h2 className="stuff-result-title">MOVIES</h2>
                        <div className="stuff-movie-results">{movies}</div>
                        <h2 className="stuff-result-title">SHOWS</h2>
                        <div className="stuff-show-results">{shows}</div>
                    </div>
            )
        } else if (movies && !shows) {
            return (
                <div className="stuff-category-results">
                    <h2 className="stuff-result-title">MOVIES</h2>              
                    <div className="stuff-movie-results">{movies}</div>
                </div>
            )
            
        } else if (!movies && shows) {
            return (
                <div className="stuff-category-results">  
                    <h2 className="stuff-result-title">SHOWS</h2>                  
                    <div className="stuff-show-results">{shows}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <p className="stuff-no-results">You have't favorited any items!</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="my-stuff-container">
                <div className="my-stuff-top-bar">
                    <div className="top-bar-text">
                        <h1 className="top-bar-header">My Stuff</h1>
                        <h3 className="top-bar-secondary">Use the &nbsp;&nbsp;
                        <i className="fas fa-plus-circle fa-lg"></i>&nbsp;&nbsp; 
                                   button to add content you want to keep track of.</h3>
                    </div>
                </div>           

                <div>
                {this.getResults()}</div>
            </div>
        )
    }
}

export default MyStuff
