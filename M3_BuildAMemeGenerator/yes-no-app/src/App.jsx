import { useState } from 'react'
import './App.css'

function App() {
  const [isGoingOut, setIsGoingOut] = useState(true)
    /**
      * !Challenge: 
      * - Initialize state for `isGoingOut` as a boolean
      * - Make it so clicking the div.state--value flips that
      *   boolean value (true -> false, false -> true)
      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
    */

  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <div className="App">
      <div className="state">
          <h1 className="state--title">Do I feel like going out tonight?</h1>
          <div onClick={changeMind} className="state--value">
              <h1>{isGoingOut ? "Yes" : "No"}</h1>
          </div>
        </div>
    </div>
  )
}

export default App
