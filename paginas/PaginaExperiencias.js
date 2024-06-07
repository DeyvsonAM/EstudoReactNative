// paginas/PaginaExperiencias.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaginaExperiencias = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Experiências</Text>
      
      <View style={styles.experiencia}>
        <Text style={styles.cargo}>Cabo do Exército</Text>
        <Text style={styles.duracao}>5 anos de experiência</Text>
        <Text style={styles.descricao}>
          Como cabo do Exército, desenvolvi diversas habilidades essenciais, incluindo:
          - Liderança e trabalho em equipe
          - Gerenciamento de conflitos
          - Tomada de decisão sob pressão
          - Disciplina e responsabilidade
          - Resolução de problemas
          - Comunicação eficaz
          - Adaptabilidade e flexibilidade
        </Text>
      </View>
      
      <View style={styles.experiencia}>
        <Text style={styles.cargo}>Designer Freelancer</Text>
        <Text style={styles.duracao}>1 ano de experiência</Text>
        <Text style={styles.descricao}>
          Como designer freelancer, concentrei-me em:
          - Domínio intermediário do Adobe Photoshop
          - Conhecimento básico de psicologia das cores para criação de designs eficazes
          - Capacidade de compreender e atender às necessidades dos clientes
          - Trabalho independente e gerenciamento de tempo
          - Criatividade e inovação na resolução de problemas de design
          - Comunicação clara e eficaz com os clientes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0e0e0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0d47a1',
  },
  experiencia: {
    marginBottom: 20,
  },
  cargo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#212121',
  },
  duracao: {
    fontSize: 16,
    marginBottom: 5,
    color: '#757575',
  },
  descricao: {
    fontSize: 16,
    color: '#212121',
  },
});

export default PaginaExperiencias;
