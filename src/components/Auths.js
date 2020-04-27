import React from 'react';
import {useHistory} from 'react-router-dom';
import googleImg from '../images/Google.png';
//import facebook from '../images/facebook.png';
import firebase from 'firebase';

function authSocialMedia (provider){
    const providers = {
 google: new firebase.auth.GoogleAuthProvider(),
 facebook:'b',
 git: 'a',
    }
    return firebase.auth().signInWithPopup(providers[provider])
}
const Auth = () =>{
    let history= useHistory();
    function goo (e) {
        e.preventDefault();
        authSocialMedia('google').then( () =>{
            console.log('hola')
            history.push('/Principal')
            }
            )
    }
    return(
        <div>
   <p>O inicia sesión con</p>
    <img src={googleImg} className="google" alt="googleLogin" onClick={goo}/>
        </div>
    )
}
export default Auth