// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANFY_lia8Vx980chSTauDKdya60tN_H0s",
  authDomain: "painted-dog-conservation.firebaseapp.com",
  projectId: "painted-dog-conservation",
  storageBucket: "painted-dog-conservation.firebasestorage.app",
  messagingSenderId: "655620943985",
  appId: "1:655620943985:web:1f3e4b507200e0d8caabd0",
  measurementId: "G-MD94SFJ4JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);