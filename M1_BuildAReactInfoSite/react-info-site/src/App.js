import "./App.css";
import "./logo192.png"
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

/*
    !Mini Challenge:
    *Move the `header` element from Page into its own component called "Header"

    !Challenge:
    *- Move the `footer` into its own component called "Footer" and render that component inside the Page component.
    *- Move the `h1` and `ol` together into another component called "MainContent" and render inside Page as well.
 */

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
