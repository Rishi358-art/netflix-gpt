// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDknTn49N9R2Y4sgfr3KrMOBcssM71x_U0",
  authDomain: "netflix-gpt-3f8ab.firebaseapp.com",
  projectId: "netflix-gpt-3f8ab",
  storageBucket: "netflix-gpt-3f8ab.firebasestorage.app",
  messagingSenderId: "401982233139",
  appId: "1:401982233139:web:1e52bff708b9124a476146",
  measurementId: "G-V0M5RLW6K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();