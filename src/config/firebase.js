// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,set,ref, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAzRVi9uNG0L39ZfOVKi9hr8Lb13EmfQX4",
  authDomain: "confess-notes-ecf01.firebaseapp.com",
  databaseURL: "https://confess-notes-ecf01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-notes-ecf01",
  storageBucket: "confess-notes-ecf01.appspot.com",
  messagingSenderId: "251012950575",
  appId: "1:251012950575:web:fd12697afd46146e90f4da",
  measurementId: "G-MLDBYVWF1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export {database,set, ref,onValue}