import React from 'react';
// 1. IMPORTANTE: Adicionei 'Image' na lista de imports
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.background}>      
      
      <ScrollView 
        style={styles.background} 
        contentContainerStyle={styles.container}
      >

        {/* O título agora fica embaixo da imagem */}
        <Text style={styles.titulo}>1° MIN</Text>
        
        <View style={styles.card}>
          <Text style={styles.subtitulo}>Auxiliar Técnico em Informática</Text>
          <Text style={styles.descricao}>
            Projetos em HTML, CSS e JavaScript.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e302df', 
  },
  container: {
    flexGrow: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center', 
    gap: 20,
  },
  // 3. O ESTILO DA LOGO:
  logo: {
    width: 100,           // Largura da imagem
    height: 100,          // Altura da imagem
    marginBottom: 10,     // Espaço entre a logo e o título
    // Se a imagem tiver fundo branco, podemos tentar dar um filtro (opcional)
    // tintColor: '#00d4ff', // Descomente para pintar a logo de azul ciano
  },
  titulo: {
    color: '#720063', 
    fontSize: 28,         // Reduzi um pouco para caber com a logo
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase', // Garante que fique tudo em maiúsculo 
  },
  card: {
    backgroundColor: 'rgb(221, 0, 203)', 
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#490054',
  },
  subtitulo: {
    color: '#960087',
    fontSize: 20,
    fontWeight: '600',
  },
  descricao: {
    color: '#570068',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  textoFundo: {
    color: '#555',
    fontSize: 12,
    marginTop: 20,
    textTransform: 'uppercase',
  }
});