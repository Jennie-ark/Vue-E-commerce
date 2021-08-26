import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
  apiKey: "AIzaSyAFkOnk4FPeb3sEXvh_uU9u0hIE82KVm5I",
  authDomain: "online-shop-6ccdb.firebaseapp.com",
  projectId: "online-shop-6ccdb",
  storageBucket: "online-shop-6ccdb.appspot.com",
  messagingSenderId: "287865001771",
  appId: "1:287865001771:web:8a2b909e363a67206a976e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export { firebase, auth, db, storage, functions };
