// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgStujPSKmAWsAhgUOg4pzwY2olB8f3RE",
  authDomain: "my-lingua.firebaseapp.com",
  projectId: "my-lingua",
  storageBucket: "my-lingua.appspot.com",
  messagingSenderId: "452827732335",
  appId: "1:452827732335:web:893b3151194452390bb09a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;