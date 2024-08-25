import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_DEV_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_DEV_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_DEV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_DEV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_DEV_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_DEV_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_DEV_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db, firebaseConfig };
