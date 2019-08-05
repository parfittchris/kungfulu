import React from 'react';
import { withRouter } from 'react-router';


class DetailModal extends React.Component {
    constructor(props) {
        super(props)

    }

    componentWillUnmount() {
        this.props.history.push(`/index`)
    }

render() {

    return (
            <div className="detail-page-container">
                <div className="detail-header">TV Show Title
                        </div>
                <div className="detail-body">
                    <div className="detail-masthead-container">
                        <img className="detail-masthead-picture"></img>
                        <div className="detail-masthead-info">
                            <div className="detail-masthead-info-title">Title</div>
                            <div className="detail-masthead-info-info">Info</div>
                            <div className="detail-masthead-info-description">Description</div>
                            <div className="detail-masthead-info-links">links
                                        <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DetailModal)