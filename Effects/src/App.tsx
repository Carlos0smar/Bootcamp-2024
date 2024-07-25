import { useEffect, useState } from 'react'
import './App.css'
import  {usePokemon, useTimer}  from './hooks/useTimer'

function App() {
  const [count, setCount] = useState(1);
  const [minutes, seetMinutes] = useState(0);
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

const timer = `${~~(secconds / 60)}:${secconds % 60}`
  return (
    <>
      <div>
        <h1>{timer}</h1>
        <h1>{secconds}</h1>
        <h1>{pokemon?.name}</h1>
        <button onClick={() => changePokemon((count) =>  count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
