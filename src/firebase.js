// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApuLpGEokuJ38d5M-RNLJxPpPnGaPViI0",
  authDomain: "food-order-platform-23e61.firebaseapp.com",
  projectId: "food-order-platform-23e61",
  storageBucket: "food-order-platform-23e61.firebasestorage.app",
  messagingSenderId: "95898876621",
  appId: "1:95898876621:web:b4466f6bf9eabfb5aac784",
  measurementId: "G-FY12D6LDQ7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
