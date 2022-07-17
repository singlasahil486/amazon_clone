
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm2xOGvW7knbvPlIH_AYQYdgBw2tBtebo",
    authDomain: "clone-a86d5.firebaseapp.com",
    projectId: "clone-a86d5",
    storageBucket: "clone-a86d5.appspot.com",
    messagingSenderId: "60250848568",
    appId: "1:60250848568:web:557f9c703aed9d9e2b95cd",
    measurementId: "G-0VX78YKPVS"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };