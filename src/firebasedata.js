import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCuoVPycdKaNXGbtr5ZM8JpkXf81Re9LmA",
  authDomain: "fir-auth01-54669.firebaseapp.com",
  projectId: "fir-auth01-54669",
  storageBucket: "fir-auth01-54669.appspot.com",
  messagingSenderId: "303850643487",
  appId: "1:303850643487:web:cb01784fe1f2c2690b352a",
  measurementId: "G-XQ4YCB6X7J"
};

  const fireDb = firebase.initializeApp(firebaseConfig)
  export default fireDb.database().ref();