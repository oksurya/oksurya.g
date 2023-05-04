// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIGL2F6pbmhYH18UCXECmfj3jmIzgVKmU",
  authDomain: "oksuryain.firebaseapp.com",
  projectId: "oksuryain",
  storageBucket: "oksuryain.appspot.com",
  messagingSenderId: "364466693638",
  appId: "1:364466693638:web:fc7e0ca2e4eac5bc5c0587",
  measurementId: "G-3NVFJ6CW57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);