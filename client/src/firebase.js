// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "citynest-ed672.firebaseapp.com",
  projectId: "citynest-ed672",
  storageBucket: "citynest-ed672.appspot.com",
  messagingSenderId: "867674545383",
  appId: "1:867674545383:web:dd783a7c5f951956735642"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);