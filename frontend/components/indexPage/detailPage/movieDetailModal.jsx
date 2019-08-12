import React from 'react';
import { withRouter } from 'react-router';


class MovieDetailModal extends React.Component {
    constructor(props) {
        super(props)

    }

    handleSubmit(e, type) {
        e.preventDefault()
        this.props.history.push(`/index/movies/${type}/${this.props.video.id}`)
    }

    componentWillUnmount() {
        this.props.history.push(`/index`)
    }

    render() {
        return (

            <div className="detail-page-container">
                <div className="detail-header">{this.props.video.title}</div>
                <div className="detail-body">
                    <div className="detail-masthead-container">
                        {/* <img src={this.props.video.image_url} className="detail-background-icon"></img> */}
                        <img src={this.props.video.image_url} className="detail-masthead-picture"></img>
                        <div className="detail-masthead-info">
                            <div className="detail-masthead-info-title">{this.props.video.title}</div>
                            <div className="detail-masthead-info-info">{this.props.video.date}</div>
                            <div className="detail-masthead-info-description">{this.props.video.description}</div>
                            <div className="detail-masthead-info-links">
                                <button className="detail-masthead-info-links" onClick={(e) => this.handleSubmit(e, 'video')}>
                                    <i className="fas fa-play-circle fa-2x"></i>
                                    <h3>Start watching: {this.props.video.title}</h3>
                                </button>
                            </div>
                        </div>
                        <p className="detail-logo">KUNGFULU</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDetailModal)