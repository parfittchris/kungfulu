import React from 'react';
import { withRouter } from 'react-router';


class MovieBannerItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, type) {
        e.preventDefault()
        this.props.history.push(`/index/movies/${type}/${this.props.movie.id}`)
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
                        <button className="vid-info-btn" onClick={(e) => this.handleSubmit(e, 'detail')}>
                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                        </button>
                    </ul>
                </div>
            )
        }
    }




export default withRouter(MovieBannerItem)