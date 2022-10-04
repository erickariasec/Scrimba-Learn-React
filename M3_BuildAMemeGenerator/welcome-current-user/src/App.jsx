import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [user, setUser] = useState("Erick")

  return (
    <div className="App">
      <main>
        <Header 
          user={user}
        />
        <Body 
          user={user}
        />
      </main>
    </div>
  )
}

export default App
