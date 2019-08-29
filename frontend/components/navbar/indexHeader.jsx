import React from 'react'
import { withRouter } from 'react-router'

class IndexHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentScrollHeight: 0, 
            activeClass: "hidden-header",
            categories: ['Action Kung-Fu', 'Adult Animation Kung-Fu', 'Adventure Kung-Fu', 
                          'Anime Kung-Fu', 'Black Stories Kung-Fu', 'Cartoons Kung-Fu', 
                          'Classics Kung-Fu', 'Comedy Kung-Fu', 'Cooking & Food Kung-Fu',
                          'Crime Kung-Fu', 'Documentary Kung-Fu', 'Drama Animation Kung-Fu',
                          'Family Kung-Fu', 'Game Show Kung-Fu', 'Health & Wellness Kung-Fu',
                          'History Kung-Fu', 'Horror Kung-Fu', 'International Kung-Fu',
                          'Kids Kung-Fu', 'Late Night Kung-Fu', 'Latino Kung-Fu',
                          'LGBTQ+ Kung-Fu', 'Lifestyle & Culture Kung-Fu', 'Music Kung-Fu',
                          'Mystery Kung-Fu', 'New Kung-Fu', 'Reality Kung-Fu',
                          'Romance Kung-Fu', 'Science & Technology Kung-Fu', 'Science Fiction Kung Fu',
                          'Sitcom Kung-Fu', 'Sketch Comedy Kung-Fu', 'Sports Kung-Fu',
                          'Stand Up Kung-Fu', 'Teen Kung-Fu', 'Thriller Kung-Fu',
                          'Audio Description Kung-Fu']
            
        }
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

    redirect(page) {
        this.props.history.push(page);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.userLogout();
    }

  

    render() {
        let categoryBtns1= this.state.categories.slice(0, 10).map((category, idx) => {
            return <button className="category-btn" key={idx}  onClick={() => this.redirect(`/index/categories/${category}`)}>{category}</button> 
        });

        let categoryBtns2 = this.state.categories.slice(10,20).map((category, idx) => {
            return <button className="category-btn" key={idx} onClick={() => this.redirect(`/index/categories/${category}`)}>{category}</button>
        });

        let categoryBtns3 = this.state.categories.slice(20,30).map((category, idx) => {
            return <button className="category-btn" key={idx} onClick={() => this.redirect(`/index/categories/${category}`)}>{category}</button>
        });

        let categoryBtns4 = this.state.categories.slice(30).map((category, idx) => {
            return <button className="category-btn" key={idx} onClick={() => this.redirect(`/index/categories/${category}`)}>{category}</button>
        });

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
                                    {categoryBtns1}
                                </div>
                                <div className="categories-right-ul">
                                    {categoryBtns2}
                                </div>
                                <div className="categories-right-ul">
                                    {categoryBtns3}
                                </div>
                                <div className="categories-right-ul">
                                    {categoryBtns4}                                    
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