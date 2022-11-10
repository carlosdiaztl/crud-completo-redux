// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbHsAUVMcncMYjwYrNI4OTGKN4_0PtP0E",
  authDomain: "crud-completo-a347c.firebaseapp.com",
  projectId: "crud-completo-a347c",
  storageBucket: "crud-completo-a347c.appspot.com",
  messagingSenderId: "519562316437",
  appId: "1:519562316437:web:15d0098ff04fdda32ce99c",
  measurementId: "G-Z557RW81P8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
// const analytics = getAnalytics(app);
