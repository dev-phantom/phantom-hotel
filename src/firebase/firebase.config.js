// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBZ2fOM-Ot5Nl2EuLgp4sDGxwOzPctZKk",
  authDomain: "phantom-rental.firebaseapp.com",
  projectId: "phantom-rental",
  storageBucket: "phantom-rental.appspot.com",
  messagingSenderId: "181099360227",
  appId: "1:181099360227:web:a65fe59f20cbceb881bad6",
  measurementId: "G-R6MZHC7E99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;