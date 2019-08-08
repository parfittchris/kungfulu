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
                    movieResults: Object.values(response.titles),
                });
            })

        this.props.userSearchShowTitles(this.state.searchTerm).then(
            response => {
                this.setState({
                    showResults: Object.values(response.titles),
                });
            })
            debugger
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

    if (this.state.searchTerm === "") {
            return (
                <div className="search-form-container">
                    <form className="search_form" onSubmit={this.handleSubmit}>
                        <div className="search-input-container">
                            <input className="search-input" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange} />
                        </div>
                        <div className="">
                            <input className="" type="submit" value={`Search for ${this.state.searchTerm}`}></input>
                        </div>
                    </form>
                    <div>{this.getResults()}</div>
                </div>
            )
        } else {
            return (
                < div className="search-form-container" >
                    <form className="search_form" onSubmit={this.handleSubmit}>
                        <div className="search-input-container">
                            <input className="search-input" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange} />
                        </div>
                        <div className="search-input-button-container">
                            <img className="submit-button-search-image" src="https://img.icons8.com/ios/50/000000/search--v1.png" />
                            <input className="search-input-button" type="submit" value={`Search for ${this.state.searchTerm}`}></input>
                        </div>
                    </form>
                    <div>{this.getResults()}</div>
                </div >
            )
        }
    }
}

export default Search




    












