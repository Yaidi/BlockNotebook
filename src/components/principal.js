import React from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

function logOut(){
 return firebase.auth().signOut()}
const Principal = () =>{
    let history = useHistory()
        return(
        <div>
            <footer>
                <section>
                    <button>Diario</button>
                </section>
            </footer>
            <button> Cerrar sesion</button>
        </div>
    )
}
export default Principal;