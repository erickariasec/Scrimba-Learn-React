import { useState } from 'react'
import './App.css'
import userImg from "/assets/user.png"

function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })
  
  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
  
  function toggleFavorite() {
    console.log("Toggle Favorite")
  }

  return (
    <div className="App">
      <main>
        <article className="card">
          <img src={userImg} className="card--image" />
          <div className="card--info">
            <img 
              src={`/assets/${starIcon}`}
              className="card--favorite"
              onClick={toggleFavorite}
            />
            <h2 className="card--name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
    
        </article>
      </main>
    </div>
  )
}

export default App
