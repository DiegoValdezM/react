// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Si vas a usar autenticación
import { getFirestore } from 'firebase/firestore'; // Importa Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCxphT4QlrcZu3diClRJCXXuvOXTQBEXJE",
  authDomain: "autenticacion-699f1.firebaseapp.com",
  projectId: "autenticacion-699f1",
  storageBucket: "autenticacion-699f1.firebasestorage.app",
  messagingSenderId: "545895465310",
  appId: "1:545895465310:web:e0f89af5ffb3023f810fcf",
  measurementId: "G-10P2NX2J0M"
};

const app = initializeApp(firebaseConfig); // Inicializa la app de Firebase

// Aquí exportas las funciones que usarás
const auth = getAuth(app);
const db = getFirestore(app);  // Ahora Firestore está correctamente importado y configurado

export { auth, db };  // Exportas para usarlos en otros archivos

