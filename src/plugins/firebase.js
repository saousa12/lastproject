// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBHvC08AVXvZNtHddiSPbUG_pYYGceZg7M",
  authDomain: "lastproject-a845e.firebaseapp.com",
  projectId: "lastproject-a845e",
  storageBucket: "lastproject-a845e.appspot.com",
  messagingSenderId: "651070610835",
  appId: "1:651070610835:web:39fa54b90490bc9dbc5c66",
  measurementId: "G-GX2B3B5Q01",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default { db, auth };
