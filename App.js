import { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";

import Filmes from './src/Filmes';
import api from "./src/Services/api";

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function lerFilmes() {
      try {
        const response = await api.get('r-api/?api=filmes');
        setFilmes(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    }

    lerFilmes();
  }, []);

  if (loading) {
    return (
      <View style={estilos.loading}>
        <ActivityIndicator size="large" color="#00f" />
      </View>
    );
  } else {
    return (
      <View style={estilos.container}>
        <FlatList
          data={filmes}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
