import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFSpQWcnOVQMH5IJ-9dvkbBjExRGR27ec",
    authDomain: "tiktok-clone-90605.firebaseapp.com",
    databaseURL: "https://tiktok-clone-90605.firebaseio.com",
    projectId: "tiktok-clone-90605",
    storageBucket: "tiktok-clone-90605.appspot.com",
    messagingSenderId: "1052232249042",
    appId: "1:1052232249042:web:2b4f02cff98ce9327e870b",
    measurementId: "G-WNJ2BHGSNJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;