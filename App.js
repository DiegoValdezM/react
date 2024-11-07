import React from 'react';
import Navigator from './navigator'; // o el nombre que le hayas dado al archivo del Navigator
import 'react-native-gesture-handler';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Si vas a usar autenticación
import { initializeApp } from 'firebase/app';
import { firebaseConfig} from './firebaseConfig';

export default function App() {
  return <Navigator />;
}

