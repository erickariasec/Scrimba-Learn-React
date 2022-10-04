import { useState } from 'react'
import './App.css'
import boxes from './boxes'

function App(props) {

  /**
    // !Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"
  */

  const [squares, setSquares] = useState(boxes)

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    borderRadius: props.darkMode ? "50%" : "5px",
    borderColor: props.darkMode ? "crimson" : "yellow"
  }

  const squareElements = squares.map(square => {
    return <div style={styles} className="box" key={square.id}></div>
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
