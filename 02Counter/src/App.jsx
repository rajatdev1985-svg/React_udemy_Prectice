import { useState } from "react"

function App() {
  // let counter = 15
  const [counter, setCounter] = useState(15)

  function addValue() {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter(0)
    }
  }
  return (
    <>
      <h1>Rajat Singh {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App
