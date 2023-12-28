// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import {Firestore} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvmixjube3PKyHBz6pSLnVsk-nN1Yh7vU",
  authDomain: "chatapp-6bf41.firebaseapp.com",
  projectId: "chatapp-6bf41",
  storageBucket: "chatapp-6bf41.appspot.com",
  messagingSenderId: "115235085228",
  appId: "1:115235085228:web:2a865fbde920595b00b809"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = Firestore();