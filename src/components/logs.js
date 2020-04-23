import React from 'react';
import google from '../images/Google.png';
import facebook from '../images/facebook.png';
import firebase from 'firebase';
let provider = new firebase.auth.GoogleAuthProvider();
function authSocialMedia (){
    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential.accessToken;
        }
        let user = result.user;
      }).catch();
}
const Auth = () =>{
    return(
        <div>
   <p>O inicia sesión con</p>
    <img src={google} className="google" alt="googleLogin" />
    <img src={facebook} className='facebook' alt='facebookLogin'/>
        </div>
    )
}
export default Auth