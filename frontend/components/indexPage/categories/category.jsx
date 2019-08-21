import React from 'react'
import MovieBannerItemContainer from '../banner/movieBannerItemContainer';

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieResults: [],
            category: this.props.match.params.category
        }
        this.getResults = this.getResults.bind(this);
        this.conductSearch = this.conductSearch.bind(this);
    }

    componentDidMount() {
        this.setState({
            movieResults: this.conductSearch(this.props)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.match.params.category,
            movieResults: this.conductSearch(nextProps)
        });
        this.getResults();  
    }

    conductSearch(props) {
        let matches = [];
        let genre = props.match.params.category;
        props.movies.forEach(movie => {
            let categories = movie.categories.map(category => {
                return category.name
            });
            if (categories.includes(genre)) matches = matches.concat(movie)
        });
        debugger
        return matches
    }

    getResults() {
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

    render() {
        if (this.state.movieResults.length > 0) {
            return (
                <div className="category-page">
                    <h1 className="category-title">{this.state.category}</h1>
                    <h2 className="category-banner-title">FOR YOU ></h2>
                    <div>{this.getResults()}</div>
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