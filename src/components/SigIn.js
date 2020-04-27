import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase';
import Auth from './Auths.js';

function sigIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

const SigIn = () =>{
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const ini = (e) => {
        e.preventDefault();
        sigIn(email, password)
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
    return(
        <div> <h1>Inicia Sesión</h1>
        <form onSubmit={ini}>
        {error && <div>{error}</div>}
        <input type='email' placeholder='Escribe tu nombre' value={email} onChange = {(e)=>{setEmail(e.target.value)} }/>
        <input type='password' placeholder='Escribe tu contraseña' value={password}  onChange = {(e)=>{setPassword(e.target.value)} }/>
        <button> Entrar </button>
        </form>
        <Auth/>
        <p>¿Aún no tienes una cuenta?</p>
        <Link to= '/Register'> Registrate</Link>
        </div>
    )
}
export default SigIn;