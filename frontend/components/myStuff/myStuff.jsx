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

    }

    componentDidMount() {
        this.props.userSelectAllMovies();
        this.props.userSelectAllShows();

        this.props.searchForUser(this.props.currentUserId).then(
            response => {
                let movies = [];
                let shows = []
                response.userId.favorites.forEach(film => {
                    if(film.id.video_type === "movie") {
                        movies.push(film.id)
                    } else if(film.id.video_type === 'show') {
                        shows.push(film.id)
                    }
                })

                this.setState({
                    favoriteMovies: movies,
                    favoriteShows: shows
                });
            })
    }


    // componentWillUnmount(newProps) {
    //     this.props.userSelectAllMovies();
    //     this.props.userSelectAllShows();

    //     this.props.searchForUser(this.props.currentUserId).then(
    //         response => {
    //             let movies = [];
    //             let shows = []
    //             response.userId.favorites.forEach(film => {
    //                 if (film.id.video_type === "movie") {
    //                     movies.push(film.id.id)
    //                 } else if (film.id.video_type === 'show') {
    //                     shows.push(film.id.id)
    //                 }
    //             })

    //             this.setState({
    //                 favoriteMovies: movies,
    //                 favoriteShows: shows
    //             });
    //         })
    // }

    getResults() {
        // let movieArray = this.state.favoriteMovies.map(movieId => { return this.props.movies[movieId] });
        // let showArray = this.state.favoriteShows.map(showId => { return this.props.shows[showId] });
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
                        <div className="stuff-movie-results">{movies}</div>
                        <div className="stuff-show-results">{shows}</div>
                    </div>
            )
        }
    }

    render() {
        
        debugger

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
                <div>{this.getResults()}</div>
            </div>
        )
    }
}

export default MyStuff
