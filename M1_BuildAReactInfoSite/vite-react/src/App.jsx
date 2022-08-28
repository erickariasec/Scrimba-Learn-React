import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

/*
  !Challenge: Complete the Navbar to match the design

  Hint: use the Figma file for the most accurate peek at the design
  (colors, sizes, fonts, etc.)
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  )
}

export default App
