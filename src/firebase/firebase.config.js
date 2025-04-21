// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaa3Y11WjdhV4geuOsJlnQo6bf00Qouuo",
  authDomain: "menu-cd592.firebaseapp.com",
  projectId: "menu-cd592",
  storageBucket: "menu-cd592.firebasestorage.app",
  messagingSenderId: "629499121803",
  appId: "1:629499121803:web:6452d3f0cc410ba210848e",
  measurementId: "G-WY183KW08B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
