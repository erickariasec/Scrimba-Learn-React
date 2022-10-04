import { useState } from 'react'
import './App.css'
import boxes from './boxes'
import Box from './components/Box'

function App() {

  const [squares, setSquares] = useState(boxes)

  /**
    * !Challenge: Create a toggle() function that logs
    * "clicked!" to the console
    * 
    * Pass that function down to each of the Box components
    * and set it up so when they get clicked it runs the function
  */

  function toggle(id) {
    console.log(id)
  }

  const squareElements = squares.map(square => (
    <Box 
      key={square.id}
      id={square.id}
      on={square.on}
      handleClick={toggle}
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
