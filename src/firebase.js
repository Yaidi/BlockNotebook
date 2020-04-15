 import firebase from 'firebase';
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDYAFksHcRihY4cHAZLn_TB2Q5cOOoWRQU",
  authDomain: "block-notebook.firebaseapp.com",
  databaseURL: "https://block-notebook.firebaseio.com",
  projectId: "block-notebook",
  storageBucket: "block-notebook.appspot.com",
  messagingSenderId: "178680380503",
  appId: "1:178680380503:web:77fdbe1756225583247712"
};
// Initialize Firebase

export default () => {
  firebase.initializeApp(firebaseConfig);
};
