// Using memo will cause React to skip rendering a component if its props have not changed.

// This can improve performance.

// This section uses React Hooks. See the React Hooks section for more information on Hooks.




// const Todos = ({ todos }) => {
//   console.log("child render...");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//     </>
//   );
// };

// export default Todos;


// ----------- error ----------------
// When you click the increment button, the Todos component re-renders.

// If this component was complex, it could cause performance issues.



// ------------- Solution ---------------------
// To fix this, we can use memo.

// Use memoto keep the Todos component from needlessly re-rendering.

// Wrap the Todos component export in memo:

import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render...");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);

// Now the Todos component only re-renders when the todos that are passed to it through props are updated.