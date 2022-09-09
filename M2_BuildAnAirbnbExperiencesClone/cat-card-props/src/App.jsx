import './App.css'
import Contact from './components/Contact'
import mrWhiskerson from "../src/assets/mr-whiskerson.png"
import fluffykins from "../src/assets/fluffykins.png"
import felix from "../src/assets/felix.png"
import pumpkin from "../src/assets/pumpkin.png"
import phoneIcon from "./assets/phone-icon.png"
import mailIcon from "./assets/mail-icon.png"

/* 
  !Challenge:

  - Create a Contact.js component in another file
  - Move one of the contact card divs below into that file
  - import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
  return (
    <div className="App">
      <div className="contacts">
        <Contact />
            
        <Contact />
        
        <Contact />
        
        <Contact />
        
        <div className="contact-card">
          <img src={mrWhiskerson}/>
          <h3>Mr. Whiskerson</h3>
          <div className="info-group">
            <img src={phoneIcon} />
            <p>(212) 555-1234</p>
          </div>
          <div className="info-group">
            <img src={mailIcon} />
            <p>mr.whiskaz@catnap.meow</p>
          </div>
        </div>
        
        <div className="contact-card">
          <img src={fluffykins}/>
          <h3>Fluffykins</h3>
          <div className="info-group">
            <img src={phoneIcon} />
            <p>(212) 555-2345</p>
          </div>
          <div className="info-group">
            <img src={mailIcon} />
            <p>fluff@me.com</p>
          </div>
        </div>
        
        <div className="contact-card">
          <img src={felix}/>
          <h3>Felix</h3>
          <div className="info-group">
            <img src={phoneIcon} />
            <p>(212) 555-4567</p>
          </div>
          <div className="info-group">
            <img src={mailIcon} />
            <p>thecat@hotmail.com</p>
          </div>
        </div>
        
        <div className="contact-card">
          <img src={pumpkin}/>
          <h3>Pumpkin</h3>
          <div className="info-group">
            <img src={phoneIcon} />
            <p>(0800) CAT KING</p>
          </div>
          <div className="info-group">
            <img src={mailIcon} />
            <p>pumpkin@scrimba.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
