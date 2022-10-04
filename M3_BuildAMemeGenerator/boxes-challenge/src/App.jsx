import { useState } from 'react'
import './App.css'
import boxes from './boxes'

function App() {

  /**
    * !Challenge part 1:
    * 1. Initialize state with the default value of the
    *    array pulled in from boxes.js
    * 2. Map over that state array and display each one
    *    as an empty square (black border, transparent bg color)
    *    (Don't worry about using the "on" property yet)
  */

  const [squares, setSquares] = useState(boxes)

  const squareElements = squares.map(square => {
    return <div className="box" key={square.id}></div>
  })

  return (
    <div className="App">
      <main>
        {squareElements}
      </main>
    </div>
  )
}

export default App
