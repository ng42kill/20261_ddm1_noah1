// 1. IMPORTANTE: Adicionei 'Image' na lista de imports
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
// TESTE DE COMMIT 4
export default function HomeScreen() {
  return (
    <View style={styles.background}>      
      
      <ScrollView 
        style={styles.background} 
        contentContainerStyle={styles.container}
      >
        {/* 2. A IMAGEM NO TOPO: */}
        <Image 
          // Usamos uma URI para pegar uma logo genérica de tecnologia da internet
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2010/2010957.png' }} 
          style={styles.logo}
          // resizeMode garante que a imagem não fique esticada ou cortada
          resizeMode="contain" 
        />

        {/* O título agora fica embaixo da imagem */}
        <Text style={styles.titulo}>INFORMÁTICA PARA INTERNET</Text>
        
        <View style={styles.card}>
          <Text style={styles.subtitulo}>Desenvolvimento para Dispositivos Móveis</Text>
          <Text style={styles.descricao}>
            Projeto mobile em react-native
          </Text>
        </View>

        <Text style={styles.textoFundo}>veja a tabela abaixo</Text>


        <View style={styles.page}>
          <View style={styles.tabelaContainer}>
            <View style={[styles.linha, styles.cabecalho]}>
              <Text style={[styles.celula, styles.textoCabecalho, {flex: 0.8}]}>HORA | 8:00 | 8:50 | 10:00 | 10:50 | 11:40 | 13:30 | 14:20 | 15:10</Text>
              <Text style={[styles.celula, styles.textoCabecalho]}>SEG | WEB | WEB | POR | POR | BIO | EAC | POR | N/A</Text>
              <Text style={[styles.celula, styles.textoCabecalho]}>TER | QUI | QUI | SLA | SLA | SLA | SLA | SLA | N/A</Text>
              <Text style={[styles.celula, styles.textoCabecalho]}>QUA | HIS | HIS | CNW | CNW | LPC | FIS | LPC | N/A</Text>
              <Text style={[styles.celula, styles.textoCabecalho]}>QUI | DDM | DDM | MAT | MAT | ING | EDF | EDF | N/A</Text>
              <Text style={[styles.celula, styles.textoCabecalho]}>SEX | BDD | BDD | SLA | SLA | ING | FIS | GEO | GEO</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const horarios = {
  hora: [800, 850, 1000, 1050, 1140, 1330, 1420, 1510],
  segunda: ["Sistemas Web", "Sistemas Web", "Portugues", "Portugues", "Biologia", "EACMT", "Portugues", "N/A"],
  terca: ["Quimica", "Quimica", "Aula3", "Aula4", "Aula5", "Aula6", "Aula7", "N/A"],
  quarta: ["Historia", "Historia", "CNW", "CNW", "LPC", "Fisica", "LPC", "N/A"],
  quinta: ["DDM", "DDM", "Matematica", "Matematica", "Ingles", "Edu Fisica", "Edu Fisica", "N/A"],
  sexta: ["Banco de Dados", "Banco de Dados", "Aula3", "Aula4", "Ingles", "Fisica", "Geografia", "Geografia"],
}
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#001a33', 
  },
  celula: {},
  page: {
    alignItems: 'center',
  },
  textoCabecalho: {},
  linha: {},
  cabecalho: {},
  tabelaContainer: {},
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