import React from 'react';
import { withRouter } from 'react-router';


class MovieBannerItem extends React.Component {
    constructor(props) {
        super(props)
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addFav = this.addFav.bind(this);
    }

    handleSubmit(e, type) {
        e.preventDefault()
        this.props.history.push(`/index/movies/${type}/${this.props.movie.id}`)
    }

    addFav(userId, movieId) {
        this.props.userLikeMovie(userId, movieId);
    }

    removeFav(userId, movieId) {
        this.props.userRemoveLike(1, userId, movieId);
    }
    
    render() {
        return (
            <div className="show-item">
                <div className="show-item-photo">
                    <button onClick={(e) => this.handleSubmit(e, 'video')} className="video-image-btn">
                        <img src={this.props.movie.image_url} className="video-image"></img>
                    </button>
                </div>
                <ul className="show-item-info">
                    <li className="vid-title" onClick={(e) => this.handleSubmit(e, 'detail')}>{this.props.movie.title}</li>
                    <li className="vid-description">{this.props.movie.description}</li>
                    <li className="show-item-info-btns">
                        <button className="vid-info-btn" onClick={(e) => this.handleSubmit(e, 'detail')}>
                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                        </button>
                        <button className="vid-info-btn" onClick={() => this.addFav(this.props.state.entities.users[1].id, this.props.movie.id)}>
                            <i className="fas fa-plus-circle fa-2x"></i>
                        </button>
                        <button className="vid-info-btn" onClick={() => this.removeFav(this.props.state.entities.users[1].id, this.props.movie.id)}>
                            <i className="fas fa-minus-circle fa-2x"></i>
                        </button>
                    </li>
                </ul>
            </div>
        )
        }
    }




export default withRouter(MovieBannerItem)