import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-yuRHlEd1LTbQ0E3fxCPCw19kr2ro1kM",
  authDomain: "crwn-db-19083.firebaseapp.com",
  databaseURL: "https://crwn-db-19083.firebaseio.com",
  projectId: "crwn-db-19083",
  storageBucket: "",
  messagingSenderId: "278315953056",
  appId: "1:278315953056:web:81ba741675634bc3c812c5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
