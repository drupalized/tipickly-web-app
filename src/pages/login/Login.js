// Global components.
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

// Custom components.
//import LoginForm from '../../components/forms/LoginForm';

// Styles.
import '../../styles/pages/login/Login.scss';

class Login extends Component {
  responseLogin = response => {
    console.log(response);
  }

  render() {
    return (
      <div className="Login">
        <h1>Log into Tipickly</h1>
        <p>Use your Google account to get access to Tipickly.</p>
        <GoogleLogin
          render={renderProps => (
            <Button
              variant="warning"
              size="lg"
              onClick={ renderProps.onClick }
              disabled={ renderProps.disabled }
            >
              Login <FaGoogle />
            </Button>
          )}
          clientId="660770421681-fdcjktmfsr4i8rhq3b7cndnidrsl0312.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={ this.responseLogin }
          onFailure={ this.responseLogin }
          cookiePolicy={'single_host_origin'}
        />
        <p className="text-secondary">
          <small>If you don't have a Googe account, click <a className="font-weight-bold" href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp">here</a>.</small>
        </p>
      </div>
    );
  }
}

export default Login;
