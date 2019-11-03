import React, { Component } from 'react';
import HomePage from '../User/HomePage';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            check: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    signIn() {

    }
    onsubmit() {

    }
    render() {
        return (
            <form onSubmit={onsubmit} className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only"> Email address
                </label>
                <input onChange={this.handleEmailChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input onChange={this.handlePasswordChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button onClick={this.signIn} className="btn btn-lg btn-primary btn-block" type="button"> Sign in
                </button>
            </form>
        );
    }
}

export default Login;