import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBz3jeuPY1evgmPRFOTFVWUJMEzZpEQYVA",
    authDomain: "crwn-db-84d26.firebaseapp.com",
    databaseURL: "https://crwn-db-84d26.firebaseio.com",
    projectId: "crwn-db-84d26",
    storageBucket: "crwn-db-84d26.appspot.com",
    messagingSenderId: "844424322585",
    appId: "1:844424322585:web:4b1f60110331ff14c65488",
    measurementId: "G-GCZ8EGYK2E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

