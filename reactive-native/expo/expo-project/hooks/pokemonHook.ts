import { useState, useEffect } from 'react';
const LIMIT = 25;
const getUrl = (limit: number = 25, offset= 0) => `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

interface Pokemon {
    name: string;
    url: string;
}

function fetchData(url: string){
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
}

export function usePokemon(offset: number = 0) {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(getUrl(LIMIT, offset))
        .then(data => {

            setPokemon(old=> [...old, ...data.results]);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [offset]);

    return { pokemons, loading };
}