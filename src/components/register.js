import React, { useState } from 'react'
import google from '../images/Google.png';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

const register = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    return (
     <div id= 'Register'>
     <h1> Registro </h1>
     <form onSubmit={(e) => {
         e.preventDefault();
         register(name, email, password)
            .then()
            .catch((e) => {
                setError(e.message);
                setTimeout(() => {
                    setError('')
                }, 2000)
            })
     }}>
     {error && <div>{error}</div>}
     <input value={name} placeholder='Pon tu nombre de usuario' onChange={(e) => {
         setName(e.target.value)
     }}/>
     <br/>
     <input type='email' placeholder='Escribe tu correo' value={email} onChange={(e) => {
         setEmail(e.target.value)}}/>
     <br/>
         <input type='password' placeholder='escribe tu contrseña' value={password} onChange={(e) => {
         setPassword(e.target.value)}}/>
         <br/>
         <button>Entrar</button>
     </form>
     <p>O inicia sesión con</p>
     <img src={google} className="google" alt="googleLogin" />
       <br/>
       <p>¿Ya tienes una cuenta?
       <Link to="/sigIn" >inicia sesión</Link></p>
     </div>
    );
  }
  
  export default Register;
  