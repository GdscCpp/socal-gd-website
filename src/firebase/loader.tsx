"use client";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@/firebase/firebaseConfig";

function FirebaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirestoreComponent>{children}</FirestoreComponent>
    </FirebaseAppProvider>
  );
}

function FirestoreComponent({ children }: { children: React.ReactNode }) {
  const firestoreInstance = getFirestore(useFirebaseApp(), "development");
  return (
    <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>
  );
}

export default FirebaseProvider;
