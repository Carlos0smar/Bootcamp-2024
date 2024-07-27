import "./index.css";
import { useEffect, useState, useRef } from "react";


export default function App() {
  const[minutes, setMinutes] = useState(0);
  const[seconds, setSeconds] = useState(0);
  const myInput = useRef(null);

  const startTimer = () => {
    intervalRef.current =setInterval(() => {setSeconds(prev => prev + 1)}, 1000)
  };
  const stopTimer = () => {
    //stop timer
    
  };
  const resetTimer = () => {
    // Complete this function
  };
  const setMinute = (e) => {
    setMinutes(+e.target.value);
  }
  const focus = ()=> {
    myInput.current.focus();
  }
  const setTimer = () => {
    setMinutes(minutes)
  } 
  return (
    <div className="container">
      <input onChange={setMinute}type="number" placeholder="Enter time in minutes" id="input" ref={myInput}/>
      <button onClick={focus}>Focus Input</button>
      <button>Set Timer</button>
      <h1>Timer</h1>
      <span> {Math.floor(seconds/60)} mins </span>
      <span> {seconds % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
