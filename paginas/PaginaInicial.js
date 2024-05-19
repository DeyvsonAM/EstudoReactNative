
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const PaginaInicial = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.negrito}>Nome: DEYVSON</Text>
      <Text>Ocupação: Deta Science</Text>
      <Text>Experiências: NENHUMA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  negrito: {
    fontWeight: 'semibold',
  },
  Foto: {
    width: 100,
    height: 100,
    borderRadius: 100,
  }
});

export default PaginaInicial;
