import * as React from 'react';

interface LoginProps {
    onLogin(username: string): void;
}

class LoginState {
    username: string = '';
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = new LoginState();
        this.onLogin = this.onLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            username: event.currentTarget.value
        });
    }

    onLogin() {
        if (this.state.username) {
            // validate...
            this.props.onLogin(this.state.username);
        }
    }

    render() {
        return (
            <>
            <h1>Login</h1>
            <hr />
            <span>Username:  </span>
            <input type="text" value={this.state.username} onChange={this.onChange} />
            <button type="button" onClick={this.onLogin}>OK</button>
            </>
        );
    }
}

export default Login;