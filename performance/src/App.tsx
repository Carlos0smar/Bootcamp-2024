import { useState, useMemo } from 'react'
import './App.css'

const factorial = (n: number): number => {
  if (n <= 0) return 1;
  console.log('factorial', n);
  return n * factorial(n - 1);
}

const fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


function App() {
  const [count, setCount] = useState(0);
  const [magiNumber, setMagicNumber] = useState(0);
  // const inc = () => {
  //   if(magiNumber <= 3) {
  //   setMagicNumber(magiNumber + 1)}};

  // const dec = () => {
  //   if(magiNumber <= 3) {
  //   setMagicNumber(magiNumber + 1)}};

  const numFactorial = useMemo(() => factorial(count), [magiNumber]);

  return (
    <>
      <h1>{count}</h1>
      {/* <h2>Factorial de {count} is: {factorial(count)}</h2> */}
      <h2>Factorial de {count} is: {numFactorial}</h2>
      <button onClick={() => {
        setCount((count) => count + 1)
        // inc();
        }}>Increment</button>
      <button onClick={() => {
        setCount((count) => count - 1);
        // dec();
        }}>Decrement</button>
    </>
  )
}

export default App
/*
useMemo is used to memoize the result of a function that is expensive to run.
  0 => 1
  1 => 1
  2 => 2
  3 => 6
  4 => 24
  5 => 120
*/