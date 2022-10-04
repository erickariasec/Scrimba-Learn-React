export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`/assets/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}