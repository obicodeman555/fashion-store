import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5RhqbaYzyF4_WGaCfvpR3Fo88dqVJwGE",
  authDomain: "fashion-store-33f73.firebaseapp.com",
  databaseURL: "https://fashion-store-33f73.firebaseio.com",
  projectId: "fashion-store-33f73",
  storageBucket: "fashion-store-33f73.appspot.com",
  messagingSenderId: "644874063385",
  appId: "1:644874063385:web:691f3b44e56b2bc1c8e488",
  measurementId: "G-1K0CJWZ43V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
