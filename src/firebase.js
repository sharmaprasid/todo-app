// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCRrOPoH6aNojMACFqtSRXa4TRj7mUuVCE",
  authDomain: "todo-app-87b86.firebaseapp.com",
  databaseURL: "https://todo-app-87b86-default-rtdb.firebaseio.com",
  projectId: "todo-app-87b86",
  storageBucket: "todo-app-87b86.appspot.com",
  messagingSenderId: "662339982081",
  appId: "1:662339982081:web:3c594b7dafbf2cf7750100",
  measurementId: "G-9CRDWMCHE6"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const db = getDatabase(App);
export const auth=getAuth(App);