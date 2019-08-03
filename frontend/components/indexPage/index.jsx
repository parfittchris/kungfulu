import React from 'react'
import { userLogout } from '../../actions/session_actions';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.userLogout();
    }

    render() {
        return (
            <div className ="logout-btn">
                <form onSubmit={this.handleSubmit}>
                    <button>Logout</button>
                </form>
            </div>
        )
    }
}

export default Index;

