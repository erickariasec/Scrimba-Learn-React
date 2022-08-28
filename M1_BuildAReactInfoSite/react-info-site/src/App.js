import "./App.css";
import "./logo192.png"
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

/*
    !Challenge: move the Footer and MainContent components into their own files.
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
