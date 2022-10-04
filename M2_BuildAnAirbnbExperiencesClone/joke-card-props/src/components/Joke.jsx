import { useState } from "react";

function Joke (props) {

    /**
        * !Challenge:
        * - Create state `isShown` (boolean, default to `false`)
        * - Add a button that toggles the value back and forth
        * - Only display the punchline paragraph if `isShown` is true
    */

    const [isShown, setIsShown] = useState(false)

    function toggle() {
        setIsShown(prevIsShown => !prevIsShown)
    }

    let wordAction
    if (isShown) {
        wordAction = "Hide"
    } else {
        wordAction = "Show"
    }

    return (
        <div className="joke-card">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={toggle} className="toggle">{wordAction} Punchline</button>
            <div className="likes-container">
                <p className="like">👍 {props.upvotes}</p>
                <p className="not-like">👎 {props.downvotes}</p>
            </div>
            <h6>Author: {props.author}</h6>
            <hr />
        </div>
    );
}

export default Joke;