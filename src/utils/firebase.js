// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPOcZfv-46nBYdRQ8QzjvUJc-G-TpU9DE",
  authDomain: "health-diary-tracking.firebaseapp.com",
  databaseURL: "https://health-diary-tracking.firebaseio.com",
  projectId: "health-diary-tracking",
  storageBucket: "health-diary-tracking.appspot.com",
  messagingSenderId: "829817104690",
  appId: "1:829817104690:web:2654a421b661d5aebb4f2b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
