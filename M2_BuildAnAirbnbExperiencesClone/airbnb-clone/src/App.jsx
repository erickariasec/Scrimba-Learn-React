import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

/*
  !Challenge:

  - import the array of data from cardData.js
  - map over the array to create <Card /> components
  - display the array of card components under the navbar
    (in place of the current <Card /> component)

  Note: We haven't styled the group of components yet, so they'll
  still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
  const cards = cardData.map(content => {
    return <Card 
      key={content.id}
      img={content.coverImg}
      rating={content.stats.rating}
      reviewCount={content.stats.reviewCount}
      location={content.location}
      title={content.title}
      price={content.price}
      openSpots={content.openSpots}
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