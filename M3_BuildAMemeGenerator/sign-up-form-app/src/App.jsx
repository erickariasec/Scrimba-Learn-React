import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      okayToEmail: true
    }
  )

  /**
    * !Challenge: Connect the form to local state
    * 
    * 1. Create a state object to store the 4 values we need to save.
    * 2. Create a single handleChange function that can
    *    manage the state of all the inputs and set it up
    *    correctly
    * 3. When the user clicks "Sign up", check if the 
    *    password & confirmation match each other. If
    *    so, log "Successfully signed up" to the console.
    *    If not, log "passwords to not match" to the console.
    * 4. Also when submitting the form, if the person checked
    *    the "newsletter" checkbox, log "Thanks for signing
    *    up for our newsletter!" to the console.
  */
    
  function handleChange(event) {
    const {name, type, value, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    if (formData.email === "" || formData.password === "") {
      console.log("Fields required")
    } else if ((formData.password === formData.confirmPassword) && formData.okayToEmail) {
      console.log("Successfully signed up", formData, "Thanks for signing up for our newsletter!")
    } else if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up", formData) 
    } else {
      console.log("Passwords do not match")
    }
    // formData.password === formData.confirmPassword ? console.log("Successfully signed up", formData) : console.log("Passwords do not match")
  }

  return (
    <div className="App">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email address"
            className="form--input"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <input 
            type="password" 
            placeholder="Password"
            className="form--input"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <input 
            type="password" 
            placeholder="Confirm password"
            className="form--input"
            onChange={handleChange}
            name="confirmPassword"
            value={formData.confirmPassword}
          />
          
          <div className="form--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              onChange={handleChange}
              name="okayToEmail"  
              checked={formData.okayToEmail}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button 
            className="form--submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
