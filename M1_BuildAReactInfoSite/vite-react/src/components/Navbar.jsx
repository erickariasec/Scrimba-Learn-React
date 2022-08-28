import reactLogo from '../assets/react.svg';
import "./Navbar.css";

function Navbar() {
    return(
        <nav className='nav'>
            <div className='left'>
                <img className='logo' src={reactLogo} />
                <h3 className='logo-text'>ReactFacts</h3>
            </div>
            <div className="right">
                <h4 className="project-title">React Course - Project 1</h4>
            </div>
        </nav>
    );
}

export default Navbar;