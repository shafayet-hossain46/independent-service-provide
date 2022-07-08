// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClR-9WAdtTQxnS2FlIX3g-ewVg0GWqXZU",
  authDomain: "course-instructor-efe62.firebaseapp.com",
  projectId: "course-instructor-efe62",
  storageBucket: "course-instructor-efe62.appspot.com",
  messagingSenderId: "410466060561",
  appId: "1:410466060561:web:a93eb5fcd40aa1449f64b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;