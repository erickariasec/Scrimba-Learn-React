function Joke (props) {
    return (
        <div className="joke-card">
            {/* If there is props.setup, render h3 if not not */}
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
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