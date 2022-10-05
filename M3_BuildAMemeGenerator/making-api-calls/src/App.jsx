import { useState } from 'react'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState({})

  console.log("Component rendered")
    
  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App
