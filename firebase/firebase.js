// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7FLswBTNmEkPm9iQsMnKEqtlqDHfXepQ",
  authDomain: "school-app-test-967bb.firebaseapp.com",
  projectId: "school-app-test-967bb",
  storageBucket: "school-app-test-967bb.firebasestorage.app",
  messagingSenderId: "571799432522",
  appId: "1:571799432522:web:c7fd70645a7863fbe1a5b3",
  measurementId: "G-CSBG67BDS0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);