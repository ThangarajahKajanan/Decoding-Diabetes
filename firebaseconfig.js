import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXb2YUiP4ugBcbKqBJTKLM_YykvKFLN2U",
  authDomain: "decodediab.firebaseapp.com",
  projectId: "decodediab",
  storageBucket: "decodediab.appspot.com",
  messagingSenderId: "506563167972",
  appId: "1:506563167972:web:0259c56949cf1af90c4ef1",
  measurementId: "G-NY94BEYEG0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);


export { app, auth, firestore, storage, database };
