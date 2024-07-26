import { useEffect, useState } from 'react'
import './App.css'
import  {usePokemon, useTimer}  from './hooks/useTimer'

function App() {
  const [count, setCount] = useState(1);
  const [minutes, seetMinutes] = useState(0);
  const [incognito, setIncognito] = useState(true);
  const {secconds} = useTimer();
  const {pokemon} = usePokemon(count);

  // useEffect( () => {
  //   console.log('Rendered')
  // })

  // useEffect( () => {
  //   console.log('run on mount')
  // }, [])

 const changePokemon = (id) => {
    setCount(id);
 }

 
 function getPokemon(id){
  const realId = `00${id}`.slice(-3);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
}

const reveal = () => {
  setIncognito(!incognito)
}
const timer = `${~~(secconds / 60)}:${secconds % 60}`
  return (
    <>

      <div>
        <img src={getPokemon(count)} alt="pokemon" className={incognito? "pokemonIncognito": "pokemonNoIncognito" }/>
        <button onClick={reveal}>Reveal The pokemon</button>
        <button onClick={() => changePokemon((count) =>  count + 1)}>
        Get another pokemon
        </button>

        <h1>{timer}</h1>
        <h1>{secconds}</h1>
        <h1>{pokemon?.name}</h1>
      </div>
    </>
  )
}

export default App
