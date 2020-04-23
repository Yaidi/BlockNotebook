import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase';
import Logs from './logs.js';

const register = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

function Register() {
    let history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
const sendData = (e) => {
    e.preventDefault();
    register(name, email, password)
        .then( () =>{
        history.push('/Principal')
        }
        )
        .catch((e) => {
            setError(e.message);
            setTimeout(() => {
                setError('')
            }, 2000)
        })
}
    return (
    <div id= 'Register'>
    <h1> Registro </h1>
    <form onSubmit={sendData}>
    {error && <div>{error}</div>}
    <input value={name} placeholder='Pon tu nombre de usuario' onChange={(e) => {
        setName(e.target.value)
    }}/>
    <input type='email' placeholder='Escribe tu correo' value={email} onChange={(e) => {
        setEmail(e.target.value)}}/>
    <input type='password' placeholder='escribe tu contrseña' value={password} onChange={(e) => {
setPassword(e.target.value)}}/>
        
        <button>Entrar</button>
    </form>
    <Logs/>
    <p>¿Ya tienes una cuenta?
    <Link to="/sigIn" >inicia sesión</Link></p>
    
    </div>
    );
}
export default Register;    