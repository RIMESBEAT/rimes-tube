// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhpcs9odZDV36m-sW2I4ZrKa390qcg5ME",
  authDomain: "rimestube.firebaseapp.com",
  projectId: "rimestube",
  storageBucket: "rimestube.appspot.com",
  messagingSenderId: "1092920420034",
  appId: "1:1092920420034:web:dcb2dbf94fb2d8e33dfd5b",
  measurementId: "G-EDS85S1VXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
