// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, Auth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Importa getStorage directamente

const firebaseConfig = {
  apiKey: "AIzaSyAzbWDA_4fS5iXp5QXSM9k8mS2fjFpDi-I",
  authDomain: "daytimenotes.firebaseapp.com",
  projectId: "daytimenotes",
  storageBucket: "daytimenotes.firebasestorage.app",
  messagingSenderId: "1070250158293",
  appId: "1:1070250158293:web:269df57698a2655bd85a5c",
  measurementId: "G-SJRDDPFP92",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios con tipos para autocompletar
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider, signInWithPopup, onAuthStateChanged, getAuth};
