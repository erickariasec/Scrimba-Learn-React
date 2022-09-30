import './App.css'
import Joke from './components/Joke'
import jokesData from './jokesData'

/*
  !Challenge: See if you can correctly pass the necessary props to the Joke component in the .map() (and render the jokeElements array) so the jokes show up on the page again
*/

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke 
      setup={joke.setup}
      punchline={joke.punchline}
      isPun={joke.isPun}
      upvotes={joke.upvotes}
      downvotes={joke.downvotes}
      author={joke.comments.author}
    />
  })

  return (
    <div className="App">
      <h1>JOKES</h1>
      {jokeElements}
    </div>
  )
}

export default App
