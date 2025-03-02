// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcK6g4_0i5aVwSLjH6B0L2TbBfVCIOe1Q",
  authDomain: "netflixgpt-bf3d6.firebaseapp.com",
  projectId: "netflixgpt-bf3d6",
  storageBucket: "netflixgpt-bf3d6.firebasestorage.app",
  messagingSenderId: "6414653401",
  appId: "1:6414653401:web:a7c6fdf1bb7b44aab1abc8",
  measurementId: "G-08ZB686EMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();