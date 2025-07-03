import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { initializeAuth, getAuth, Auth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "Your-API-Key-Here",
  authDomain: "react-expo-demo.firebaseapp.com",
  projectId: "Your-Project-ID-Here",
  storageBucket: "react-expo-demo.firebasestorage.app",
  messagingSenderId: "Your-Messaging-Sender-ID-Here",
  appId: "Your-App-ID-Here",
  measurementId: "Your-Measurement-ID-Here"
};

let app: FirebaseApp;
let auth: Auth;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth(app);
}

export { auth };