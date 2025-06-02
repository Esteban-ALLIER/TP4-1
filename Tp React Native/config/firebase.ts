// firebase/firebaseConfig.ts
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyANS294sUKCF9Mh8HjQnnRJilLpP-XW9WQ",
  authDomain: "gsbticketing-403c2.firebaseapp.com",
  projectId: "gsbticketing-403c2",
  storageBucket: "gsbticketing-403c2.firebasestorage.app",
  messagingSenderId: "145802959284",
  appId: "1:145802959284:web:202ed0bf2b8aa6a47ffae1"
};

// Initialize Firebase only once
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Auth with proper error handling
let auth: Auth;
try {
  auth = getAuth(app);
} catch (error) {
  // If getAuth fails, try initializeAuth
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

export { auth };
export const db = getFirestore(app);
export default app;