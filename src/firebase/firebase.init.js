// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZQScWu1mKLySkYNOzq4LXWFaDaJBbphE",
  authDomain: "coffee-store-site-91107.firebaseapp.com",
  projectId: "coffee-store-site-91107",
  storageBucket: "coffee-store-site-91107.firebasestorage.app",
  messagingSenderId: "81141211958",
  appId: "1:81141211958:web:6129b6d755f4b45d20c997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);