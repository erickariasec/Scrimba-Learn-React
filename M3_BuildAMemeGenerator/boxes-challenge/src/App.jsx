import { useState } from 'react'
import './App.css'
import boxes from './boxes'
import Box from './components/Box'

function App() {

  const [squares, setSquares] = useState(boxes)

  const squareElements = squares.map(square => (
    <Box 
      key={square.id}
      on={square.on}
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
