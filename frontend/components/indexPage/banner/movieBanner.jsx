import React from 'react';
import MovieBannerItemContainer from './movieBannerItemContainer';

class MovieBanner extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.userSelectAllMovies();
    }

    render() {
        const all_movies = this.props.movies.map(movie => {
            return (
                  <MovieBannerItemContainer key={movie.id} movie={movie} /> 
            )
        });

            return (
                <div>
                    <ul className="show-item-container">
                        {all_movies}
                    </ul>
                </div>
            )
        }
}

export default MovieBanner