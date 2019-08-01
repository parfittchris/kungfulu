import React from 'react';
import LoginFormContainer from './splashPage/loginFormContainer';
import SignUpFormContainer from './splashPage/signupFormContainer';
import Modal from './modal/modal';
import SplashPage from './splashPage/splashPage';
import { Route, Switch, Link} from 'react-router-dom';
import Navbar from './navbar/navbarContainer';
import indexContainer from './indexPage/indexContainer';

const App = () => (
    <div>
        <Modal/>
        <header className="header">
            <Navbar />
        </header> 
        <Switch>
            <Route exact path="/" component={SplashPage}/>
            <Route exact path="/index" component={indexContainer} />
            <h1>KungFulu happened here...</h1>
            </Switch>
            <footer className="footer">This is the footer</footer>
    </div>
)

export default App;