import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  // let counter = 5
  function addValue() {
    if (counter < 20) {
      counter++
      setCounter(counter) // pass the value that is to be kept inside counter variable
      // After commenting above line will, we could use this too
      // setCounter(counter + 1)
    }
  }

  function removeValue() {
    if (counter > 0) {
      counter--
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter 02</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
