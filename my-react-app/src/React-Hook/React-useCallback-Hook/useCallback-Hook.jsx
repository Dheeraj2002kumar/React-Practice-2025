/*

------------------ React useCallback Hook ----------------------------

The React useCallback Hook returns a memoized callback function.

Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.

This can improve performance.

The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter.

Problem
One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

In this example, you might think that the Todos component will not re-render unless the todos change:

This is a similar example to the one in the React.memo section.

Example:

*/

// import { useState } from "react";
// import ReactDOM from "react-dom";
// import Todos from "./Todos";

// const UseCallBack = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);

//     const increment = () => {
//         setCount((count) => count + 1);
//     };

//     const addTodo = () => {
//         setTodos((todos) => [...todos, "New Todo"]);
//     };

//     return (
//         <>
//             <Todos todos={todos} addTodo={addTodo} />
//             <hr />
//             <div>
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// }

// export default UseCallBack;


/*

Try running this and click the count increment button.

You will notice that the Todos component re-renders even when the todos do not change.

Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the addTodo function are changing when the count is incremented.

This is because of something called "referential equality".

Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

*/










import { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallBack;

//Now the Todos component will only re-render when the todos prop changes.
//This is because we are using memo, so the Todos component should not re-render since neither the 
//todos state nor the addTodo function are changing when the count is incremented.
//However, the Todos component is still re-rendering. This is because of something called "refer 
//ential equality".
//In JavaScript, two objects are considered equal if they have the same properties and values. However,
//two objects are not considered equal if they are the same object. This is why the Todos component
//is still re-rendering, because the addTodo function is a new object every time the component
//is rendered, even though the function itself is the same.