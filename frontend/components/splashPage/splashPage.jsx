import React from 'react'
import { withRouter, Link } from 'react-router-dom';



class SplashPage extends React.Component {



    render() {
        return (
                <div className="splashPage">
                    <div className="masthead-container">
                        <div>
                            <h1 className="headline">All Your KungFu Content One Place</h1>
                        </div>
                        <div className="primary">
                            Watch thousands of shows and movies,
                             with plans starting at <br/> $5.99/month
                        </div>
                        <div className="secondary">
                            HBO®, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
                        </div>
                        <div className="input">
                        <button className='splash-btn' onClick={() => this.props.openModal("signup")}>SIGN UP TODAY</button>
                        </div>
                    
                        <div className ="legal">
                            Free trials available only to those who know KungFu
                        </div>
                    
                    </div>
                </div>
        )
    }
}

export default withRouter(SplashPage)