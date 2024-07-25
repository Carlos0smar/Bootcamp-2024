import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SeatGrid from './seats'

function App() {

  const [count, setCount] = useState(0)
  

  return (
    <>
      <SeatGrid rows={5} columns={5}></SeatGrid>
    </>
  )
}

export default App
