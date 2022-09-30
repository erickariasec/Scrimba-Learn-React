function Joke (props) {
    return (
        <div className="joke-card">
            {/* If there is props.setup, render h3 if not not */}
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    );
}

export default Joke;