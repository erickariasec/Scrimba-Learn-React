import { useState } from 'react'
import scrimbaLogo from './assets/scrimba-dark-logo.svg'
import pizzaImage from './assets/pizza.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={scrimbaLogo} className="logo react" alt="React logo" />
        </a>
        <p>Hello Scrimba React Students!</p>
      </div>
      <h1>Have a Pizza 🍕</h1>
      <img src={pizzaImage} className="pizza-img" alt="Pizza" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
