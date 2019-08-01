import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navigation-container">
                <span>
                    <img src="./assets/logo.png" alt="kungfulu-log" className="nav-logo"/>
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