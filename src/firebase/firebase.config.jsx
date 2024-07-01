import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0lDah5y3BEY_AT2TQYi2Lx7eM57dsLR0",
  authDomain: "simple-react-authenticat-6665c.firebaseapp.com",
  projectId: "simple-react-authenticat-6665c",
  storageBucket: "simple-react-authenticat-6665c.appspot.com",
  messagingSenderId: "834093316946",
  appId: "1:834093316946:web:9b7c556e9a67853d1f588b",
  measurementId: "G-D8RG8WRKR6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);