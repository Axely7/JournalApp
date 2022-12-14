// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyd6N51rlRgLQkJM9uF5LziYprjlQRUVI",
  authDomain: "react-journal-f683a.firebaseapp.com",
  projectId: "react-journal-f683a",
  storageBucket: "react-journal-f683a.appspot.com",
  messagingSenderId: "649354846682",
  appId: "1:649354846682:web:433329e97095bd5e51a0e3"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp)