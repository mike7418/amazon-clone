// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5nAUT4eP9cNibi2g3Jo7ptKhfofLVEpY",
  authDomain: "clone-6848a.firebaseapp.com",
  projectId: "clone-6848a",
  storageBucket: "clone-6848a.firebasestorage.app",
  messagingSenderId: "568549821798",
  appId: "1:568549821798:web:36eb0293b715fad1f58ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);