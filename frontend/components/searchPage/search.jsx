import React from 'react';
import TvBannerItemContainer from '../indexPage/banner/tvBannerItemContainer';
import MovieBannerItemContainer from '../indexPage/banner/movieBannerItemContainer';

class Search extends React.Component {
    constructor(props) {
        super(props)
        

        this.state = {
            movieResults: [],
            showResults: [],
            searchTerm: "",
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getResults = this.getResults.bind(this);
}

    handleChange(e) {
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.userSearchTitles(this.state.searchTerm).then(
            response => {
                this.setState({
                    movieResults: Object.values(response.titles)
                    // showResults:  Object.values(this.props.state.entities.videos.shows)
                });
            })
    }
    
    getResults() {
        let movies
        let shows
    
        if (this.state.movieResults.length > 0) {
           movies = this.state.movieResults.map(movie => {
                return (
                    <ul>
                        <MovieBannerItemContainer key={movie.id} movie={movie} />
                    </ul>
                )
            });

        if (this.state.showResults.length > 0) {
            shows = this.state.showResults.map(show => {
                return (
                    <ul>
                        <TvBannerItemContainer key={show.id} show={show} />
                    </ul>
                )
            });
        }   

            if (movies || shows) {
            return (
                <> 
                <h1>Movies</h1>
                    <div className="movies-results">{movies}</div>
                <h1>TV Shows</h1>
                    <div className="shows-results">{shows}</div>
                </>
            )   
            } else {
                return (
                    <h2>No results found</h2>
                        )
            }
        }
    }
    render() {
        return (
            <div className="search-form-container">
                <form className="search_form" onSubmit={this.handleSubmit}>
                    <label>SEARCH:
                        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                     </label>
                        <input type="submit" value="Search"></input>
                </form>
                <div>{this.getResults()}</div>
            </div>
        )
    }
}

export default Search



















