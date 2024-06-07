// paginas/PaginaHabilidades.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaginaHabilidades = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Habilidades</Text>
      <View style={styles.habilidadesContainer}>
        <Text style={styles.habilidade}>Liderança</Text>
        <Text style={styles.habilidade}>Coordenação de Grupo</Text>
        <Text style={styles.habilidade}>C#</Text>
        <Text style={styles.habilidade}>Python</Text>
        <Text style={styles.habilidade}>HTML</Text>
        <Text style={styles.habilidade}>CSS</Text>
        <Text style={styles.habilidade}>JavaScript</Text>
        <Text style={styles.habilidade}>React Native</Text>
        <Text style={styles.habilidade}>SQL</Text>
        <Text style={styles.habilidade}>PowerBI</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0e0e0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0d47a1',
  },
  habilidadesContainer: {
    alignItems: 'flex-start',
  },
  habilidade: {
    fontSize: 18,
    marginBottom: 10,
    color: '#212121',
  },
});

export default PaginaHabilidades;
