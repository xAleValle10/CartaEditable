import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8QYQ0UZ3xBqLibBr8DpM1mldgX4Wnw8g",
  authDomain: "carta-editable.firebaseapp.com",
  projectId: "carta-editable",
  storageBucket: "carta-editable.appspot.com",
  messagingSenderId: "22274627181",
  appId: "1:22274627181:web:fd1ec3db52cf30c8501164",
  measurementId: "G-X6TP933N8N",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
