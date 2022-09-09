import './App.css'
import Contact from './components/Contact'
import mrWhiskerson from "../src/assets/mr-whiskerson.png"
import fluffykins from "../src/assets/fluffykins.png"
import felix from "../src/assets/felix.png"
import pumpkin from "../src/assets/pumpkin.png"

function App() {
  return (
    <div className="App">
      <div className="contacts">
        <Contact 
          img={mrWhiskerson}
          name="Mr. Whiskerson"
          phoneNumber="(212) 555-1234"
          mail="mr.whiskaz@catnap.meow"
        />
        <Contact 
          img={fluffykins}
          name="Fluffykins"
          phoneNumber="(212) 555-2345"
          mail="fluff@me.com"
        />
        <Contact 
          img={felix}
          name="Felix"
          phoneNumber="(212) 555-4567"
          mail="thecat@hotmail.com"
        />
        <Contact 
          img={pumpkin}
          name="Pumpkin"
          phoneNumber="(0800) CAT KING"
          mail="pumpkin@scrimba.com"
        />
      </div>
    </div>
  )
}

export default App
