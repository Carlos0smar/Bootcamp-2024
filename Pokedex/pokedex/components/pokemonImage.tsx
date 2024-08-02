import { Image, View, StyleSheet } from "react-native";

const pokemonImage = (props: { src: string }) => {
    return (
        <View >
            <Image src={props.src} alt='pokemon' style={styles.pokemonImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    pokemonImage:{
        width: 150,
        height: 150,
    }
})
export default pokemonImage;