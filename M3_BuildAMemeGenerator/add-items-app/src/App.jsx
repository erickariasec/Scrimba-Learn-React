import { useState } from 'react'
import './App.css'

function App() {
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
  
  function addItem() {
    setThingsArray(prevThingsArray => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
  }
  
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div className="App">
      <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
      </div>
    </div>
  )
}

export default App
