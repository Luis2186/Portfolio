// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCENil9t_StNS-AGLahvINRg-j_7fYjGDw",
  authDomain: "react-cursos-940f9.firebaseapp.com",
  projectId: "react-cursos-940f9",
  storageBucket: "react-cursos-940f9.appspot.com",
  messagingSenderId: "322717516207",
  appId: "1:322717516207:web:bed7bcf1542ab270a02f5a",
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);
