import React from 'react';
import MovieBannerItemContainer from './movieBannerItemContainer';

class MovieBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allMovies: [],
        }

        this.shiftMovies = this.shiftMovies.bind(this);
    }

    componentDidMount() {
        this.props.userSelectAllMovies().then(response => {
            this.setState({
                allMovies: this.props.movies.map(movie => { return movie }),
            })
        });
    }

    shiftMovies() {
        for (let i = 0; i < 5; i++) {
            this.state.allMovies.push(this.state.allMovies.shift())
        }
        this.forceUpdate();
    }

    render() {
        // debugger
        const all_movies = this.state.allMovies.map(movie => {
            return (
                  <MovieBannerItemContainer key={movie.id} movie={movie} /> 
            )
        });

        let visible_movies = all_movies.slice(0, 5);

            return (
                <div>
                    <ul className="movie-item-container">
                        {visible_movies}
                    </ul>
                    <button className="next-videos-button" onClick={() => this.shiftMovies()}> > </button>
                </div>
            )
        }
}

export default MovieBanner