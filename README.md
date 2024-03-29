# Scrimba-Learn-React

## Build a React Info Site

### Why React?  

- **It's composable!** 
  ```js
  <body>
      <MyAwesomeNavBar />
      <MainContent />
      <MyAwesomeFooter />
  </body>
  ```  

- **It's declarative!**  
  #### Declarative  
  - What should be done?  
  ***"Just tell me what to do, and I'll worry about how I get it done"***  

  #### Imperative
  - How should it be done?  
  ***"Describe to me every step on how to do something, and I'll do it"***  

### What is JSX?  
- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.  

### Why do we need to import React from "react"` in our files?
- React is what defines JSX.  

### What does it mean for something to be "composable"?
- We have small pieces that we can put together to make something larger/greater than the individual pieces.  

### What is a React component?
- A function that returns React elements. (UI)

---

## Build an Airbnb Experiences Clone

### What do props help us accomplish?
- Make a component more reusable.  

### How do you pass a prop into a component?
- ```js
  <MyAwesomeHeader 
    title="Whatever"
    mail="hello@world.com"
    ...
  />
  ```  

### Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
- No, because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification. (Which doesn't include properties like `blahblahblah`)  

### How do I receive props in a component?
- ```js
  function Navbar(props) {
    console.log(props.blahblahblah)
    return (
      <header>
        <h1>{props.title}</h1>
        ...
      </header>
    )
  }
  ```  

### What data type is `props` when the component receives it?
- An object! 

### What does the `.map()` array method do?
- Returns a new array. Whatever gets returned from the callback function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them in some way.  

### What do we usually use `.map()` for in React?
- Convert an array of raw data into an array of JSX elements that can be displayed on the page.  

### Why is using `.map()` better than just creating the components manually by typing them out?
- It makes our code more "self-sustaining" - not requiring additional changes whenever the data changes.  

## Build an Meme Generator  

### Props
- "Props" refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above". A component receiving props is not allowed to modify those props. (I.e. they are "immutable".)

### State
- "State" refers to values that are managed by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.

### How would you describe the concept of "state"?
- A way for React to remember saved values from within a component. This is similar to declaring variables from within a component, with a few added bonuses (which we'll get to later)  

### When would you want to use props instead of state?
- Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.  

### When would you want to use state instead of props?
- Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component).  

### What does "immutable" mean? Are props immutable? Is state immutable?
- Unchanging. Props are immutable. State is mutable.

### You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). What are they?
- a. New value of state (setCount(42))
- b. Callback function - whatever the callback function returns === new value of state

### When would you want to pass the first option (from answer above) to the state setter function?  
- Whenever you don't need the previous value of state to determine what the new value of state should be. 

### When would you want to pass the second option (from answer above) to the state setter function?
- Whenever you DO need the previous value to determine the new value. 

### What is "conditional rendering"? 
- When we want to only sometimes display something on the page based on a condition of some sort.

### When would you use &&?
- When you want to either display something or NOT display it.

### When would you use a ternary?
- When you need to decide which thing among 2 options to display.

### What if you need to decide between > 2 options on what to display?
- Use an `if...else if... else` conditional or a `switch` statement.

### In a vanilla JS app, at what point in the form submission process do you gather all the data from the filled-out form?
- Right before the form is submitted.

### In a React app, when do you gather all the data from the filled-out form?
- As the form is being filled out. The data is all held in local state.

### Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?
- `name` property.

### What's different about saving the data from a checkbox element vs. other form elements?
- A checkbox uses the `checked` property to determine what should be saved in state. Other form elements use the `value` property instead.

### How do you watch for a form submit? How can you trigger a form submit?
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.

### What are React's primary tasks?
- Work with the DOM/browser to render UI to the page.
- Manage state for us between render cycles (i.e state values are "remembered" from one render to the next)
- Keep the UI updated whenever state changes occur

### What can't React handle on its own?
- (Out)side effects!
  - localStorage
  - API/database interactions
  - Subscriptions (e.g. web sockets)
  - Syncing 2 different internal states together
  - Basically anything that React isn't in charge of

### **useEffect**

### What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync.

### What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, render DOM elements.

### When does React run your useEffect function? When does it NOT run the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the array stay the same between renders.

### How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function
