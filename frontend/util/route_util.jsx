
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    // debugger
    return ({
        loggedIn: Boolean(state.session.id)
    })
};

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/index" /> : <Component {...props} /> 
        )}
    />
);


const Protected = ({ loggedIn, path, component: Component }) => {
    // debugger
    return (
        <Route
            path={path}
            render={props => (
                loggedIn ? <Component {...props} /> : <Redirect to="/" />
            )}
        />
    )
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
