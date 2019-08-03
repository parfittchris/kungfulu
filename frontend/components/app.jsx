import React from 'react';
import LoginFormContainer from './splashPage/loginFormContainer';
import SignUpFormContainer from './splashPage/signupFormContainer';
import Modal from './modal/modal';
import SplashPageContainer from './splashPage/splashPageContainer';
import { Route, Switch, Link} from 'react-router-dom';
import Navbar from './navbar/navbarContainer';
import indexContainer from './indexPage/indexContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Footer } from './footer/footer'
import tvBanner from './indexPage/tvBannerContainer';


const App = () => (
    <div>
        <Modal/>
        <header className="header">
            <AuthRoute exact path="/" component= {Navbar}/>
        </header> 
        <Switch>
            <Route exact path='/banner' component={tvBanner} />
            <ProtectedRoute exact path="/index" component={indexContainer}/>
            <AuthRoute exact path="/" component={SplashPageContainer} />
            
        </Switch>
            <footer className="footer"><Footer /></footer>
    </div>
)

export default App;