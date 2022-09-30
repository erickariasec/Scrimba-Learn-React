import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import profilePictureKatie from "./assets/Card/katie-zaferes.png";

/*
  !Challenge: Pass props to the Card component and display that data

  - img ("katie-zaferes.png")
  - rating ("5.0")
  - reviewCount (6)
  - country (Whatever you want)
  - title ("Life Lessons with Katie Zaferes")
  - price (136)

*/

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img={profilePictureKatie}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App;
