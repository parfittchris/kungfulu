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
            this.props.openModal('detail', this.props.match.params.videoId)
        } else {
            this.props.openModal('video', this.props.match.params.videoId)
        }

    }
    

    render() {
        return (
            null
        )
    }
}



export default connect(null, mapDispatchToProps)(DetailPage);