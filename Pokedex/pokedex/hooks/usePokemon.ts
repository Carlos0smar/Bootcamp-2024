import { useEffect, useState } from "react";

const url = 'https://pokeapi.co/api/v2/pokemon/';

function getData(id: number){
    return fetch(url + id)
    .then(response => response.json())
    .then(data => data)
}
function usePokemon(id: number) : {pokemon: any, pokemonImage: string} {
    const [pokemon, setPokemon] = useState(null);
    const [pokemonImage, setPokemonImage] = useState('');
    useEffect(() => {
        getData(id).then(data => {
            setPokemon(data);
            setPokemonImage(getPokemonImage(id));
        });
    },[id]);
    return {pokemon, pokemonImage};
}

function getPokemonImage(id:number){
    const realId = `00${id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
}

    

export {usePokemon};