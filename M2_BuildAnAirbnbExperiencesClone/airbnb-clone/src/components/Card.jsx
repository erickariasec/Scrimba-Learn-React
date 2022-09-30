import star from "/assets/Card/star.png";
import "./Card.css";

export default function Card(props) {
    let badgeText
    if (props.content.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.content.location === "Online") {
        badgeText = "ONLINE"
    }

    /*
        !Challenge: Fix our component! 😱
    */

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`/assets/Card/${props.content.coverImg}`} className="card-image" />
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>{props.content.stats.rating}</span>
                <span className="gray">({props.content.stats.reviewCount}) • </span>
                <span className="gray">{props.content.location}</span>
            </div>
            <p className="card-title">{props.content.title}</p>
            <p className="card-price"><span className="bold">From ${props.content.price}</span> / person</p>
        </div>
    );
}