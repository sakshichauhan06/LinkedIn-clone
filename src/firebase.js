import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaKSiptYsQKKD1GrcgLrI0yL3yihdMTw8",
    authDomain: "linkedin-clone-3ed10.firebaseapp.com",
    projectId: "linkedin-clone-3ed10",
    storageBucket: "linkedin-clone-3ed10.appspot.com",
    messagingSenderId: "624232960270",
    appId: "1:624232960270:web:75487ec01fc3d317c2475f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); // it connects our two databases
  const db = firebaseApp.firestore(); // this sets up our database
  const auth = firebase.auth() // get us access to authentication

  export { db, auth }