import React from 'react'
import { withRouter } from 'react-router'

class IndexHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentScrollHeight: 0, activeClass: "hidden-header"}
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount() {
        window.onscroll = () => {
        const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;

            if (newScrollHeight > 70) {
                this.setState({ activeClass: "index-header-container"})
                return
            } else if (newScrollHeight <= 70) {
                this.setState({ activeClass: "hidden-header" })
            } else if (this.state.currentScrollHeight != newScrollHeight) {
                this.setState({ currentScrollHeight: newScrollHeight })
            }
        }
    }

    searchRedirect() {
        this.props.history.push(`/search`);
    }
    

    handleSubmit(e) {
        e.preventDefault();
        this.props.userLogout();
    }
  

    render() {
        return (
            <div className={this.state.activeClass}>
                <div className="nav-container">
                    <div className="logo-link">
                        <a to="/index" className="logo">
                            kungfulu
                        </a>
                    </div>
                    <div className="cat-link">
                        <button to="/index" className="cat">
                            <img className="cat-button" src="https://img.icons8.com/cotton/64/000000/browser-window--v1.png"></img>
                        </button>
                        <span className="cat-text">BROWSE</span>
                    </div>
                    <div className="stuff-link">
                        <button to="/index" className="stuff">
                            <img className="stuff-button" src="https://img.icons8.com/ios/50/000000/checked-checkbox.png"></img>
                        </button>
                        <span className="stuff-text">MY STUFF</span>
                    </div>
                </div>
                <div className="empty-space"></div>
                <div className="user-container">
                    <div className="search" onClick={() => this.searchRedirect()}>
                        <button className="search-btn">
                            <img src="https://img.icons8.com/ios/50/000000/search--v1.png"></img>
                        </button>
                        <span className="search-text">SEARCH</span>
                    </div>
                    <div className="profile">
                        <button className="profile-btn">U</button>
                        <span className="profile-text">USER</span>
                        <div className="drop-down-container">
                            <div className="night-mode">Night Mode:</div>
                            <ul className="drop-down-items">
                                <li>
                                    <a>Manage Profiles</a>
                                </li>
                                <li>
                                    <a>Account</a>
                                </li>
                                <li>
                                    <a>Help Center</a>
                                </li>
                                <li>
                                    <button onClick={(e) => this.handleSubmit(e)}>Log Out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(IndexHeader)