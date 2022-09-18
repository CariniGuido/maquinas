
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuGBrO8IoPninSOzjiHrFD1VeauSFh08w",
  authDomain: "maquinadata-c40ac.firebaseapp.com",
  projectId: "maquinadata-c40ac",
  storageBucket: "maquinadata-c40ac.appspot.com",
  messagingSenderId: "1075113021792",
  appId: "1:1075113021792:web:887e5ec25d7f533ced0e05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)  


