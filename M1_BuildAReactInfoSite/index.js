// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// <h1 class="header">Hello World</h1>

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);

/*
    {
        type: "h1", 
        key: null, 
        ref: null, 
        props: {
            className: "header", 
            children: "This is JSX"
        }, 
        _owner: null, 
        _store: {}
    }
 */

// JSX
// ReactDOM.render(element, document.getElementById("root"));




// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// );

// // JSX
// ReactDOM.render(
//     page, 
//     document.getElementById("root")
// );

// * If we need to show many elements, we need to wrap them into a div, since render needs only one parent element and doesn't matter if that parent element has children elements




/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>ERAS DEV</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));