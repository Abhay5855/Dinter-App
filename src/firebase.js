

import firebase from 'firebase/app';

import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCOtcBXe7y4f6TX6k88JDqUiTEIR8D48zM",
    authDomain: "developers-tinder.firebaseapp.com",
    projectId: "developers-tinder",
    storageBucket: "developers-tinder.appspot.com",
    messagingSenderId: "760126605894",
    appId: "1:760126605894:web:b9acc54133f832d00e9847"
  };

  firebase.initializeApp(config);

  window.firebase = firebase;


  export const db = firebase.firestore();

  export default firebase;
