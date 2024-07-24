import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SeatGrid from './seats'

function App() {

  const [count, setCount] = useState(0)
  

  return (
    <>
    {/* <div > */}
      <SeatGrid rows={5} columns={5}></SeatGrid>
    {/* </div> */}
    </>
  )
}

export default App
