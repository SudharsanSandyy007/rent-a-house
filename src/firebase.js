import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDT_fpZ8KRlkqKV3bHKSsPTuxup13oaZF0",
  authDomain: "rent-a-house-65ab2.firebaseapp.com",
  projectId: "rent-a-house-65ab2",
  storageBucket: "rent-a-house-65ab2.appspot.com",
  messagingSenderId: "346549802304",
  appId: "1:346549802304:web:32f6e980bb3058782716a5",
  measurementId: "G-03NVSKE6TE",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default db;
