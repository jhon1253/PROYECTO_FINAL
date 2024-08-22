// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMwO7W2K7vYAmMhhbxhC3zeEs_rQNeEVs",
  authDomain: "proyectofinal-12996.firebaseapp.com",
  projectId: "proyectofinal-12996",
  storageBucket: "proyectofinal-12996.appspot.com",
  messagingSenderId: "777147367708",
  appId: "1:777147367708:web:8a1bf53928cb34062dfad9",
  measurementId: "G-5WXW25KY5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth,app}