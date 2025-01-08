/*
React Conditional Rendering

In React, you can conditionally render components.

There are several ways to do this.

if Statement
We can use the if JavaScript operator to decide which component to render.

Example:
We'll use these two components:

*/

// import React from "react";

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }

// export { Goal };

/*
---------- Logical && Operator -------------

Logical && Operator
Another way to conditionally render a React component is by using the && operator.

Example:
We can embed JavaScript expressions in JSX by using curly braces:

*/

// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
//     </>
//   );
// }

// export { Garage };

/* 

If cars.length > 0 is equates to true, the expression after && will render.

Try emptying the cars array:

*/

/*

---------- Ternary Operator--------------

Another way to conditionally render elements is by using a ternary operator.

condition ? true : false

We will go back to the goal example.

Example:
Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:

*/

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

export { Goal };
