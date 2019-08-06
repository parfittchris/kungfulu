import React from 'react';
import { withRouter } from 'react-router';


class DetailModal extends React.Component {
    constructor(props) {
        super(props)


        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e, type) {
        e.preventDefault()
        this.props.history.push(`/index/shows/${type}/${this.props.video.id}`)
    }

    
    componentWillUnmount() {
        this.props.history.push(`/index`)
    }

render() {
    const image = 'https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show.jpeg'

    return (
            <div className="detail-page-container">
                <div className="detail-header">{this.props.video.title}</div>
                {/* <img src={this.props.video.image_url} className="detail-background-icon"></img> */}
                <div className="detail-body">
                    <div className="detail-masthead-container">
                        <img src={image} className="detail-masthead-picture"></img>
                        <div className="detail-masthead-info">
                            <div className="detail-masthead-info-title">{this.props.video.title}</div>
                            <div className="detail-masthead-info-info">{this.props.video.date}</div>
                            <div className="detail-masthead-info-description">{this.props.video.description}</div>
                            <div className="detail-masthead-info-links">
                                <button className="detail-masthead-info-links" onClick={(e) => this.handleSubmit(e, 'video')}>
                                    <img className="detail-play-button" src="https://img.icons8.com/color/48/000000/circled-play--v1.png"></img>
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

export default withRouter(DetailModal)