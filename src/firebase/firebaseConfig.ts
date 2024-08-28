import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config64 = process.env.NEXT_DEV_FIREBASE_CONFIG;
if (!config64) {
  throw new Error("Firebase config not found");
}

const json = Buffer.from(config64, "base64").toString("utf8");

const firebaseConfig = JSON.parse(json);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, firebaseConfig };
