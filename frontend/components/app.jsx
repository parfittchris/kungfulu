import React from 'react';
import Modal from './modal/modal';
import SplashPageContainer from './splashPage/splashPageContainer';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbarContainer';
import IndexHeader from './navbar/indexHeaderContainer';
import indexContainer from './indexPage/indexContainer';
import SearchHeaderContainer from './searchPage/searchHeaderContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Footer } from './footer/footer'
import detailPage from './indexPage/detailPage/detailPage';
import searchBarContainer from './searchPage/searchContainer';
import categoryContainer from './indexPage/categories/categoriesContainer';

const App = () => (
    <div>
        <Modal/>
        <header className="header">
            <Switch>
                <AuthRoute exact path="/" component= {Navbar}/>
                <ProtectedRoute exact path="/search" component={SearchHeaderContainer} />
                <ProtectedRoute path="/index/categories" component={SearchHeaderContainer} />                
                <ProtectedRoute path="/index" component={IndexHeader} />
                <Route path='/header' component ={IndexHeader}></Route>
            </Switch>
        </header>  
        <Switch>
            <ProtectedRoute exact path="/index/categories/:category" component={categoryContainer} />
            <ProtectedRoute path="/index" component={indexContainer}/>
            <ProtectedRoute exact path="/search" component={searchBarContainer} />
            <AuthRoute exact path="/" component={SplashPageContainer} />
        </Switch>
            <ProtectedRoute path="/index/shows/detail/:videoId" component={detailPage} />
            <ProtectedRoute path="/index/shows/video/:videoId" component={detailPage} />
            <ProtectedRoute path="/index/movies/detail/:videoId" component={detailPage} />
            <ProtectedRoute path="/index/movies/video/:videoId" component={detailPage} />
            <footer className="footer"><Footer /></footer>
    </div>
)

export default App;