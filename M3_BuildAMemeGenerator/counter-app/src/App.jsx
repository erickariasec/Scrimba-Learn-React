import { useState } from 'react'
import './App.css'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)
    
  /**
    * !Challenge:
    * - Create a new component named Count
    *    - It should receive a prop called `number`, whose value
    *      is the current value of our count
    *    - Have the component render the whole div.counter--count
    *      and display the incoming prop `number`
    * - Replace the div.counter--count below with an instance of
    *   the new Count component
  */

  const add = () => {
    setCount(prevCount => prevCount + 1)
  }
  
  const subtract = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="App">
      <div className="counter">
        <button className="counter--minus" onClick={subtract}>-</button>
        <Count 
          number={count}
        />
        <button className="counter--plus" onClick={add}>+</button>
      </div>
    </div>
  )
}

export default App
