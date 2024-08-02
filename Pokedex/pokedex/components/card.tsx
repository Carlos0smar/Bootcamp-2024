import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { usePokemon } from "../hooks/usePokemon";
import { useState, useEffect } from "react";
import PokemonName from "./pokemonName";
import PokemonImage from "./pokemonImage";
import PokemonType from "./pokemonType";
import {getBgColor, getTypeColor} from "../styles/getColor";

const Card = () => {
    const [bgColor, setBgColor] = useState('');
    const [typeColor, setTypeColor] = useState('');
    const [pokemonIndex, setPokemonIndex] = useState(1);
  const { pokemon, pokemonImage } = usePokemon(pokemonIndex);

  const randomPokemon = () => {
    const randomIndexPokemon = Math.floor(Math.random() * 898) + 1;
    setPokemonIndex(randomIndexPokemon);
  }

  useEffect(() => {
    if (pokemon && pokemon.types) {
      const bgColor = getBgColor(String(pokemon.types[0].type.name));
      setBgColor(bgColor.color);

      const typeColor = getTypeColor(String(pokemon.types[0].type.name));
      setTypeColor(typeColor.color)
    }
  }, [pokemon]);

  return (
    <View>
      <View style={[styles.card, { backgroundColor: bgColor, shadowColor: bgColor }]}>
        <ImageBackground source={require('../assets/pokeball-background.jpg')} style={styles.pokeballImage} />
        <View style={styles.pokemonData}>
          <PokemonName name={pokemon?.name} index={pokemon?.id} />
          <View style={styles.pokemonType}>
            {pokemon?.types.map((types: any) => (
              <PokemonType key={types.type.name} type={types.type.name} bgColor={typeColor}/>
            ))}
          </View>
        </View>
        <View style={styles.pokemonImage}>
          <PokemonImage src={pokemonImage} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={randomPokemon}>
        <Text style={styles.buttonText}>Random Pokemon</Text>
      </TouchableOpacity>
      {/* <Button style={styles.button} title="Random Pokemon" onPress={randomPokemon} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    minWidth: 300,
    minHeight: 200,
    padding: 0,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    elevation: 15,
    shadowOpacity: 0.5,
    borderColor: 'black',
    borderBottomWidth:4,
    borderRightWidth: 4,
  },
  pokeballImage: {
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 100,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  pokemonData: {
    flex: 2,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    flexDirection: 'column',
    gap: 20, 
  },
  pokemonImage: {
    flex: 2,
    zIndex: 1,
  },
  pokemonType: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#f8c291', 
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Card;
