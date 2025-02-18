/*

-------------  React useRef Hook --------------------

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

Does Not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.

Example:
Use useRef to track application renders.

*/

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

// function App1(){
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);

//     useEffect(() => {
//         // count.current = count.current + 1;
//         count.current++;
//     });

//     return (
//         <>
//             <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }

// export {App1};

/* 

useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).

It's like doing this: const count = {current: 0}. We can access the count by using count.current.

Run this on your computer and try typing in the input to see the application render count increase.

*/

/*

Accessing DOM Elements
In general, we want to let React handle all DOM manipulation.

But there are some instances where useRef can be used without causing issues.

In React, we can add a ref attribute to an element to access it directly in the DOM.

Example:
Use useRef to focus the input:

*/

// import { useRef } from "react";
// import ReactDOM from "react-dom";

// function App1(){
//     const inputElement = useRef();

//     const focusInput = () => {
//         inputElement.current.focus();
//     };

//     return (
//         <>
//             <input type="text" ref={inputElement} />
//             <button onClick={focusInput}>Focus Input</button>
//         </>
//     );
// }

// export {App1};

/*


------------ Tracking State Changes --------------------

The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.

Example:
Use useRef to keep track of previous state values:

*/

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App1() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]); // Only re-run the effect when `inputValue` changes

  return (
    <>
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export {App1};


// This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

// In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.