import logo from "../../public/assets/airbnb-logo.png";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <img className="logo" src={logo} alt="Airbnb Logo" />
        </nav>
    );
}

export default Navbar;