import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_xB9xH4RRX7brrgVQGofGgwVqXZC2clo",
  authDomain: "carte-mercedeszapata.firebaseapp.com",
  projectId: "carte-mercedeszapata",
  storageBucket: "carte-mercedeszapata.appspot.com",
  messagingSenderId: "213524636617",
  appId: "1:213524636617:web:05c468ea23b2ac3896fe18"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);