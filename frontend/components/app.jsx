import React from 'react';
import LoginFormContainer from './splashPage/loginFormContainer';
import SignUpFormContainer from './splashPage/signupFormContainer';
import Modal from './modal/modal';
import SplashPage from './splashPage/splashPage';
import { Route, Switch, Link} from 'react-router-dom';
import Navbar from './navbar/navbarContainer';
import indexContainer from './indexPage/indexContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <Modal/>
        <header className="header">
            <Navbar />
        </header> 
        <Switch>
            <ProtectedRoute exact path="/index" component={indexContainer}/>
            <AuthRoute exact path="/" component={SplashPage} />
            <h1>KungFulu happened here...</h1>
            </Switch>
            <footer className="footer">This is the footer</footer>
    </div>
)

export default App;