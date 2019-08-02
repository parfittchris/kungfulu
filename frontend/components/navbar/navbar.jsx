import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                prevScrollpos: window.pageYOffset,
                visible: true
            };

            this.handleScroll = this.handleScroll.bind(this)
        }

        componentDidMount() {
            window.addEventListener("scroll", this.handleScroll);
        }

        componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
        }

        handleScroll() {
            const {prevScrollpos} = this.state;
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollpos > currentScrollPos;

            this.setState({
                prevScrollpos: currentScrollPos,
                visible
            })
        }

    render() {
        return (
            <nav className="navigation-container">
                <span className="nav-logo">
                   KUNGFULU
                </span>
                <div className="nav-buttons">
                        <button className="nav-button-signup" onClick={() => this.props.openModal('signup')}>START YOUR FREE TRIAL</button>
                        <button className="nav-button-login" onClick={() => this.props.openModal('login')}>LOG IN</button>
                </div>
             </nav>
         ) 
    }
}

export default Navbar