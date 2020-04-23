import React from 'react';
import firebase from 'firebase';
const Principal = () =>{
    function logOut (){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        
          }).catch(function(error) {
              return( <p>{error}</p>)
          });
    }
        return(
        <div>
            <footer>
                <section>
                    <button>Diario</button>
                </section>
            </footer>
            <button onClick= {logOut}>Cerrar sesion</button>
        </div>
    )
}
export default Principal;