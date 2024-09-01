// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmvphBj21n4F0OM7WkR7eKLr5kS7twdTM",
    authDomain: "portfolioll.firebaseapp.com",
    projectId: "portfolioll",
    storageBucket: "portfolioll.appspot.com",
    messagingSenderId: "848695396120",
    appId: "1:848695396120:web:dbdfc7a73b554449f4c06d"
  };

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);
