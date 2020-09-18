import React, { useState, useContext } from 'react';
import fbIcon from '../../images/Icon/fb.png';
import gIcon from '../../images/Icon/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleGoogleSignIn, handleFbSignIn } from '../Login/loginManager';
import { UserContext } from '../../App';
import CommonHeader from '../CommonHeader/CommonHeader';

const SignUp = () => {

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    });

    const [loggedInUser, setLoggedInUser,trip, id, setId] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/booking" } };

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }



    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.name && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }



    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <div>
            <div className="Login">
                <div className="header">
                    <CommonHeader />
                </div>

                <form onSubmit={handleSubmit} className="form">
                    <h1> Create an account </h1>
                    <input onBlur={handleBlur} placeholder="First Name " type="text" name="name" id="" />
                    <input placeholder="Last Name" type="text" name="lName" id="" />
                    <input onBlur={handleBlur} placeholder="Username or Email" type="text" name="email" required id="" />
                    <input placeholder="Password" type="password" name="password1" required id="" />
                    <input onBlur={handleBlur} placeholder="Confirm Password" type="password" name="password" required id="" />
                   
                    <input className="button" type="submit" value="Create an Account" />

                    <p className="login__option__forgot"> Already have an account? <Link to="/login" onChange={() => setNewUser(!newUser)} className="orange"> Login </Link></p>

                </form>

                <div className="or"> <h3>or</h3> </div>

                <div className="another__login_options">
                    <div onClick={fbSignIn} className="another__login__option">
                        <img src={fbIcon} alt="" />
                        <p> Continue with Facebook </p>
                    </div>
                    <div onClick={googleSignIn} className="another__login__option">
                        <img src={gIcon} alt="" />
                        <p> Continue with Google </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;