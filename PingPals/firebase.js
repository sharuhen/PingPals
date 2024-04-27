// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKqSMOBROmhNyqnXArU4fVsZi1jt4QHn8",
  authDomain: "pingpals-e1d97.firebaseapp.com",
  projectId: "pingpals-e1d97",
  storageBucket: "pingpals-e1d97.appspot.com",
  messagingSenderId: "1010247377012",
  appId: "1:1010247377012:web:abd91b4635010157c4f121",
  measurementId: "G-JJ0DXBLRF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const firestore = getFirestore(app);



// Export the functions you need for your app
export { firestore };
