import firebase from 'firebase/app'
import 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "AIzaSyAe6709IqviEccxLrV3xMhQ64XTBd5i6tM",
    authDomain: "metodoneuron.firebaseapp.com",
    projectId: "metodoneuron",
    storageBucket: "metodoneuron.appspot.com",
    messagingSenderId: "796354121811",
    appId: "1:796354121811:web:8b9284a8d2ce9a2b89b6a6"
  };
  
  // Initialize Firebase
   export const firebaseApp = firebase.initializeApp(firebaseConfig);