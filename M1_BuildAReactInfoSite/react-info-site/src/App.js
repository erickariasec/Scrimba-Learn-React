import "./App.css";
import "./logo192.png"
import Header from "./components/Header"
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

/*
    !Challenge: 
    *- Add an `ul` inside the Header's `nav` and create the following `li`s: "Pricing", "About", & "Contact"
    *- Using flexbox, line up the nav items horizontally, and put them inline with the React logo.
    *- Change the image styling to happen in CSS instead of in-line
    ?For practice, add a new class to the image in order to style it
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
