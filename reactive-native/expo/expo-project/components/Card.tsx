import { View, Text, Image, StyleSheet } from "react-native"
type Props = {
    id: number;
    name: string;
}

function getImageUrl(id: number) {
    const realId = `00${id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
}
function PokemonCard({id, name}: Props){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: getImageUrl(id)}}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      flexDirection: "row",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    name: {
        fontSize: 20,
        color: "#1e1e1e",
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 16,
    }
  });
export default PokemonCard;