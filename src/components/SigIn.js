import React from 'react';
import Auth from './logs.js';
import firebase from 'firebase';
const SigIn = () =>{
    return(
        <div> <h1>Inicia Sesión</h1>
        <input type='email' placeholder='Escribe tu nombre' value=''/>
        <input type='password' placeholder='Escribe tu contraseña' value=''/>
        <Auth/>
        </div>
    )
}
export default SigIn;