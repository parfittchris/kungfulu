import React from 'react'
import { withRouter, Link } from 'react-router-dom';


class SplashPage extends React.Component {

    render() {
        return (
                <div className="masthead">
                    <div className="masthead-container">
                        <h1 className="masthead-headline">All Your TV In One Place</h1>
                        <div className="mast-primary">
                            Watch thousands of shows and movies,
                             with plans starting at $5.99/month
                        </div>
                        <div className="mast-secondary">
                            HBO®, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
                        </div>
                        <div className="mast-input">
                            <Link to='/signup'>Start your free trial</Link>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SplashPage