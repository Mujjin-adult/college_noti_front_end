import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { getAuth } from 'firebase/auth';

// Firebase 프로젝트 설정
// Firebase Console (https://console.firebase.google.com/)에서
// 프로젝트 설정 > 일반 > 내 앱 > SDK 설정 및 구성에서 복사하세요
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // 선택사항
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// FCM 메시징 초기화
const messaging = getMessaging(app);

// Firebase Authentication 초기화
const auth = getAuth(app);

export { messaging, getToken, auth };
