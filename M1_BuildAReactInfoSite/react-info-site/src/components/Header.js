import "../logo192.png";
import "./Header.css";

function Header () {
    return (
        <header>
            <nav className="nav">
                <img className="logo" src="logo192.png" alt="react-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;