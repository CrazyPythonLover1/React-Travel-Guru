import React from 'react';
import './Login.css';
import Header from '../Header/Header';

const Login = () => {
    return (
        <div className="Login">
            <div className="header">
                <Header/>
            </div>
            
            <div className="login__option">
                <h2>Login </h2>
                <input type="text" name="username" placeholder="Username or Email" id=""/>
            </div>
        </div>
    );
};

export default Login;