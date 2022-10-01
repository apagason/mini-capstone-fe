import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl0Ci3SDQc2P1QyUMJDNTH05jeAzKtOBY",
  authDomain: "react-emart-ea952.firebaseapp.com",
  projectId: "react-emart-ea952",
  storageBucket: "react-emart-ea952.appspot.com",
  messagingSenderId: "152311664400",
  appId: "1:152311664400:web:4e410be74966b2f0bedf95",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider };
