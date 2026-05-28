// 1. IMPORTANTE: Adicionei 'Image' na lista de imports
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

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
            Projetos em HTML, CSS e JavaScript, Manutenção preventiva em computadores, instalação e configuração de sistemas.
          </Text>
        </View>
        <Image 
                  // Usamos uma URI para pegar uma logo genérica de tecnologia da internet
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf205LEgc3KaI19ucXJPqFMIPLpzTREdIIg&s' }} 
                  style={styles.logo}
                  // resizeMode garante que a imagem não fique esticada ou cortada
                  resizeMode="contain" 
                />
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
    width: 500,           // Largura da imagem
    height: 520,          // Altura da imagem
    marginBottom: 30,     // Espaço entre a logo e o título
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