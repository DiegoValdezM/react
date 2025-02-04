﻿# Integración de Firebase para la autenticación de usuarios
# Instalación y Configuración
Sigue estos pasos para configurar el entorno y ejecutar la aplicación:

# 1. Instala las Dependencias
Usa Yarn para instalar todas las dependencias del proyecto:
yarn install

# 2. Instala Firebase
yarn add firebase

# 3. Configura Firebase
En tu consola de Firebase, crea un nuevo proyecto y copia la configuración proporcionada en el archivo firebaseConfig.js en la raíz de tu proyecto:

// firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export { app };

# 4. Instala React Navigation
Para habilitar la navegación entre pantallas, ejecuta:
yarn add @react-navigation/native
yarn add @react-navigation/stack
yarn add react-native-screens react-native-safe-area-context

# 5. Instala AsyncStorage (opcional)
Si deseas usar almacenamiento local en la app:
yarn add @react-native-async-storage/async-storage

# Ejecución del Proyecto
yarn start            # Inicia el servidor de desarrollo

Estructura del Proyecto
LoginScreen: Pantalla de inicio de sesión y registro, con autenticación integrada con Firebase.
HomeScreen: Pantalla principal a la que se redirige el usuario tras iniciar sesión, donde también se ofrece una opción de cierre de sesión.


https://github.com/user-attachments/assets/70c6f424-97ca-457b-9bd2-454eb89f75b9


