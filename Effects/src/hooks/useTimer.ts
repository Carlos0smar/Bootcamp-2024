import { useEffect, useState } from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon/'
function useTimer() {
  const [secconds, setSecconds] = useState(0)
    useEffect( () => {
        const intervals = setInterval(() => {
            setSecconds(count => count + 1);
        }, 1000)
        return () => {
          clearInterval(intervals);
        }
      }, [])

      return { secconds}
}




function getData(id: number){
    return fetch(url + id)
    .then(response => response.json())
    .then(data => data)
}

function usePokemon(id: number): {pokemon: any} {
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        getData(id).
        then(data => setPokemon(data))
    },[id]);
    return {pokemon}
}

export {useTimer, usePokemon};