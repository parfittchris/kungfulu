import React from 'react';
import { withRouter } from 'react-router'

class TvBannerItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, type) {
        e.preventDefault()
        this.props.history.push(`/index/shows/${type}/${this.props.show.id}`)
    }
    
    
    render() {
        const image = 'https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show.jpeg'
            return (
                <div className="show-item">
                    <div className="show-item-photo">
                        <button onClick={(e) => this.handleSubmit(e, 'video')}>
                            <img src={this.props.show.image_url} className="video-image"></img>
                        </button>
                    </div>
                    <ul className="show-item-info">
                        <li className="vid-title" onClick={(e) => this.handleSubmit(e, 'detail')}>{this.props.show.title}</li>
                        <li className="season-info">Season 1</li>
                        <li className= "vid-description">{this.props.show.description}</li>
                        <button className="vid-info-btn" onClick={(e) => this.handleSubmit(e, 'detail')}>
                            <i className="fas fa-arrow-circle-right fa-2x"></i>
                        </button>
                    </ul>
                </div>
            )
        }
    }



export default withRouter(TvBannerItem)