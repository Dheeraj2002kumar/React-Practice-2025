import './App.css'

// function App() {

//   return (
//     <>
//       <h1>Hello React</h1>
//     </>
//   )
// }

// export default App


// ------------- CSS Styling -------------------
import Header from './css_styling/Inline_styling/inline';
import HeaderStylesheetEx from './css_styling/css_stylesheet/stylesheet_header';

function App(){
  return (
    <>
      <Header />
      <HeaderStylesheetEx />
    </>
  );
}



export default App;






















// ---------------- Todos -----------------------------
// Using memo will cause React to skip rendering a component if its props have not changed.

// This can improve performance.

// This section uses React Hooks. See the React Hooks section for more information on Hooks.

// Problem
// In this example, the Todos component re-renders even when the todos have not changed.


/*
import { useState } from "react";
import ReactDOM from "react-dom";
import Todos from './Todos/Todos';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default App;
*/



// When you click the increment button, the Todos component re-renders.

// If this component was complex, it could cause performance issues.





//----------------------------------------------------------




// --------------- React-Router ----------------

// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }





// ------------- React-Forms ----------------
// import { MyForm } from "./component/React-Forms";

// export default function App() {
//   return (
//     <>
//       <MyForm />
//     </>
//   );
// }





/*
// ------- React List ------------------
import { Garage } from "./component/React-Lists";

export default function App() {
  return (
    <>
      <Garage />
    </>
  );
}

*/

/* 
// ---------- React conditional ----------
import { Goal, Garage } from "./component/React_Conditional.js";

export default function App() {
  // const cars = ["Ford", "BMW", "Audi"];
  const cars = [];
  return (
    <>
      <Goal isGoal={true} />
      <Garage cars={cars} />
    </>
  );
}

*/

/*
--------- Event ------------------------

import { Football } from "./component/Event";

export default function App() {
  return (
    <>
      <Football />
    </>
  );
}

*/

/*
------------- props --------------------
import { Garage } from "./component/props";

export default function App() {
  return (
    <>
      <Garage />
    </>
  );
}

*/

/*
import { Job, Job1, Garage } from "./component/function_Component";
// import Car from "./component/Class_Components";

import Car from "./component/State";
export default function App() {
  return (
    <>
      <Car />
    </>
  );
}

*/
/*
// +++++++++ Class_Components.js ++++++++++++
import Garage1 from "./component/Class_Components";

export default function App() {
  return (
    <>
      <Car model="Mustang" />
      <Garage1 />
    </>
  );
}
*/

// ++++++++ function_Component.js +++++++++++++
/*
export default function App() {
  return (
    <div>
      {myElement7}
      <Garage />
    </div>
  );
}
*/
// ------------------------------

/* 
Attribute class = className
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute className instead.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.
*/

// const myElement5 = <h1 className="myElement5">Hello React</h1>;

// -------------------------------

// +++++++++++++ Conditions - if statements ++++++

/* 
React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

Option 1:
Write if statements outside of the JSX code:

Example
Write "Hello" if x is less than 10, otherwise "Goodbye":
*/

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello!";
}

const myElement6 = <h1>{text}</h1>;

// ----------------------

/**
 Option 2:
Use ternary expressions instead:

Example
Write "Hello" if x is less than 10, otherwise "Goodbye":

 */

const x1 = 5;

const myElement7 = <h1>{x1 < 10 ? "Hello React!" : "Goodbye"}</h1>;

// Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

// -------------------------------
