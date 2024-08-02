import { View, StyleSheet, Text} from "react-native"
type PokemonTypes = {
    type: string,
    bgColor: string
}

const pokemonType = (pokemonType: PokemonTypes) => {
    return(
            <View style={[styles.poekonType,{backgroundColor: pokemonType.bgColor}]}>
                <Text>{pokemonType.type}</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    poekonType: {
        borderRadius: 5,
        backgroundColor: 'orange',
        padding: 5,
        margin: 5,
        fontSize: 0.4,
        textTransform: 'uppercase',
    }
})

export default pokemonType;