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
    }

    componentDidMount() {
        let movieIds = [];
        let showIds = [];
        this.props.searchForUser(this.props.currentUserId).then(
            response => {
                let movieIds = [];
                let showIds = [];
                response.userId.favorites.forEach(film => {
                    if (film.id.video_type === "movie") {
                        movieIds.push(film.id.id)
                    } else if (film.id.video_type === 'show') {
                        showIds.push(film.id.id)
                    }
                });
                this.setState({
                    favoriteMovies: this.getMovies(movieIds),
                    favoriteShows: this.getShows(showIds)
                })  
            })
        this.forceUpdate();
    }

    componentWillUnmount(newParams) {
        let movieIds = [];
        let showIds = [];
        this.props.searchForUser(this.props.currentUserId).then(
            response => {
                response.userId.favorites.forEach(film => {
                    if (film.id.video_type === "movie") {
                        movieIds.push(film.id.id)
                    } else if (film.id.video_type === 'show') {
                        showIds.push(film.id.id)
                    }
                });
                this.setState({
                    favoriteMovies: this.getMovies(movieIds),
                    favoriteShows: this.getShows(showIds)
                })
            })
        this.forceUpdate();
    }

    getMovies(movies) {
        let movieResults = [];

        movies.forEach(movie => {
            this.props.userSelectMovie(movie).then(response => {
                movieResults.push(response.movie)
            });
        });
        return movieResults;
    }

    getShows(shows) {
        let showResults = [];
        shows.forEach(show => {
            this.props.userSelectShow(show).then(response => {
                showResults.push(response.show)
            });
        });
        return showResults;
    }

    getResults() {
        let shows = null;
        let movies = null;
        if (this.state.favoriteMovies.length > 0) {
            movies = this.state.favoriteMovies.map(movie => {
                return (
                    <MovieBannerItemContainer movie={movie} />
                )
            });
        }

        if (this.state.favoriteShows.length > 0) {
            shows = this.state.favoriteShows.map(show => {
                return (
                    <div><TVBannerItemContainer show={show} /></div>
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
