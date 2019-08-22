import React from 'react'
import { withRouter } from 'react-router'

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentScrollHeight: 0,
            activeClass: "hidden-header",
            categories: ['Classic', 'Home-Movie', 'Documentary',
                'Sci-Fi', 'Animated', 'Foreign Film',
                'Comedy', 'Drama']
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    redirect(page) {
        this.props.history.push(page);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.userLogout();
    }

    render() {
        let categoryBtns = this.state.categories.map((category, idx) => {
            return <button className="category-btn" key={idx} onClick={() => this.redirect(`/index/categories/${category}`)}>{category}</button>
        });

        return (
            <div className="index-header-container">
                <div className="nav-container">
                    <div className="logo-link" onClick={() => this.redirect(`/index`)}>
                        <a to="/index" className="logo">
                            kungfulu
                        </a>
                    </div>
                    <div className="cat-link">
                        <button to="/index" className="cat">
                            <i className="far fa-window-restore fa-lg"></i>
                        </button>
                        <div className="cat-text">BROWSE</div>
                        <div className="categories-tab">
                            <div className="categories-left">
                                <ul className="categories-left-items">
                                    <li className="categories-left-li">NETWORKS</li>
                                    <li className="categories-left-li">TV SHOWS</li>
                                    <li className="categories-left-li">MOVIES</li>
                                    <li className="categories-left-li">HULU ORIGINALS</li>
                                    <li className="categories-left-li">KIDS</li>
                                </ul>
                            </div>
                            <div className="categories-right">
                                <div className="categories-right-ul">
                                    {categoryBtns}
                                </div>
                                <div className="categories-right-ul">
                                    {categoryBtns}
                                </div>
                                <div className="categories-right-ul">
                                    {categoryBtns}
                                </div>
                                <div className="categories-right-ul">
                                    {categoryBtns}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stuff-link">
                        <button to="/index" className="stuff">
                            <i className="far fa-check-square fa-2x"></i>
                        </button>
                        <button className="stuff-text" onClick={() => this.redirect(`/my-stuff`)}>MY STUFF</button>
                    </div>
                </div>
                <div className="empty-space"></div>
                <div className="user-container">
                    <div className="search" onClick={() => this.redirect(`/search`)}>
                        <button className="search-btn">
                            <i className="fas fa-search"></i>
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

export default withRouter(SearchHeader)