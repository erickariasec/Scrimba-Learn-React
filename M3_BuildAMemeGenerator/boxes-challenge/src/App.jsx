import { useState } from 'react'
import './App.css'
import boxes from './boxes'
import Box from './components/Box'

function App() {

  /**
    // !Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"
  */

  const [squares, setSquares] = useState(boxes)

  const squareElements = squares.map(square => (
    <Box 
      on={square.on}
      key={square.id}
    />
  ))

  return (
    <div className="App">
      <main>
        {squareElements}
      </main>
    </div>
  )
}

export default App
