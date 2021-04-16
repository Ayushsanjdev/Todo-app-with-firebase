import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyCjUaAS3IbnMWroa1yc5BdccVLrTjyafuo",
    authDomain: "todo-app-with-firebase-882c9.firebaseapp.com",
    projectId: "todo-app-with-firebase-882c9",
    storageBucket: "todo-app-with-firebase-882c9.appspot.com",
    messagingSenderId: "1052111582138",
    appId: "1:1052111582138:web:8e67b7ff3d30166d20a383",
    measurementId: "G-31W61YG48N"
  };

  firebase.initializeApp(firebaseConfig);

  const dataBase = firebase.firestore();

  export{ dataBase };