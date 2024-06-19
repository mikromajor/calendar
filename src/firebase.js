// Import the functions you need from the SDKs you need
// use npm install firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCRQVDUMbxWyGkMI7-KOICZi4Rf2Vpk9AI",
  authDomain: "calc-auth.firebaseapp.com",
  projectId: "calc-auth",
  storageBucket: "calc-auth.appspot.com",
  messagingSenderId: "280512460099",
  appId: "1:280512460099:web:977c5d21037e8b3d8a6bf6",
  measurementId: "G-GBE3NP45G7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
