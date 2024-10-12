// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH4yFc8SlQlMo6YOQMsVcE4rhpZdfSPAs",
  authDomain: "opphacks.firebaseapp.com",
  projectId: "opphacks",
  storageBucket: "opphacks.appspot.com",
  messagingSenderId: "984154122237",
  appId: "1:984154122237:web:fdf12da6cd933274e19b94",
  measurementId: "G-FBM1H5380Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const FIRESTORE_DB = getFirestore(app);
export {app, auth, analytics, FIRESTORE_DB};

