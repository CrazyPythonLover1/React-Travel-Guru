import React, { useState } from 'react';
import './Login.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import fbIcon from '../../images/Icon/fb.png';
import gIcon from '../../images/Icon/google.png';
import { initializeLoginFramework } from './loginManager';

const Login = () => {

    return (
        <div className="Login">
            <div className="header">
                <Header/>
            </div>
            
            <form className="form">
                <h1>Login </h1>
                <input placeholder="Username or Email"  type="text" id=""/>
                <input placeholder="Password" type="password" name=""  id=""/>
                <div className="login__options">
                    <div className="login__option">
                        <input type="checkbox" name="" id=""/> <label> Remember Me</label>
                    </div>
                    
                    <div className="login__option__forgot">
                        <label> <Link className="orange"> Forgot Password </Link> </label>
                    </div>
                </div>
                <button type="submit"> Login </button>
                <p className="login__option__forgot"> Don't have an account? <Link to="signup" className="orange"> Create a new account</Link></p>
                
            </form>

            <div className="or"> <h3>or</h3> </div>

            <div className="another__login_options">
                <div className="another__login__option">
                    <img src={fbIcon} alt=""/>
                    <p> Continue with Facebook </p>
                </div>
                <div className="another__login__option">
                    <img src={gIcon} alt=""/>
                    <p> Continue with Google </p>
                </div>
            </div>

        </div>
    );
};

export default Login;