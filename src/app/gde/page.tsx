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
import { app } from "@/firebase/firebaseConfig";

/**
export const metadata: Metadata = {
  title: "Socal GD | GDE",
};
*/

function Page() {
  return (
    <FirebaseAppProvider firebaseApp={app}>
      <FirestoreComponent />
    </FirebaseAppProvider>
  );
}

function FirestoreComponent() {
  const firestoreInstance = getFirestore(useFirebaseApp(), "development");
  firestoreInstance
    ? console.log("Firestore instance is true: " + firestoreInstance)
    : console.log("Firestore instance not found");
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
