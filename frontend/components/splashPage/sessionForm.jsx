import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }   
        this.redirect = this.redirect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    redirect() {
        let path = '/index';
        this.props.history.push(path);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.formAction(this.state).then(this.redirect())
    }

    update(field) {
        return e => (
            this.setState({
                [field]: e.target.value
            })
        );
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="auth-login">
                        <div className="login-message"></div>
                        <div className="login-dialog">
                            {this.props.formType}
                    </div>

                    <div className="login-dialog-2">
                        <div className ="facebook-btn">
                            <div className="facebook-login">
                                <button className='login-button'>
                                    <span className="fb-btn-text">CONTINUE TO FACEBOOK</span>
                                </button>
                            </div>
                            <div className="panel_divider">
                                or
                            </div>
                        </div>
                        <div className="hulu-login">
                            <div className="form-label">EMAIL</div>
                            <input className="hulu-login-input" type="text" value={this.state.email} onChange={this.update("email")}/>
                            <div className="form-label">PASSWORD</div>
                            <input className="hulu-login-input" type="password" value={this.state.password} onChange={this.update("password")}/>
                        
                        <div className="forget-message">
                            <a className="forgot-text">Forgot your email or password?</a>
                        </div>
                        <button className="submit-button">{this.props.formType.toUpperCase()}</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)