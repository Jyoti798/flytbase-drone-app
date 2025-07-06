// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyBI30JyTRjtsG4ianuHHwGsHQCHBN3Q8PU",
  authDomain: "drone-8334a.firebaseapp.com",
  projectId: "drone-8334a",
  storageBucket: "drone-8334a.firebasestorage.app",
  messagingSenderId: "732476071358",
  appId: "1:732476071358:web:d6a0b47187b06df36cadef",
  measurementId: "G-4LPVDCN2XZ",
  databaseURL: "https://drone-8334a-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app);