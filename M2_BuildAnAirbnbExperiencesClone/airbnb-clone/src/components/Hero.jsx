import "./Hero.css"
import photoGrid from "/assets/photo-grid.png";

function Hero() {
    return (
        <section className="hero">
            <img className="grid-images" src={photoGrid} alt="Airbnb Experiences Photos" />
            <h1 className="title">Online Experiences</h1>
            <p className="description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Hero;