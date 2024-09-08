// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMfWkzDVXDnjFzp_EmGoJS_OMBItK42QI",
  authDomain: "clone-yt-3f910.firebaseapp.com",
  projectId: "clone-yt-3f910",
  storageBucket: "clone-yt-3f910.appspot.com",
  messagingSenderId: "562207777039",
  appId: "1:562207777039:web:c270072a16d7b4ab1ade7a",
  measurementId: "G-PRY901N883",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* eslint-disable */
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export const provider=new GoogleAuthProvider();