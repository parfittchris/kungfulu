import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal, id) => dispatch(openModal(modal, id))
    })
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props)
        
    }   
    
    componentDidMount() {
        if (this.props.match.path === "/index/shows/detail/:videoId") {
            return this.props.openModal('detail', this.props.match.params.videoId,)
        } else if (this.props.match.path === "/index/shows/video/:videoId") {
            return this.props.openModal('video', this.props.match.params.videoId) 
        } else if (this.props.match.path === "/index/movies/detail/:videoId") {
            return this.props.openModal('movieDetail', this.props.match.params.videoId)
        } else {
            return this.props.openModal('movieVideo', this.props.match.params.videoId)
        }
    }   

    render() {
        return (
            null
        )
    }
}



export default connect(null, mapDispatchToProps)(DetailPage);