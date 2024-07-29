import PokemonImage from './pokemon-image'
import PokemonName from './pokemon-name';
import PokemonType from './pokemon-type';
import './styles/card.css';
import { useEffect, useState } from 'react'
import {usePokemon} from './hooks/usePokemon';

const getPokemonClass = (type: string) => {
    const generalType = 'card';
    switch (type) {
        case 'fire':
            return generalType +' cardBackgroundFire';
        case 'water':
            return generalType +' cardBackgroundWater';
        case 'grass':
            return generalType +' cardBackgroundGrass';
        case 'ground':
            return generalType +' cardBackgroundGround';
        default:
            return generalType + ' cardBackgroundDefault'; 
    }
}


const card = () => {
    const [pokemonIndex, setPokemonIndex] = useState(1);
    const {pokemon, pokemonImage} = usePokemon(pokemonIndex);
    
    const randomPokemon = () => {
        const randomIndexPokemon = Math.floor(Math.random() * 898) + 1;
        setPokemonIndex(randomIndexPokemon);
    }

  return (
    <>
        <div className={getPokemonClass(pokemon?.types[0].type.name)}>
            <div className='pokeballImage'>
                <div className='pokemonData'>
                    <PokemonName name={pokemon?.name} index={pokemon?.id}/>
                    <div>
                        {pokemon?.types.map((type: any) => <PokemonType type={type.type.name}/>)}
                    </div>
                </div>
                <div className='pokemonImage'>
                    <PokemonImage src={pokemonImage}/>
                </div>
            </div>
        </div>
        <button onClick={randomPokemon}>change pokemon</button>
    </>
  );
}

export default card;