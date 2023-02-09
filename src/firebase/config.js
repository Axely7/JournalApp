// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID
} = getEnvironments();

// console.log(import.meta.env)
// console.log(process.env)

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAyd6N51rlRgLQkJM9uF5LziYprjlQRUVI",
//   authDomain: "react-journal-f683a.firebaseapp.com",
//   projectId: "react-journal-f683a",
//   storageBucket: "react-journal-f683a.appspot.com",
//   messagingSenderId: "649354846682",
//   appId: "1:649354846682:web:433329e97095bd5e51a0e3"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyB7DcnY_X72hTcjVhISrhs_wUMDKDSYV88",
//   authDomain: "react-journal-testing-97e74.firebaseapp.com",
//   projectId: "react-journal-testing-97e74",
//   storageBucket: "react-journal-testing-97e74.appspot.com",
//   messagingSenderId: "536693256387",
//   appId: "1:536693256387:web:ddcebe41764127709eb276",
//   measurementId: "G-6Z8HHL4ZER"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID
};

console.log(firebaseConfig)


// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp)