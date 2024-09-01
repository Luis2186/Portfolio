// import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword,} from "firebase/auth";
// import { FirebaseAuth } from "./config";

// const googleProvider = new GoogleAuthProvider();

// export const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(FirebaseAuth, googleProvider);
//     //const credentials = GoogleAuthProvider.credentialFromResult(result);
//     const user = result.user;

//     const { displayName, email, photoURL, uid } = user;

//     return {
//       ok: true,
//       displayName,
//       email,
//       photoURL,
//       uid,
//     };
//   } catch (error) {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     return {
//       ok: false,
//       errorCode,
//       errorMessage,
//       email,
//       credential,
//     };
//   }
// };

// export const registerUserWithEmailPassword = async ({email,password,displayName,}) => {

//   try {
//     const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);

//     const { uid, photoURL } = resp.user;

//     updateProfile(FirebaseAuth.currentUser,{displayName})

//     return {
//       ok: true,
//       uid,
//       photoURL,
//       email,
//       displayName,
//     };
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     return {
//       ok: false,
//       errorCode,
//       errorMessage,
//     };
//   }
// };


// export const loginWithEmailPassword = async ({email,password}) => {

//     try {
//       const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password);
  
//       const { uid, photoURL,displayName } = resp.user;
  
//       return {
//         ok: true,
//         uid,
//         photoURL,
//         email,
//         displayName,
//       };
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
  
//       return {
//         ok: false,
//         errorCode,
//         errorMessage,
//       };
//     }
//   };

  
// export const logoutFirebase = async () => {

//     try {
//         return FirebaseAuth.signOut();
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
  
//       return {
//         ok: false,
//         errorCode,
//         errorMessage,
//       };
//     }
//   };