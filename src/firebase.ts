// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxUsxy8W7FJdu2a0i0PoUdSgrEIYjvsxc",
  authDomain: "miyo-app-b0e2a.firebaseapp.com",
  projectId: "miyo-app-b0e2a",
  storageBucket: "miyo-app-b0e2a.firebasestorage.app",
  messagingSenderId: "855277468364",
  appId: "1:855277468364:web:d5b04d6a0a942aae516069",
  measurementId: "G-5S3XPRCH23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);