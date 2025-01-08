// import React from "react";

// function Car(props) {
//   return <h2>I am a {props.brand}!</h2>;
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand="Ford" />
//     </>
//   );
// }

// export { Garage };

/*
-----------------------------------------
If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

Example
Create a variable named carName and send it to the Car component:

*/

// import React from "react";

// function Car(props) {
//   return <h2>I am a {props.brand}!</h2>;
// }

// function Garage() {
//   const carName = "Ford";
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carName} />
//     </>
//   );
// }

// export { Garage };

/*
-----------------------------------------
Or if it was an object:

Example
Create an object named carInfo and send it to the Car component:

*/

import React from "react";

function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

export { Garage };
