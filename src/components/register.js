import React from 'react'
import google from '../images/Google.png';
import {Link} from 'react-router-dom';
function resgister() {
    return (
     <div id= 'Register'>
     <h1> Registro </h1>
     <form>
     <input placeholder='Pon tu nombre de usuario'/>
     <br/>
     <input type='email' placeholder='Escribe tu correo'/>
     <br/>
         <input type='password' placeholder='escribe tu contrseña'/>
         <br/>
         <Link to="/principal"> <button>Entrar</button></Link>
     </form>
     <p>O inicia sesión con</p>
     <img src={google} className="google" alt="googleLogin" />
       
     </div>
    );
  }
  
  export default resgister;
  