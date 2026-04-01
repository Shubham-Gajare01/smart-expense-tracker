import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHuy3CSYCJfvoL9ogQqeJFsTe6V4Kp1nE",
  authDomain: "smart-expense-tracker-d0538.firebaseapp.com",
  projectId: "smart-expense-tracker-d0538",
  storageBucket: "smart-expense-tracker-d0538.firebasestorage.app",
  messagingSenderId: "373416292181",
  appId: "1:373416292181:web:90e7d370c8a812c82389dc",
  measurementId: "G-3VF62LL73E",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);