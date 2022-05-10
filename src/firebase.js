import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARGU5LeY1cddEDKF1ITx91S6TEjREGsUQ",
    authDomain: "twitter-clone-5fac8.firebaseapp.com",
    projectId: "twitter-clone-5fac8",
    storageBucket: "twitter-clone-5fac8.appspot.com",
    messagingSenderId: "661287220516",
    appId: "1:661287220516:web:96940d99bc58f9cb116fb1",
    measurementId: "G-9VMEY9S9PT"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;