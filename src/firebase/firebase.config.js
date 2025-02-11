import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL_LKV9v5CHzxnJB4HqMIg1JYNoCIB1IQ",
  authDomain: "river-voyage.firebaseapp.com",
  projectId: "river-voyage",
  storageBucket: "river-voyage.firebasestorage.app",
  messagingSenderId: "149306281328",
  appId: "1:149306281328:web:f42bd14999119aed0bd3b5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
