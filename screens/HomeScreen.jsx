import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Si configuraste Firebase en un archivo separado
import { useNavigation } from '@react-navigation/native'; // Importamos el hook useNavigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Usamos el hook para obtener el objeto navigation

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cerrar sesión en Firebase
      navigation.navigate('Login'); // Redirigir al Login Screen después de cerrar sesión
    } catch (e) {
      console.error('Error al cerrar sesión: ', e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la Home Screen</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

// Estilos básicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;

