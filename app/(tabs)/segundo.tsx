// 1. IMPORTANTE: Adicionei 'Image' na lista de imports
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#001a33', 
  },
  container: {
    flexGrow: 1,
    padding: 30,
    alignItems: 'center', 
    gap: 20,
  },
  // 3. O ESTILO DA LOGO:
  logo: {
    width: 500,           // Largura da imagem
    height: 520,          // Altura da imagem
    marginBottom: 30,     // Espaço entre a logo e o título
    // Se a imagem tiver fundo branco, podemos tentar dar um filtro (opcional)
    // tintColor: '#00d4ff', // Descomente para pintar a logo de azul ciano
  },
  titulo: {
    color: '#00d4ff', 
    fontSize: 28,         // Reduzi um pouco para caber com a logo
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase', // Garante que fique tudo em maiúsculo 
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  subtitulo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  descricao: {
    color: '#ccc',
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

export default function HomeScreen() {
  return (
    <View style={styles.background}>      
      
      <ScrollView 
        style={styles.background} 
        contentContainerStyle={styles.container}
      >

        {/* O título agora fica embaixo da imagem */}
        <Text style={styles.titulo}>2° MIN</Text>
        
        <View style={styles.card}>
          <Text style={styles.subtitulo}>Programador de Computador</Text>
          <Text style={styles.descricao}>
            Projetos com PHP, JQuery, React Native, MySQL e USBWebserver, Desenvolvimento em Front e Back end
          </Text>
        </View>
        <Image 
          // Usamos uma URI para pegar uma logo genérica de tecnologia da internet
          source={{ uri: 'https://blog.hubdodesenvolvedor.com.br/wp-content/uploads/2024/03/capa-linguagens-em-alta.jpg' }} 
          style={styles.logo}
          // resizeMode garante que a imagem não fique esticada ou cortada
          resizeMode="contain" 
        />
      </ScrollView>
    </View>
  );
}

