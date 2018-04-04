import React, {Component} from 'react';
import Validator from '../utility/Validator';
import AppInput from '../control/AppInput';
import Check from '../control/Check';

export class Login extends Component {
    constructor() {
        super();
        document
            .getElementById('body')
            .className = 'hold-transition login-page';

        this.state = {
            username: '',
            password: '',
            rememberMe: false
        };

        this.onChange = this
            .onChange
            .bind(this);

        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit(e) {
        if (!Validator.showFormErrors(this, e)) {
            console.log('form is invalid: do not submit');
        } else {
            console.log('form is valid: submit');
        }
        console.log('component state', JSON.stringify(this.state));

        localStorage.setItem('user', JSON.stringify({token:'testtoken'}));

        this.props.history.push('/');
    }

    onChange(e, eApp) {
        //Validator.onChange(this, e);

        if (eApp != null) {
            this.setState({
                [eApp.name]: eApp.value
            });
        }
        else{
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="/">
                            <b>Web Application</b>
                        </a>
                    </div>
                    <div className="login-box-body">
                        <form method="post" noValidate onSubmit={this.onSubmit}>
                            <AppInput
                                name='username'
                                value={this.state.test1}
                                onChange={this.onChange}
                                icon='user'
                                type='textbox'
                                display='User name'
                                validations={{
                                'required': true,
                                'minLength': 5
                            }}/>

                            <div className="form-group has-feedback">
                                <label id='passwordLabel'>Password</label>
                                <input
                                    ref='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                                <Check value={this.state.password} display='Password' rules={['required']}/>
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                name='rememberMe'
                                                checked={this.state.rememberMe}
                                                type="checkbox"
                                                onChange={this.onChange}/>
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}