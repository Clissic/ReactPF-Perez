import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCDrfvd792Lmu5rf3ZFiMylpD3p6aXJ9wU",
  authDomain: "icommerce-6cb95.firebaseapp.com",
  projectId: "icommerce-6cb95",
  storageBucket: "icommerce-6cb95.appspot.com",
  messagingSenderId: "922611903640",
  appId: "1:922611903640:web:2cc3f5b58884a33a61f4ed"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);