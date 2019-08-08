import React from 'react';
import TvBannerItemContainer from '../indexPage/banner/tvBannerItemContainer';
import MovieBannerItemContainer from '../indexPage/banner/movieBannerItemContainer';
import MovieBannerContainer from '../indexPage/banner/movieBannerContainer';
import TVBannerContainer from '../indexPage/banner/tvBannerContainer';

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
    }
    
    clearSearch() {
       this.setState({
            searchTerm: ""
       });
    }
    
    getResults() {
        let movies = null
        let shows = null
    
        if (this.state.movieResults.length > 0) {
           movies = this.state.movieResults.map(movie => {
                return (
                    <ul>
                        <MovieBannerItemContainer key={movie.id} movie={movie} />
                    </ul>
                )
            });
        }

        if (this.state.showResults.length > 0) {
            shows = this.state.showResults.map(show => {
                return (
                    <ul>
                        <TvBannerItemContainer key={show.id} show={show} />
                    </ul>
                )
            });
        }      
            if (movies && shows) {
                debugger
                return (
                    <> 
                    <div className="search-results">
                        <h2 className="results-header">Movies</h2>
                            <div className="movies-results">{movies}</div>
                        <h2 className="results-header">Shows</h2>
                            <div className="shows-results">{shows}</div>
                    </div>
                    </>
                )   
            } else if (movies && shows === null) {
                return (
                    <>
                        <div className="search-results">
                            <h2 className="results-header">Movies</h2>
                            <div className="movies-results">{movies}</div>
                        </div>
                    </>
                )
            } else if (shows && movies === null) {
                return (
                    <>
                        <div className="search-results">
                            <h2 className="results-header">Shows</h2>
                            <div className="shows-results">{shows}</div>
                        </div>
                    </>
                )
            }
            else {
                return (
                    <>
                    <h2 className="no-results-message">0 results matching your search were found.</h2>
                    <h2 className="no-results-sub-message">Check your spelling or try another term.</h2>
                    </>
                )
        }
    }
    render() {

    if (this.state.searchTerm === "") {
            return (
            <div className="search-page-prior">
                <div className="search-form-container">
                    <form className="search_form" onSubmit={this.handleSubmit}>
                        <div className="search-input-container">
                            <input className="search-input" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange} />
                        </div>
                        <div className="before-search-input-button-container"></div>
                    </form>
                </div>
                <div className="browse-container">
                    <div className= "search-browse-tv">
                        <h2 className="browse-header"> TV ></h2 >
                        <TVBannerContainer />
                    </div>
                    <div className= "search-browse-movie">
                        <h2 className="browse-header">MOVIES ></h2>
                        <MovieBannerContainer />
                    </div>
                </div>
            </div>
            )
    } else {
            return (
                <div className="search-page-inprogress">
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
                            <input type="submit" value="CLEAR" className="search-clear-btn" onClick={() => this.clearSearch()}/>   
                        <div>{this.getResults()}</div>
                    </div >
                </div>
            )
        }
    }
}

export default Search


    












