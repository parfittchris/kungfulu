import React from 'react'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.redirect = this.redirect.bind(this);
    }


    redirect() {
        let path = '/';
        this.props.history.push(path);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.userLogout().then(this.redirct())
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button>Logout</button>
                </form>
            </div>
        )
    }
}

export default Index