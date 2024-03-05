// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB4BodIIgLggM0QLscNZI7BeCZRgnpqrw",
  authDomain: "buybusy-2-7ec8f.firebaseapp.com",
  projectId: "buybusy-2-7ec8f",
  storageBucket: "buybusy-2-7ec8f.appspot.com",
  messagingSenderId: "599428974125",
  appId: "1:599428974125:web:b2d90d1899902e445e1aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const db = getFirestore();