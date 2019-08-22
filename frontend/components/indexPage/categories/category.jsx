import React from 'react'
import MovieBannerItemContainer from '../banner/movieBannerItemContainer';
import TVBannerItemContainer from '../banner/tvBannerItemContainer';


class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieResults: [],
            showResults: [],
            category: this.props.match.params.category
        }
        this.getMovieResults = this.getMovieResults.bind(this);
        this.getShowResults = this.getShowResults.bind(this);
        this.conductMovieSearch = this.conductMovieSearch.bind(this);
        this.conductShowSearch = this.conductShowSearch.bind(this);
    }

    componentDidMount() {
        this.setState({
            movieResults: this.conductMovieSearch(this.props),
            showResults: this.conductShowSearch(this.props)            
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.match.params.category,
            movieResults: this.conductMovieSearch(nextProps),
            showResults: this.conductMovieSearch(nextProps)
        });
        this.getMovieResults();
        this.getShowResults();  
    }

    conductMovieSearch(props) {
        let matches = [];
        let genre = props.match.params.category;
        props.movies.forEach(movie => {
            let categories = movie.categories.map(category => {
                return category.name
            });
            if (categories.includes(genre)) matches = matches.concat(movie)
        });
        return matches
    }

    conductShowSearch(props) {
        let matches = [];
        let genre = props.match.params.category;
        props.shows.forEach(show => {
            let categories = show.categories.map(category => {
                return category.name
            });
            if (categories.includes(genre)) matches = matches.concat(show)
        });
        return matches
    }

    getMovieResults() {
        let movies = null
        if (this.state.movieResults.length > 0) {
            movies = this.state.movieResults.map(movie => {
                return (
                        <MovieBannerItemContainer key={movie.id} movie={movie} />
                )
            });
        }
        if (movies !== null) {
            return <div className="category-results">{movies}</div>
        }
    }

    getShowResults() {
        let shows = null
        if (this.state.showResults.length > 0) {
            shows = this.state.showResults.map(show => {
                return (
                    <TVBannerItemContainer key={show.id} show={show} />
                )
            });
        }
        if (shows !== null) {
            return <div className="category-results">{shows}</div>
        }
    }

    render() {
        debugger
        let mResults
        let sResults

        if (this.state.movieResults.length > 0) {
            mResults = (
                <div>
                    <h2 className="category-banner-title">POPULAR MOVIES ></h2>
                    <div>{this.getMovieResults()}</div>
                </div>
            )
        }
        
        if (this.state.showResults.length > 0) {
            sResults = (
                <div>
                    <h2 className="category-banner-title">POPULAR SHOWS ></h2>
                    <div>{this.getShowResults()}</div>
                </div>
            )
        }  

        if (mResults && !sResults) {
            return (
                <div>
                    <h1 className="category-title">{this.state.category}</h1>
                    <div>{mResults}</div>
                </div>
            )
        } else if (!mResults && sResults) {
            return (
                <div className="category-page">
                    <h1 className="category-title">{this.state.category}</h1>
                    <div>{sResults}</div>
                </div>
            )
        } else if (mResults && sResults) {
            return (
                <div className="category-page">
                    <h1 className="category-title">{this.state.category}</h1>
                    <div>{mResults}</div>
                    <div className="sResult">{sResults}</div>
                </div>
            )
        } else {
            return (
                <>
                    <div className="no-category-results">No results found</div>
                </>
            )
        }
    }
}

export default Categories