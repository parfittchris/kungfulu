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
        this.props.searchForUser(this.props.currentUserId).then(
            response => {
                let movies = [];
                let shows = []
                // debugger
                response.userId.favorites.forEach(film => {
                    debugger
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

    getResults() {
        let shows = null;
        let movies = null;
        debugger
        if (this.state.favoriteMovies.length > 0) {
            movies = this.state.favoriteMovies.map(movie => {
                return (
                    <MovieBannerItemContainer key={movie.id} movie={movie} />
                )
            });
        }

        if (this.state.favoriteShows.length > 0) {
            shows = this.state.favoriteShows.map(show => {
                return (
                    <div><TVBannerItemContainer key={show.id} show={show} /></div>
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
