import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

function App() {
  const cards = cardData.map(content => {
    return <Card 
      key={content.id}
      content={content}
    />
  }) 

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App;