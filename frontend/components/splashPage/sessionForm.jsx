import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { userLogin } from '../../actions/session_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }   
        this.redirect = this.redirect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserSubmit = this.demoUserSubmit.bind(this);
        // this.userLogin = this.userLogin.bind(this)
    }
    
    redirect() {
        let path = '/index';
        this.props.history.push(path);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.formAction(this.state).then(this.redirect()).then(this.props.closeModal());
    }

    demoUserSubmit(e) {
        e.preventDefault()
        // debugger

        this.props.userLogin({ email: 'demoUser', password: 'password' }).then(this.props.closeModal());
    }

    update(field) {
        return e => (
            this.setState({
                [field]: e.target.value
            })
        );
    }

    render() {
        let otherFormtype;
        let otherFormText;

        if (this.props.formType === 'Sign Up') {
            otherFormtype = 'login';
            otherFormText = 'Login';
            } else {
            otherFormtype = 'signup';
            otherFormText = 'Sign Up';
        }

        return (
            <div className="form-container">
                <form className="real-form" onSubmit={this.handleSubmit}>
                    <div className='form-header'>
                        <button className='close-button' onClick={() => this.props.closeModal()}>X</button>
                    </div>
                    <div className="auth-login">
                        <div className="login-message">
                            {this.props.formType} to KungFulu
                        </div>
                        <div className='loginDialogue'>
                            <button className="demo-login-btn" onClick={e => this.demoUserSubmit(e)}>
                                    <span className='demo-login-text'>DEMO LOGIN</span>
                                </button>
                            </div>
                            <div className="panel-divider">
                                <div className="or">or</div>            
                            </div>
                        <div className="hulu-login">
                            <div className="form-label">EMAIL</div>
                            <input className="hulu-login-input" type="text" value={this.state.email} onChange={this.update("email")}/>
                            <div className="form-label">PASSWORD</div>
                            <input className="hulu-login-input" type="password" value={this.state.password} onChange={this.update("password")}/>
                        <div className="forgot-password-container">
                            <a className="form-link">Forgot your email or password?</a>
                        </div>
                        <div className="error-message">{this.props.errors}</div>
                            <button className="submit-button">{this.props.formType.toUpperCase()}</button>
                    </div>

                </div>
                <div className="footer-container">
                       {this.props.formMessage}
                        <a onClick={() => this.props.openModal(otherFormtype)} className="form-link">&nbsp;{otherFormText} here!</a>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm)