import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const createUserWithEmailAndPassword = (name,email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = "";
        newUserInfo.success = true;
        updateUserInfo(name);
        verifyEmail();
        return newUserInfo;
    })
    .catch((error) =>{
        const newUserInfo = {}
        newUserInfo.error =  error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
}

const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: name,
    }).then(function() {
    // Update successful.
    console.log('user name updated successfully')
    }).catch(function(error) {
    // An error happened.
    console.log(error);
    });
}

const verifyEmail = () => {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification()
    .then(function() {
    // Email sent.
    }).catch(function(error) {
    // An error happened.
    });
}



export const signInWithEmailAndPassword = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch(function(error) {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
 }

export const handleGoogleSignIn  = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
      var {displayName,email,photoURL} = result.user;

      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo:photoURL,
        success: true,
      };

      return signedInUser;
    })
    .catch(err =>{
        console.log(err);
        console.log(err.message);
    })
  };


  export const handleFbSignIn = ()=>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then((result)=>{
        const token = result.credential.accessToken;
        const user = result.user;
        user.success = true;
        return user;
    })
    .catch((err)=>{
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
};


export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      return signedOutUser;
    }).catch(err => {
      // An error happened.
    });
  }
