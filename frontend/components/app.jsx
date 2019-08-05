import React from 'react';
import Modal from './modal/modal';
import SplashPageContainer from './splashPage/splashPageContainer';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar/navbarContainer';
import IndexHeader from './navbar/indexHeaderContainer';
import indexContainer from './indexPage/indexContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Footer } from './footer/footer'
import tvBanner from './indexPage/banner/movieBannerContainer';
import detailPage from './indexPage/detailPage/detailPage';


const App = () => (
    <div>
        <Modal/>
        <header className="header">
            <Switch>
                <AuthRoute exact path="/" component= {Navbar}/>
                <ProtectedRoute exact path="/index" component={IndexHeader} />
            </Switch>
        </header> 
        <Switch>
            <Route exact path='/banner' component={tvBanner} />
            <ProtectedRoute path="/index" component={indexContainer}/>
            <AuthRoute exact path="/" component={SplashPageContainer} />
        </Switch>
            <ProtectedRoute path="/index/shows/detail/:videoId" component={detailPage} />
            <ProtectedRoute path="/index/shows/video/:videoId" component={detailPage} />
            {/* <ProtectedRoute path="/index/movies/detail/:videoId" component={movieDetailPage} />
            <ProtectedRoute path="/index/movies/video/:videoId" component={movieDetailPage} /> */}
            <footer className="footer"><Footer /></footer>
    </div>
)

export default App;