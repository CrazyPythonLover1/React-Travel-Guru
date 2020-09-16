import React from 'react';
import './Login.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="Login">
            <div className="header">
                
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
                <p className="login__option__forgot"> Don't have an account? <Link className="orange"> Create a new account</Link></p>
                
            </form>
        </div>
    );
};

export default Login;