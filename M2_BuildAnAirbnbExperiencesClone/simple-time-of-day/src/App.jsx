import './App.css'

function App() {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay = "";

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div id="background-color" className="bg-color">
      <h1>Good {timeOfDay}</h1>
    </div>
  )
}

export default App
