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