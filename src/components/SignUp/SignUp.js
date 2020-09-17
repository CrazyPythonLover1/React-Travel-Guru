import React, { useState, useContext } from 'react';
import fbIcon from '../../images/Icon/fb.png';
import gIcon from '../../images/Icon/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, createUserWithEmailAndPassword, signInWithEmailAndPassword,handleGoogleSignIn, handleFbSignIn} from '../Login/loginManager';
import { UserContext } from '../../App';

const SignUp = () => {

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/booking" } };

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res,true);
        })
      }

      const fbSignIn = ()=> {
        handleFbSignIn()
        .then(res => {
          handleResponse(res,true);
        })
      }

    

    const handleResponse = (res,redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
    }

    const handleSubmit = (e) => {
        if( newUser && user.name && user.password){
          createUserWithEmailAndPassword(user.name, user.email, user.password)
          .then(res => {
            handleResponse(res,true);
          })
        }
        if(!newUser && user.email && user.password){
          signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            handleResponse(res,true);
          })
    }
    e.preventDefault();
    }
    


    const handleBlur = (e) =>{
        let isFieldValid = true;
        if(e.target.value === 'name'){
            isFieldValid = true;
        }
        if(e.target.name === "email"){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        let password;
        if(e.target.name === "password1"){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            if(isPasswordValid && passwordHasNumber){
                password = e.target.value;
                isFieldValid = false;
            }

        }
        if(e.target.name === "password" && password){
            isFieldValid = e.target.value === password;
             
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo); 
        }
    }
    return (
        <div>
            <div className="Login">
            <div className="header">

            </div>
            
            <form onSubmit={handleSubmit}  className="form">
                <h1> Create an account </h1>
                <input onBlur={handleBlur} placeholder="First Name "       type="text" name="name"  id=""/>
                <input onBlur={handleBlur} placeholder="Last Name"         type="text" name="lName"  id=""/>
                <input onBlur={handleBlur} placeholder="Username or Email" type="text" name="email" id=""/>
                <input onBlur={handleBlur} placeholder="Password"          type="password" name="password1" id=""/>
                <input onBlur={handleBlur} placeholder="Confirm Password"  type="password"  name="password"  id=""/>
                {/* <div className="login__options">
                    <div className="login__option">
                        <input type="checkbox" name="" id=""/> <label> Remember Me</label>
                    </div>
                    
                    <div className="login__option__forgot">
                        <label> <Link className="orange"> Forgot Password </Link> </label>
                    </div>
                </div> */}
                <input className="button" type="submit" onClick={handleSubmit} value="Create an Account" />

                <p className="login__option__forgot"> Already have an account? <Link to="login" className="orange"> Login </Link></p>
                 
            </form>

            <div className="or"> <h3>or</h3> </div>

            <div className="another__login_options">
                <div onClick={fbSignIn} className="another__login__option">
                    <img src={fbIcon} alt=""/>
                    <p> Continue with Facebook </p>
                </div>
                <div onClick={ googleSignIn} className="another__login__option">
                    <img src={gIcon} alt=""/>
                    <p> Continue with Google </p>
                </div>
            </div>

        </div>
        </div>
    );
};

export default SignUp;