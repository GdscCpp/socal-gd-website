"use client";

import { Metadata } from "next";
import Header from "../../components/gde/Header";
import Middle from "../../components/gde/Middle";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@/firebase/firebaseConfig";

/**
export const metadata: Metadata = {
  title: "Socal GD | GDE",
};
*/

function Page() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirestoreComponent />
    </FirebaseAppProvider>
  );
}

function FirestoreComponent() {
  const firestoreInstance = getFirestore(useFirebaseApp(), "development");
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <div className="bg-dark-400 text-white flex flex-col gap-x-10 gap-y-10 justify-center items-center">
        <Header />
        <Middle />
      </div>
    </FirestoreProvider>
  );
}

export default Page;
