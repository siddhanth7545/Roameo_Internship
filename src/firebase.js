// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuoVPycdKaNXGbtr5ZM8JpkXf81Re9LmA",
  authDomain: "fir-auth01-54669.firebaseapp.com",
  projectId: "fir-auth01-54669",
  storageBucket: "fir-auth01-54669.appspot.com",
  messagingSenderId: "303850643487",
  appId: "1:303850643487:web:cb01784fe1f2c2690b352a",
  measurementId: "G-XQ4YCB6X7J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth};