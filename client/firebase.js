// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf_FJKOJo65I2Q11y9eRRcxIow6iFLvDg",
  authDomain: "medibase-258c2.firebaseapp.com",
  projectId: "medibase-258c2",
  storageBucket: "medibase-258c2.appspot.com",
  messagingSenderId: "440407206761",
  appId: "1:440407206761:web:8fb9ee491ca1910ab2ebf8"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig)
// const db = getFirestore(firebaseApp)
// const auth = getAuth(firebaseApp)
// const provider = new GoogleAuthProvider();



export {firebaseApp};
//  export default db;

//  import {getFirestore} from 'firebase/firestore'
//  import { initializeApp } from "firebase/app";
//  import {GoogleAuthProvider,getAuth} from 'firebase/auth'
//  import 'firebase/auth'