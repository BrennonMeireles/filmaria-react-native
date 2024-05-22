import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { estilos as estilosFilmes } from "../Filmes"; // Renomeei estilos para evitar conflito

export default function Detalhes(props) {
    return (
        <View style={estilosFilmes.container}> {/* Use estilosFilmes em vez de estilos */}
            <View style={estilosFilmes.modalContainer}>
                <TouchableOpacity style={estilosFilmes.btnVoltar} onPress={props.voltar}>
                    <Text style={estilosFilmes.voltar}>Voltar</Text>
                </TouchableOpacity>

                <Text style={estilosFilmes.titulo}>{props.filme.nome}</Text>
                <Text style={estilosFilmes.tSinopse}>Sinopse</Text>
                <Text style={estilosFilmes.sinopse}>{props.filme.sinopse}</Text>
            </View>
        </View>
    )
}

// Estilos definidos como variável fora do componente
const estilos = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        width: '80%',
        height: '80%',
        backgroundColor: '#6b6565',
        borderTopRightRadius: 5,
    },
    btnVoltar: {
        backgroundColor: '#e52246',
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    voltar: {
        color: '#fff',
        fontSize: 14,
    },
    titulo: {
        textAlign: 'center',
        color: '#FFF',
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    tSinopse: {
        color: '#000',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
    },
    sinopse: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 10,
    },
});

export { estilos }; // Exporte os estilos
