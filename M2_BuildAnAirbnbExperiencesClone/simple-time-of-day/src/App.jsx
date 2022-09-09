import './App.css'

function App() {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay = "";
  let background_color;


  if (hours < 12) {
    timeOfDay = "morning";
    background_color = "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon";
    background_color = "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"
  } else {
    timeOfDay = "night";
    background_color = "linear-gradient(to top, #283E51, #0A2342)"
  }

  return (
    <div className="bg-color" style={{background: background_color}}>
      <h1>Good {timeOfDay}</h1>
    </div>
  )
}

export default App
