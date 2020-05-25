import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBBBbs7Seo-xQpj9KdsbOTCocrN72dyuxE",
    authDomain: "cuevadb-a3e2a.firebaseapp.com",
    databaseURL: "https://cuevadb-a3e2a.firebaseio.com",
    projectId: "cuevadb-a3e2a",
    storageBucket: "cuevadb-a3e2a.appspot.com",
    messagingSenderId: "581583851220",
    appId: "1:581583851220:web:99c130b6aa658a09eaf541",
    measurementId: "G-VVZJ5TL33P"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;