// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4EdLVu8PBg0aEHoCss-KZOOHYV7yBFb4",
  authDomain: "english-placement-test-7601f.firebaseapp.com",
  projectId: "english-placement-test-7601f",
  storageBucket: "english-placement-test-7601f.firebasestorage.app",
  messagingSenderId: "285559906605",
  appId: "1:285559906605:web:c6d024c67b90763783f3a4",
  measurementId: "G-SS4HBE6R81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
