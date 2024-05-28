// paginas/PaginaInicial.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Importe a imagem local
import perfilImage from '../img/FotoPerfil.png';

const PaginaInicial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={perfilImage} 
          style={styles.Foto} 
        />
        <View style={styles.aboutContainer}>
          <Text style={styles.negrito}>Nome: DEYVSON</Text>
          <Text style={styles.sobreMim}>
            Sobre Mim: Sou um entusiasta da ciência de dados com uma paixão por transformar dados em insights acionáveis. Adoro aprender novas tecnologias e aplicar métodos analíticos para resolver problemas complexos.
          </Text>
        </View>
      </View>
      <Text style={styles.ocupacao}>Ocupação: Data Science</Text>
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  aboutContainer: {
    marginLeft: 20,
    flex: 1,
  },
  negrito: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: '#0d47a1',
  },
  sobreMim: {
    fontSize: 16,
    color: '#212121',
  },
  Foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ocupacao: {
    fontSize: 18,
    color: '#1976d2',
  },
});

export default PaginaInicial;
