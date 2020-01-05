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

<<<<<<< HEAD
=======
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

>>>>>>> updated sign-in and sign-up components and firebase utils
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
