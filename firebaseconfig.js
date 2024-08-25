import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6tVIBhLMRcyRKIdTE9ebKhbw-CFKtr7M",
  authDomain: "test1-58963.firebaseapp.com",
  projectId: "test1-58963",
  storageBucket: "test1-58963.appspot.com",
  messagingSenderId: "30305513138",
  appId: "1:30305513138:web:a0bb30a4b53c5b144023ab",
  measurementId: "G-6038YCN1R9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);


export { app, auth, firestore, storage, database };
