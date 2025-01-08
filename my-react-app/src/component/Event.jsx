// import React from "react";

// function Football() {
//   const shoot = () => {
//     alert("Great shot!");
//   };

//   return <button onClick={shoot}>Take the shot!</button>;
// }

// export { Football };

/*
----------------------------------------
Passing Arguments
To pass an argument to an event handler, use an arrow function.

Example:
Send "Goal!" as a parameter to the shoot function, using arrow function:

*/

// import React from "react";

// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   };

//   return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
// }

// export { Football };

/*
------------------------------------
React Event Object
Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event.

Example:
Arrow Function: Sending the event object manually:

*/
import React from "react";

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /**
     * 'b' represents the react event that triggered the function, in this case the 'click' event
     */
  };

  return (
    <button onClick={(event) => shoot("Goal", event)}>Take the shot!</button>
  );
}

export { Football };
