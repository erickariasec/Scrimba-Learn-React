import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(0)

  /**
    * !Quiz:
    * 1. What will happen if I put back our Star Wars API call
    *    into the effect function?
    * 2. How will the useEffect be different if I use 
    *    setStarWarsData() instead of console.log()
    * 3. What SHOULD be in our dependencies array in this case?
  */
      
  useEffect(function() {
    console.log("Effect ran")
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [])

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}

export default App
