import './App.css'
import Joke from './components/Joke'

/* 
!Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/

function App() {
  return (
    <div className="App">
      <h1>JOKES</h1>
      <Joke 
        punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}
        upvotes={50}
        downvotes={20}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
        upvotes={1}
        downvotes={5}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
        upvotes={156}
        downvotes={25}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
        upvotes={540}
        downvotes={304}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Joke 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
        upvotes={87}
        downvotes={19}
        comments={[{author: "", body: "", title: ""}]}
      />
    </div>
  )
}

export default App
