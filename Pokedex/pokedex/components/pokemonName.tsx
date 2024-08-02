import {View, Text, StyleSheet} from "react-native";
type PokemonData={
    name: string;
    index: string;
}

const pokemonName = (pokemonData: PokemonData) => {
    return (
        <View style={styles.container}>
            <Text style={styles.index}>#{pokemonData.index}</Text>
            <Text style={styles.name}>{pokemonData.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.5,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    },
    index:{
        fontSize: 15,
        alignSelf: 'flex-start',
    },
    name:{
        fontSize: 30,
    }
});

export default pokemonName;