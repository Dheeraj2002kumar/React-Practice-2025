/*

------------------------- React Custom Hooks --------------------------

Hooks are reusable functions.

When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

Custom Hooks start with "use". Example: useFetch.

Build a Hook
In the following code, we are fetching data in our Home component and displaying it.

We will use the JSONPlaceholder service to fetch fake data. This service is great for testing applications when there is no existing data.

To learn more, check out the JavaScript Fetch API section.

Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:

*/


import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Home;



/*

The fetch logic may be needed in other components as well, so we will extract that into a custom Hook.

Move the fetch logic to a new file to be used as a custom Hook:

*/




// import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })
            }
        </>
    );
};

export default Home;

