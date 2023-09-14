import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCsqBksipF_2Io0ANKubUdd-mhq1QVFc7U",
  authDomain: "canangamer-2fa1d.firebaseapp.com",
  projectId: "canangamer-2fa1d",
  storageBucket: "canangamer-2fa1d.appspot.com",
  messagingSenderId: "845024100506",
  appId: "1:845024100506:web:8e183d47072dd7c8a15f23"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)