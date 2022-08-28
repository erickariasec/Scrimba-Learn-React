import "./App.css";
import "./logo192.png"

/*
    !Challenge: 

    *Part 1: Create a page of your own using a custom Page component

    *It should return an ordered list with the reasons why you're excited to be learning React :)

    *Render your list to the page
 */

function App() {
    return (
        <div>
            <img src="logo192.png" width="50" alt="react-logo"/>
            <h1>Reasons why I'm excited about learning React!</h1>
            <ol>
                <li>Increase my programming knowledge</li>
                <li>Create powerful web apps</li>
                <li>Work in top companies around the world</li>
            </ol>
        </div>
    );
}

export default App;
