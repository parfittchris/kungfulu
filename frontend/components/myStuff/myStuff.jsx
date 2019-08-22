import React from 'react'
import MovieBannerItemContainer from '../indexPage/banner/movieBannerItemContainer';
import { searchForUser } from '../../actions/session_actions';

class MyStuff extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favoriteMovies: [],
        }

    }

    componentDidMount() {
        this.props.searchForUser(this.props.currentUserId).then(
            response => {
                this.setState({
                    favoriteMovies: response.userId.liked_movies,
                });
            })
    }

    getResults() {
        let movies = null;
        if (this.state.favoriteMovies.length > 0) {
            movies = this.state.favoriteMovies.map(movie => {
                return (
                    <MovieBannerItemContainer key={movie.id} user={this.props.currentUserId} movie={movie} />
                )
            });
        }

        if (movies !== null) {
            return <div className="category-results">{movies}</div>
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
                <div>{this.getResults()}</div>
            </div>
        )
    }
}

export default MyStuff
