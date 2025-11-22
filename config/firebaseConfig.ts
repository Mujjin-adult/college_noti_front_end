// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVcs_cgLTlzOreaM64wGEk8gBnJYJH5Rw",
  authDomain: "notifront-d3e4e.firebaseapp.com",
  projectId: "notifront-d3e4e",
  storageBucket: "notifront-d3e4e.firebasestorage.app",
  messagingSenderId: "161946781148",
  appId: "1:161946781148:web:9e4e90fcfe2c112757bb19",
  measurementId: "G-7EQJ2E1CZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication 초기화
const auth = getAuth(app);

// FCM 메시징 초기화
const messaging = getMessaging(app);

export { auth, messaging, getToken };
